import './App.css';
import React from 'react';
import { useState, createContext, useContext } from "react";

const UserContext = createContext();
const UserContext2 = createContext();


function App() {
  const [user, setUser] = useState("Jesse Hall");


  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  const [user2, setUser2] = useState("Yasin Arfat");

  return (
    <>
    <UserContext2.Provider value={user2}>
    <h1>Component 2 <br/>
    the user2 is {user2}</h1>
      <Component3 user2={user2}/>

      </UserContext2.Provider>
     
    </>
  );
}

function Component3(props) {
  return (
    <>
      <h1>Component 3 <br/>
      the user2 is {props.user2}</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 4 {user}</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  const user2 = useContext(UserContext2);


  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`} and hello user2 {user2}</h2>
    </>
  );
}





export default App;
