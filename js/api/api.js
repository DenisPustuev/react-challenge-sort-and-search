import $ from 'jquery'

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: '/react-challenge-sort-and-search/data.json',
      dataType: 'json',
      success: function (data) {
        resolve(data)
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown + ': Error ' + jqXHR.status, 'jsonAPIERROR');
        reject({error: 'Can\'t get users'});
      }
    });
  });
};