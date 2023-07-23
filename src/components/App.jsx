import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    React.useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <div className="container">
            <h1 className="heading">Phonebook</h1>
            <ContactForm />
            <h2 className="contacts_title">Contacts</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <Filter />
                    <ContactList />
                </>
            )}
        </div>
    );
};

export default App;
