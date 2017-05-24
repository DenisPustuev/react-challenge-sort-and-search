import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar'
import ToolBar from './ToolBar'
import ActiveUser from './ActiveUser'

export default class Sidebar extends Component {

  //updating component dom only if active user has changed
  shouldComponentUpdate(newProps) {
    return this.props.activeUser !== newProps.activeUser;
  }

  render() {
    const {activeUser, isActiveUser, onSearch, searchVal, onSortUsers, users, filteredUsers, setActiveUser} = this.props;
    return (
      <div className="col-sm-4 col-md-3 col-lg-2">
        <SearchBar onSearch={onSearch} searchVal={searchVal} users={users} setActiveUser={setActiveUser} />
        <ToolBar onSortUsers={onSortUsers} users={users} filteredUsers={filteredUsers} />
        <ActiveUser {...activeUser} isActiveUser={isActiveUser} />
      </div>
    );
  }
}

Sidebar.propTypes = {
  activeUser: PropTypes.object,
  isActiveUser: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  filteredUsers: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
  setActiveUser: PropTypes.func.isRequired,
  onSortUsers: PropTypes.func.isRequired
};
