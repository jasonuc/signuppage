import React, { useState } from "react";
import Header from "./components/Header";
import Signup from "./components/SignUp";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();

function App() {

  const [signedIn, setSignedIn] = useState(false);
  const [userInput, setUserInput] = useState({})

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
      .then(userCredentials => {
        console.log(userCredentials);
        alert('Sign up Successful!')
      }).catch(({ code, message }) => {
        console.log(`${code}\n${message}`);
        alert(`${code}\n${message}`);
      })
  }

  return (
    <div className=" h-screen bg-YourPink flex flex-col items-center">
      <Header />
      <Signup setSignedIn={setSignedIn} userInput={userInput} setUserInput={setUserInput} handleSubmit={handleSubmit} />
      {signedIn && <p>This User is signed in</p>}
    </div>
  )
}

export default App;