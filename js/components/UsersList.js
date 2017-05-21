import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserData from './UserData';

export default class UsersList extends Component {

  render(){

    return (
      <div className="col-sm-8 col-md-9 col-lg-10">
        <table className="user-list table table-striped">
          <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
          </thead>
          <tbody>
          {this.props.filteredUsers.map((user) => {
            return (
              <UserData
                user={user}
                key={user.id}
                setActiveUser={this.props.setActiveUser}/>
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired
};
