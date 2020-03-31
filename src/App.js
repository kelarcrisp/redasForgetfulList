import React from 'react';
import logo from './logo.svg';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDos from './components/ToDos/ToDos';

function App() {
  return (
    <div >
      <ToDoForm />
      <ToDos />
    </div>
  );
}

export default App;