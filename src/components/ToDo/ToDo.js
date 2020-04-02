import React, { useState, useEffect } from 'react';
import classes from './ToDo.module.css';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const ToDo = props => {

    return (
        <div>
            <ul className={classes.List}>
                <li className={classes.TodoContainer}>
                    <div className={classes.ToDoInfo}>{props.todos}</div>
                    <div className={classes.ToDoIcons}>
                        {<EditIcon className={classes.ToDoIcon} fontSize='small'></EditIcon>}
                        {<DeleteIcon className={classes.ToDoIcon} onClick={() => props.delete(props.id)} fontSize='small'></DeleteIcon>}
                    </div>
                </li>
            </ul>
        </div>
    );
};



export default ToDo;