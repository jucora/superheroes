import axios from 'axios';

const mainURL = 'https://superheroapi.com/api/';
const token = '10158834754620746';

const heroApi = (() => {
  const getHeroById = heroId => new Promise((resolve, reject) => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/${mainURL + token}/${heroId}`)
      .then(data => {
        resolve(data.data);
        reject(new Error('something bad happened'));
      });
  });

  const getHeroByName = name => new Promise((resolve, reject) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${
          mainURL + token
        }/search/${name}`,
      )
      .then(data => {
        resolve(data.data.results);
        reject(new Error('something bad happened'));
      });
  });

  return {
    getHeroByName,
    getHeroById,
  };
})();

export default heroApi;
