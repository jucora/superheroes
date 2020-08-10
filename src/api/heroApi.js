import axios from 'axios';

const mainURL = 'https://superheroapi.com/api/';
const token = '10221160774421792';

const heroApi = (() => {
  const getByName = name => new Promise((resolve, reject) => {
    axios.get(`${mainURL + token}/search/${name}`).then(data => {
      resolve(data.data.results);
      reject(new Error('something bad happened'));
    });
  });

  return {
    getByName,
  };
})();

export default heroApi;
