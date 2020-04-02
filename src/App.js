import React from 'react';
import firebaseConfig from './Firebase/FirebaseConfig';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDos from './components/ToDos/ToDos';
import firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div >
      <ToDoForm />
      {/* <ToDos /> */}
    </div>
  );
}

export default App;
