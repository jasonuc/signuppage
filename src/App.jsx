import React, { useState } from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();

function App() {

  const [signedIn, setSignedIn] = useState(false);
  const [userInput, setUserInput] = useState({})

  const handleSubmit = () => {
    // createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
    signInWithEmailAndPassword(auth, userInput.email, userInput.password)
      .then(userCredentials => {
        setSignedIn(true);
        console.log(userCredentials);
        alert('Sign up Successful!')
      }).catch(({ code, message }) => {
        console.log(`${code}\n${message}`);
        alert(`${code}\n${message}`);
      })
  }

  return (
    <div className=" h-screen bg-background text-text flex flex-col items-center">
      <Header />
      <Signup signedIn={signedIn} setSignedIn={setSignedIn} userInput={userInput} setUserInput={setUserInput} handleSubmit={handleSubmit} />
      {signedIn ? <p className="w-[35%] text-secondary text-center mt-6 text-xl font-bold font-kanit">This User has signed in</p> : <p className="w-[35%] text-accent text-center mt-6 text-xl font-bold font-kanit">This User has not signed in</p>}
    </div>
  )
}

export default App;