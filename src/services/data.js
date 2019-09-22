const url = "./services/data.json";

const getDataFromServer = () => {
  return fetch(url).then(response => response.json());
};

export default getDataFromServer;
