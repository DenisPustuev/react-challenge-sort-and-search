import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(e) {
    const filteredUsers = this.props.users.filter((user) => { // filter always from fetched users
      const name = user.name.toLowerCase();
      const searchVal = e.target.value.toLowerCase();

      return name.indexOf(searchVal) !== -1;
    });

    this.props.onSearch(filteredUsers);
    this.props.setActiveUser(filteredUsers[0]);
  }

  render(){
    return (
      <div className="form-group searchbar">
        <input type="text" className="form-control" placeholder="Search people by name" onChange={this.onChangeSearch}/>
      </div>
    );
  }
}

SearchBar.propTypes = {
  users: PropTypes.array.isRequired,
  setActiveUser: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};
