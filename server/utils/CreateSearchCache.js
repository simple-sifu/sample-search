/* eslint-disable no-underscore-dangle */
// prefix search only
// case insensitive

function createSearchCache(items) {
  // eslint-disable-next-line no-console
  console.log('Creating SearchCache');
  const hashMap = {};
  const productCache = {};
  items.forEach((product) => {
    const searchWordsArr = product.name.split(' ').map((word) => word.toLowerCase()).concat(product.tags.map((tag) => tag.toLowerCase()));
    searchWordsArr.forEach((searchWord) => {
      let growingChar = '';
      searchWord.split('').forEach((char) => {
        growingChar = growingChar.concat(char);
        if (!hashMap[growingChar]) {
          hashMap[growingChar] = [product._id];
        } else if (!hashMap[growingChar].includes(product._id)) {
          hashMap[growingChar] = hashMap[growingChar].concat(product._id);
        }
      });
    });
    productCache[product._id] = product;
  });

  return (searchTerm) => {
    if (searchTerm === '') return [];
    const arrayOfIds = hashMap[searchTerm.toLowerCase()] || [];
    return arrayOfIds.map((id) => productCache[id]);
  };
}

module.exports = createSearchCache;
