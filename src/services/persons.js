import axios from 'axios';

const url = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(url);

  return request.then(response => response.data);
};

const create = ({ newPersonObject }) => {
  const request = axios.post(url, newPersonObject);

  return request.then(response => response.data);
};

const deletePerson = ({ id }) => {
  const request = axios.delete(`${url}/${id}/`);

  return request.then(response => response);
};

const update = ({ id, personToUpdate }) => {
  const request = axios.put(`${url}/${id}`, personToUpdate);

  return request.then(response => response.data);
};

export default { getAll, create, deletePerson, update };
