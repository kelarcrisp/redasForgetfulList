import React, { useState } from "react";
import classes from "./ToDo.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const ToDo = props => {
  const [complete, setComplete] = useState(false);
  let toggleLineThrough;
  if (!complete) {
    toggleLineThrough = <div className={classes.ToDoInfo}>{props.todos}</div>;
  } else {
    toggleLineThrough = (
      <div className={classes.ToDoInfoLineThrough}>{props.todos}</div>
    );
  }
  return (
    <div className="ToDoContainer">
      <ul className={classes.List}>
        <li className={classes.TodoContainer}>
          {}
          {toggleLineThrough}
          <div className={classes.ToDoIcons}>
            {
              <EditIcon
                className={classes.ToDoIcon}
                onClick={() => setComplete(!complete)}
                fontSize="small"
              ></EditIcon>
            }
            {
              <DeleteIcon
                className={classes.ToDoIcon}
                onClick={() => props.delete(props.id)}
                fontSize="small"
              ></DeleteIcon>
            }
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ToDo;
