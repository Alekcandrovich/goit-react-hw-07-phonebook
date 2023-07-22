import axios from 'axios';

const API_URL = `https://64aec52dc85640541d4dabc5.mockapi.io`;

export const fetchContactsApi = () =>
    axios.get(`${API_URL}/contacts`);
export const addContactApi = newContact =>
    axios.post(`${API_URL}/contacts`, newContact);
export const deleteContactApi = id =>
    axios.delete(`${API_URL}/contacts/${id}`);