'use client'

import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useUserContext } from "@/app/contexts/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from '../style'

export default function Login() {

    const { user, setUser } = useUserContext();

    const router = useRouter();
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const notify = (message) => {
        toast.error(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const postData = {
            username: username,
            password: password
        }

        axios.post('/api/users/login', postData).then(({data}) => {
            const loggedInUser = {
                username: data.username,
                user_id: data.user_id,
                image_url: data.image_url
            }
            setUser(loggedInUser)
            router.push('/')
        }).catch(({ response: { data } }) => {
            notify(data)
          });  
        setUsername('')
        setPassword('')
    }
    
    return (
        <section className={`flex justify-center`}>
            <div className={`${styles.bodySection}`}>
                <div className='pt-10 flex justify-center'>
                    <h1 className={`mb-5 ${styles.title}`}>Welcome Back.</h1>
                </div>
                <div className='bg-Lavender text-DeepPurple rounded-2xl flex justify-center py-10'>
                    <form className='w-[80%] md:w-[50%] flex flex-col justify-center items-center gap-5' onSubmit={handleSubmit}>
                        <div className='w-full'>
                            <label htmlFor="username" className={`${styles.subtitle}`}>Username:</label>
                            <input type="text" value={username} name="username" id="username" className={`sm:text-sm rounded-lg w-full p-2.5`} onChange={handleUsername} placeholder='Username...' required/>    
                        </div>
                        <div className='w-full mb-2'>
                            <label htmlFor="password" className={`${styles.subtitle}`}>Password:</label>
                            <input type="password" value={password} name="password" id="password" className={`sm:text-sm rounded-lg block w-full p-2.5`} onChange={handlePassword} placeholder='Password...' required/>
                        </div>
                        <button className='bg-platinum w-full text-DeepPurple hover:bg-opacity-70 font-bold rounded-lg text-xl px-5 py-2.5 text-center'>Login</button>
                    </form>
                </div>
                <div className={`pt-10 flex flex-col items-center`}>
                    <p className='text-DeepPurple mb-2'>Don't have an account?</p>
                    <Link href={'/signup'} className="bg-Red px-4 py-2 rounded-xl">
                        <button className={`font-bold text-xl text-white`}>Sign Up</button>
                    </Link>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </section>
    )
}