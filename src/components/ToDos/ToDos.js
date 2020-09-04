import React, { useState, useEffect } from "react";
import axios from "axios";
import ToDo from "../ToDo/ToDo";
import "../../App.css";
const ToDos = props => {
  const { formSubmit } = props;
  const [fetchedToDos, setFetchedToDos] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get("https://redas-forgetful-list.firebaseio.com/ToDos.json")
        .then(responseData => {
          const fetchedItems = [];
          for (const key in responseData.data) {
            fetchedItems.push({
              id: key,
              toDos: responseData.data[key]
            });
          }
          setFetchedToDos(fetchedItems);
        });
      return () => {
        clearTimeout(timer);
      };
    }, 100);
  }, [formSubmit]);

  //this deletes items locallly and needs to be changed to delete them from the DB

  const deleteTodo = toDoId => {
    const url = "https://redas-forgetful-list.firebaseio.com";
    axios
      .delete(`${url}/ToDos/${toDoId}.json`)
      .then(response => {})
      .catch(err => console.log(err));
    let newToDos = fetchedToDos.filter(x => {
      return x.id !== toDoId;
    });
    setFetchedToDos(newToDos);
  };

  return (
    <div>
      {fetchedToDos.map(x => {
        return (
          <ToDo
            key={x.id}
            id={x.id}
            todos={x.toDos.toDos}
            delete={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default ToDos;
