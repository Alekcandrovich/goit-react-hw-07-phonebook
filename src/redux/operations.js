import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsApi, addContactApi, deleteContactApi } from '../api/api';

const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await fetchContactsApi();
          return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }    
});

const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
      try {
        const response = await addContactApi(newContact);
          return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        } 
});

const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
    await deleteContactApi(id);
    return id;
});

export { fetchContacts, addContact, deleteContact };