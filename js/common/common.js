export const sortingFunc = (sortByProp, direction) => {
  let sortOrder = direction ? 1 : -1;

  return function (a, b) {
    let objA = a[sortByProp];
    let objB = b[sortByProp];

    if(typeof objA === 'string') {
      objA.toUpperCase();
      objB.toUpperCase();
    }

    let comparison = 0;
    if (objA > objB) {
      comparison = 1;
    } else if (objA < objB) {
      comparison = -1;
    }

    return comparison * sortOrder;
  }
}
