/* eslint-disable react/prop-types */
import app from "../firebase/firebase";
import GoogleLogin from "./GoogleLogin";
import TwitterLogin from "./TwitterLogin";

function Signup({signedIn, setUserInput, handleSubmit }) {

    const handleChange = ({ target }) => {
        setUserInput(prev => {
            return { ...prev, [target.name]: target.value }
        })
    }

    return (
        <div className='flex flex-col w-screen mt-4 items-center'>
            <div className='flex flex-col w-screen mt-4 items-center'>
                <h2 className='text-3xl tracking-wider font-bold '>Sign up</h2>
                <input onChange={handleChange} className=' shadow-md border-2 border-accent mt-4 h-10 w-3/4  lg:w-1/4 rounded-lg px-4 text-black placeholder:font-bold' type='text' placeholder='Email' name="email" />
                <input onChange={handleChange} className=' shadow-md border-2 border-accent mt-4 h-10 w-3/4  lg:w-1/4 rounded-lg px-4 text-black placeholder:font-bold' type='password' placeholder='Password' name="password" />
                { !signedIn && <button onClick={handleSubmit} className=' bg-secondary h-12 border-2 hover:border-4 text-2xl border-background shadow-md hover:shadow-xl mt-8 w-3/4 lg:w-1/4 rounded-lg font-bold' >Submit</button> }
            </div>
            <div className="flex flex-row rounded-md w-3/4 lg:w-1/4 h-16 justify-evenly border-2 border-dotted border-opacity-50 border-black items-center mt-4">
                <GoogleLogin />
                <TwitterLogin />
            </div>
        </div>
    )
}

export default Signup;