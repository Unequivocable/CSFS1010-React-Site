import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import UserContext from './User'

const EntryForm = () => {
    const { token } = useContext(UserContext);
    const [data, setData] = useState( [] )
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios({
                method: 'get',
                url: "contact_form/entries",
                headers: { Authorization: `Bearer ${token.token}` }
                 });
                setData(response.data);
            } catch (error) {
        // const response = error.response.data.invalid ? `${error.response.data.message} ${error.response.data.invalid}` : `${error.response.data.message}`;
        alert(error)
        console.log(error);
    }
        }
        getData()
    }, [token.token]);

    return (
        <>
            {data.slice(0).reverse().map(entry => (
                <li key={entry.id}>Name : {entry.name} <br />
                Email: {entry.email} <br />
                Phonenumber: {entry.phoneNumber} <br />
                Message: {entry.content} <br />
                Entry ID: {entry.id}</li>

            ))}
    </>
    );
};

export default EntryForm
