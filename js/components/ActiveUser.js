import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ActiveUser extends Component {

  render() {
    const {image, name, age, phone, phrase, isActiveUser} = this.props;

    if(isActiveUser){
      return (
        <div className="active-user thumbnail">
          <img src={'images/' + image + '.svg'} alt=""/>

          <div className="active-user__desc-block">
            <h3 className="active-user__name">{name}</h3>
            <table className="active-user__info table table-responsive">
              <tbody>
              <tr>
                <td>Age:</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>Animal:</td>
                <td>{image}</td>
              </tr>
              <tr>
                <td>phone:</td>
                <td>{phone}</td>
              </tr>
              </tbody>
            </table>

            <p className="active-user__phrase"><span
              className="active-user__phrase-title">Favourite phrase: </span> {phrase}</p>
          </div>
        </div>
      )
    } else {
      return( <p>Nothing found :(</p> )
    }
  };
}

ActiveUser.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
  phone: PropTypes.string,
  phrase: PropTypes.string,
  isActiveUser: PropTypes.bool.isRequired
};