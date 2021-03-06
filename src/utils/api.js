import currenciesData from "./currenciesData";

const getUsers = () =>
  fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    .then(res => res.json())
    .then(({ results: users }) => {
      return users.map(({ name, login, email, location }) => ({
        name: getFullName(name),
        username: login.username,
        email,
        location: `${location.street}, ${location.city}`
      }))
    });

const getCurrencies = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(currenciesData);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });

const getFullName = ({ first, last }) => {
  const firstName = upperFirst(first);
  const lastName = upperFirst(last);
  return `${firstName} ${lastName}`;
};

const upperFirst = word => word[0].toUpperCase() + word.slice(1);


export { getUsers, getCurrencies };
