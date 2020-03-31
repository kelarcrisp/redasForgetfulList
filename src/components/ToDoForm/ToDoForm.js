import React, { useState } from 'react';
import { FormControl, InputLabel, TextField, Button } from '@material-ui/core';
import classes from './ToDoForm.module.css';
import axios from 'axios';
const ToDoForm = props => {

    const [toDo, setToDo] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = {
            toDos: toDo
        }
        axios.post('https://redas-forgetful-list.firebaseio.com/ToDos.json', dataToSubmit).then(response => console.log(response, 'its been sent'))
    }

    const handleChange = (e) => {
        e.preventDefault();
        setToDo(e.target.value)
    }
    return (
        <React.Fragment>
            <div className={classes.Form}>
                <div style={{ marginBottom: '50px' }}> Redas Forgetful List is now yours to use!</div>
                <FormControl onSubmit={handleFormSubmit}>
                    <TextField value={toDo} onChange={handleChange} aria-describedby="my-helper-text" />
                    <Button style={{ marginTop: '1rem' }} type='submit' onClick={handleFormSubmit} variant="contained">Submit</Button>
                </FormControl>
            </div>
        </React.Fragment>
    );
};


export default ToDoForm;