import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsApi, addContactApi, deleteContactApi } from '../api/api';

const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await fetchContactsApi();
    return response.data;
});

const addContact = createAsyncThunk('contacts/addContact', async newContact => {
    const response = await addContactApi(newContact);
    return response.data;
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
    await deleteContactApi(id);
    return id;
});

export { fetchContacts, addContact, deleteContact };