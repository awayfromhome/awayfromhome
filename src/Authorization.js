import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './ducks/auth/authAsync';

const Authorization = allowedRoles => {
  return WrappedComponent => {
    const withAuthorization = props => {
      if (!props.user.id) {
        props.getUser();
      }
      const { role } = props.user;
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...props} />;
      } else {
        return <Redirect to='/' />;
      }
    };

    const mapStateToProps = state => {
      return {
        user: state.authReducer.user
      };
    };
    return connect(
      mapStateToProps,
      { getUser }
    )(withAuthorization);
  };
};

export default Authorization;
