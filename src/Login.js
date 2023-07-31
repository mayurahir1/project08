import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Login() {
    const [users, setUsers] = useState([])
    const [all, setAll] = useState('');

    useEffect(() => {
        axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
            .then((response) => {
                setUsers(response.data)
                console.log(response.data);
            })
            .catch((error) => {

                console.log(error);
            })

    }, [])


    const filteredData = users.filter((item) => {
        return (


            item.first.toLowerCase().includes(all.toLowerCase()) ||
            item.last.toLowerCase().includes(all.toLowerCase()) ||
            item.email.toLowerCase().includes(all.toLowerCase()) ||
            item.created.toLowerCase().includes(all.toLowerCase()) ||
            item.balance.toLowerCase().includes(all.toLowerCase()) ||
            item.address.toLowerCase().includes(all.toLowerCase())


        );


    });


    return (
        <div className="App">
            <input type="search" placeholder='Search_All' value={all} onChange={(e) => setAll(e.target.value)} />

            <>
                <h1>Users</h1>
                <table border={1}>
                    <tr style={{ border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Name</th>
                        <th style={{ border: '1px solid black' }}>last</th>
                        <th style={{ border: '1px solid black' }}>Email</th>
                        <th style={{ border: '1px solid black' }}>created</th>
                        <th style={{ border: '1px solid black' }}>balance</th>
                        <th style={{ border: '1px solid black' }}>address</th>
                    </tr>
                    {filteredData.map(user => (
                        <tr key={user.id}>
                            <td style={{ border: '1px solid black' }}>{user.first}</td>
                            <td style={{ border: '1px solid black' }}>{user.last}</td>
                            <td style={{ border: '1px solid black' }}>{user.email}</td>
                            <td style={{ border: '1px solid black' }}>{user.created}</td>
                            <td style={{ border: '1px solid black' }}>{user.balance}</td>
                            <td style={{ border: '1px solid black' }}>{user.address}</td>
                        </tr>
                    ))}
                </table>
            </>

        </div>
    )
}




