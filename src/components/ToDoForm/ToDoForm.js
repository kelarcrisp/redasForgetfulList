import React, { useState } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import classes from "./ToDoForm.module.css";
import axios from "axios";
import ToDos from "../ToDos/ToDos";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 10px auto;
  text-align: center;
  border-color: blue;
`;
const ToDoForm = props => {
  const [toDo, setToDo] = useState("");
  const [submitForm, setSubmitForm] = useState(toDo);
  const [loading, setLoading] = useState(false);
  const handleFormSubmit = e => {
    e.preventDefault();
    setSubmitForm(toDo);
    setLoading(true);
    const dataToSubmit = {
      toDos: toDo
    };
    setToDo("");
    axios
      .post(
        "https://redas-forgetful-list.firebaseio.com/ToDos.json",
        dataToSubmit
      )
      .then(response => console.log(response, "its been sent"));
    setLoading(false);
  };

  return (
    <React.Fragment>
      <div className={classes.Form}>
        <div style={{ marginBottom: "50px" }}>
          {" "}
          Redas Forgetful List is now yours to use!
        </div>
        <FormControl onSubmit={handleFormSubmit}>
          <TextField
            value={toDo}
            onChange={event => setToDo(event.target.value)}
            aria-describedby="my-helper-text"
          />
          <Button
            style={{ marginTop: "1rem" }}
            onClick={handleFormSubmit}
            type="button"
            value="submit"
            variant="contained"
          >
            Submit
          </Button>
        </FormControl>
        <FadeLoader css={override} size={50} color={"blue"} loading={loading} />
      </div>
      <div>
        <ToDos formSubmit={submitForm} />
      </div>
    </React.Fragment>
  );
};

export default ToDoForm;
