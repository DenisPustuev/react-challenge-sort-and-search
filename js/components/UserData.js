import React, { Component } from 'react';
import PropTypes from 'prop-types';

const UserData = ({user, setActiveUser}) => {

  const selectUser = () => {
    setActiveUser(user)
  };

  return (
    <tr className="user-row" onClick={selectUser}>
      <td><img className="user-image" src={'images/' + user.image + '.svg'} alt="user avatar"/></td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.phone}</td>
    </tr>
  );
};

UserData.propTypes = {
  user: PropTypes.object.isRequired,
  setActiveUser: PropTypes.func.isRequired
};

export default UserData;
