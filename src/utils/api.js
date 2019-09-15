const data = [
  {
    id: 1,
    name: "Arakantsev Konstantin",
    username: "kostya3312",
    email: "kostya3312@gmail.com"
  },
  {
    id: 2,
    name: "Tom Cruise",
    username: "topgun",
    email: "cruise@yandex.ru"
  }
];

const getUsers = () =>
  new Promise(res => {
    setTimeout(() => res(data), 2000);
  });

export { getUsers };
