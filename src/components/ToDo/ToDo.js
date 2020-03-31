import React, { useState } from 'react';

const ToDo = props => {
    return (
        <div>
            <ul>
                <li>
                    {props.todos}
                </li>
            </ul>
        </div>
    );
};



export default ToDo;