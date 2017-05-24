import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserData extends Component {
  constructor(props){
    super(props);
    this.selectUser = this.selectUser.bind(this);
  }

  selectUser(){
    this.props.setActiveUser(this.props.user)
  };

  render(){
    const { user } = this.props;

    return (
      <tr className="user-row" onClick={this.selectUser}>
        <td><img className="user-image" src={'images/' + user.image + '.svg'} alt="user avatar"/></td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.phone}</td>
      </tr>
    );
  }
}

UserData.propTypes = {
  user: PropTypes.object.isRequired,
  setActiveUser: PropTypes.func.isRequired
};
