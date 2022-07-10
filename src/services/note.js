import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

const getAll = () => {
  return axios.get(baseUrl);
};

const create = ({ newNoteObject }) => {
  return axios.post(baseUrl, newNoteObject);
};
const update = ({ id, changedNote }) => {
  return axios.put(`${baseUrl}/${id}`, changedNote);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
};
