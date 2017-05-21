import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sortingFunc } from '../common/common'

export default class ToolBar extends Component {

  constructor(props){
    super(props);

    this.sortUsers = this.sortUsers.bind(this);
    this.sortBy = '';
    this.isDirectionAsc = true; //true is asc direction, false is desc direction
  }

  sortUsers(e){
    const sortType = e.currentTarget.dataset.sort;
    this.isDirectionAsc = this.sortBy === sortType ? !this.isDirectionAsc : true;
    this.sortBy = sortType;

    const sortedUsers = this.props.users.sort(sortingFunc(sortType, this.isDirectionAsc));
    const sortedFilteredUsers = this.props.filteredUsers.sort(sortingFunc(sortType, this.isDirectionAsc));

    this.props.onSortUsers(sortedUsers, sortedFilteredUsers); //filter two arrays to maintain sorting when user is searching
  }

  render() {
    return (
      <div className="toolbar">
        <button
          className="btn btn-default toolbar__btn"
          data-sort="name"
          onClick={this.sortUsers}
        >
          <i className="icon fa fa-sort-alpha-asc"> </i>
          <span>Sort by name</span>
        </button>

        <button
          className="btn btn-default toolbar__btn"
          data-sort="age"
          onClick={this.sortUsers}
        >
          <i className="icon fa fa-sort-numeric-desc"> </i>
          <span>Sort by age</span>
        </button>
      </div>
    );
  }
}

ToolBar.propTypes = {
  onSortUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  filteredUsers: PropTypes.array.isRequired
};
