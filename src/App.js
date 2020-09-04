import React from "react";
// import { firebaseConfig } from "./Firebase/FirebaseConfig";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import firebase from "firebase/app";
// firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <ToDoForm />
      {/* <ToDos /> */}
    </div>
  );
}

export default App;
