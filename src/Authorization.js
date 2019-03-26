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
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...props} />;
      } else {
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
