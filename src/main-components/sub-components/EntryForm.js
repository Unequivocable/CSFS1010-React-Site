import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import UserContext from './User'

const EntryForm = () => {
    const { token } = useContext(UserContext);
    const [data, setData] = useState( [] )
    
    useEffect(() => {
        const getData = async () => {
            const response = await axios({
            method: 'get',
            url: "contact_form/entries",
            headers: { Authorization: `Bearer ${token.token}` }
           });
        setData(response.data);
        }
        getData()
    }, [token.token]);

    return (
        <>
            {console.log(data)}
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
