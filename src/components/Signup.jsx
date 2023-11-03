import app from "../firebase/firebase";


function Signup({ setSignedIn, userInput, setUserInput, handleSubmit }) {

    const handleChange = ({ target }) => {
        setUserInput(prev => {
            return { ...prev, [target.name]: target.value }
        })
    }

    return (
        <div className='flex flex-col w-screen mt-4 items-center'>
            <h2 className='text-3xl tracking-wider font-bold '>Sign up</h2>
            <input onChange={handleChange} className='border-2 border-accent mt-4 h-10 w-3/4  lg:w-1/4 rounded-lg px-4 text-black placeholder:font-bold' type='text' placeholder='Email' name="email" />
            <input onChange={handleChange} className='border-2 border-accent mt-4 h-10 w-3/4  lg:w-1/4 rounded-lg px-4 text-black placeholder:font-bold' type='password' placeholder='Password' name="password" />
            <button onClick={handleSubmit} className=' bg-secondary h-12 border-2 hover:text-white hover:border-4 text-2xl border-black hover:border-white hover:bg-accent mt-8 w-3/4 lg:w-1/4 rounded-lg font-bold' >Submit</button>
        </div>
    )
}

export default Signup;