import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './ducks/async';

const Authorization = allowedRoles => {
  return WrappedComponent => {
    const withAuthorization = props => {
      if (!props.user.id) {
        props.getUser();
      }
      const { role } = props.user;
      console.log(props.user);
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...props} />;
      } else {
        console.log('hit');
        return <Redirect to='/' />;
      }
    };

    const mapStateToProps = state => {
      return {
        user: state.user
      };
    };
    return connect(
      mapStateToProps,
      { getUser }
    )(withAuthorization);
  };
};

export default Authorization;

// export default function Authorization(allowedRoles) {
//     return WrappedComponent => {
//   class WithAuthorization extends Component {
//         static propTypes = {
//           user: PropTypes.object,
//         };
//         constructor(props) {
//           super(props);
//         }
//         render() {
//           const { user } = this.props;
//           if (allowedRoles.includes(user.account_type)) {
//             return <WrappedComponent {...this.props} />;
//           } else {
//             return <h1>No page for you!</h1>;
//           }
//         }
//       };
//   return connect(state => {
//         return { user: state.application.user };
//       })(WithAuthorization);
//   };
//   };
