import React, { useState, useCallback } from 'react';
import { FormControl, InputLabel, TextField, Button } from '@material-ui/core';
import classes from './ToDoForm.module.css';
import axios from 'axios';
import ToDos from '../ToDos/ToDos';
const ToDoForm = props => {

    const [toDo, setToDo] = useState('')
    const [toDoId, setToDoId] = useState(1)
    const [submitForm, setSubmitForm] = useState(toDo)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitForm(toDo)
        const dataToSubmit = {
            toDos: toDo
        }
        setToDoId(dataToSubmit.id)
        axios.post('https://redas-forgetful-list.firebaseio.com/ToDos.json', dataToSubmit).then(response => console.log(response, 'its been sent'))

    }
    return (
        <React.Fragment>
            <div className={classes.Form}>
                <div style={{ marginBottom: '50px' }}> Redas Forgetful List is now yours to use!</div>
                <FormControl onSubmit={handleFormSubmit}>
                    <TextField value={toDo} onChange={(event) => setToDo(event.target.value)} aria-describedby="my-helper-text" />
                    <Button style={{ marginTop: '1rem' }} onClick={handleFormSubmit} type='button' value='submit' variant="contained">Submit</Button>
                </FormControl>
            </div>
            <ToDos formSubmit={submitForm} />
        </React.Fragment>
    );
};


export default ToDoForm;