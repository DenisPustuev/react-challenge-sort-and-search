import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import UsersList from './components/UsersList';

import { getUsers } from './api/api'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: {},
      users: [],
      filteredUsers: [],
      usersLoadingError: false,
    };

    this.setActiveUser = this.setActiveUser.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSortUsers = this.onSortUsers.bind(this);
  }

  componentWillMount() {
    getUsers().then((data) => {
      this.setState({
        users: data,
        filteredUsers: data,
        activeUser: data[0],
        usersLoading: false
      })
    }, (error) => {
      this.setState({usersLoadingError: true})
    })
  }

  setActiveUser (user) {
    this.setState({activeUser: user})
  }

  onSearch(filteredUsers){
    this.setState({filteredUsers})
  }

  onSortUsers(users, filteredUsers) {
    this.setState({
      users: users,
      filteredUsers: filteredUsers,
      activeUser: filteredUsers[0]
    })
  }

  render() {
    return (
      <div className="container-fluid app">
        {this.state.users.length > 0 &&
        <div className="row">
          <Sidebar
            filteredUsers={this.state.filteredUsers}
            activeUser={this.state.activeUser}
            isActiveUser={this.state.filteredUsers.length > 0}
            setActiveUser={this.setActiveUser}
            onSearch={this.onSearch}
            users={this.state.users}
            onSortUsers={this.onSortUsers}
          />

          <UsersList
            users={this.state.users}
            filteredUsers={this.state.filteredUsers}
            setActiveUser={this.setActiveUser}
          />
        </div>
        }

        {this.state.usersLoadingError &&
          <p className="error">Error fetching users</p>
        }
      </div>
    );
  }
}
