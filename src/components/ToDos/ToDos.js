import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDo from '../ToDo/ToDo';
const ToDos = props => {

    const [fetchedToDos, setFetchedToDos] = useState([])

    useEffect(() => {
        axios.get('https://redas-forgetful-list.firebaseio.com/ToDos.json').then(response => response).then(responseData => {
            let fetchedToDos = [];
            console.log(responseData.data, 'responsedata')
            for (const key in responseData.data) {
                fetchedToDos.push({
                    id: key,
                    toDos: responseData.data[key]
                })
            }
            console.log(fetchedToDos, 'the array that is getting merged with state')
            setFetchedToDos(fetchedToDos)
        })
    }, [fetchedToDos])

    return (
        <div>

            {fetchedToDos.map((x) => {
                return <ToDo
                    key={x.id} todos={x.toDos.toDos} />
            })}
        </div>
    );
};


export default ToDos;