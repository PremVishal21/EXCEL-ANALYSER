
import React, {useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch = useDispatch()
  const nav = useNavigate()

  const submit = async (e)=>{
    e.preventDefault()
    try{
      const res = await axios.post('http://localhost:5000/api/auth/login',{email,password})
      dispatch(setUser({ user: res.data.user, token: res.data.token }))
      nav('/dashboard')
    }catch(err){
      alert('Login failed, backend may not be running. This scaffold includes placeholder endpoints.')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900'>
      <div className='w-full max-w-md bg-black/40 p-8 rounded-2xl backdrop-blur'>
        <h2 className='text-2xl font-semibold mb-6 text-white'>Login</h2>
        <form onSubmit={submit} className='space-y-4'>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' className='w-full p-3 rounded-full bg-gray-800 text-white'/>
          <input value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' type='password' className='w-full p-3 rounded-full bg-gray-800 text-white'/>
          <button className='w-full py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 font-semibold'>Login</button>
        </form>
        <div className='mt-4 text-center'>
          <p className='text-sm'>Or login with</p>
          <div className='flex gap-3 justify-center mt-3'>
            <button className='px-4 py-2 border rounded-full'>Google</button>
            <button className='px-4 py-2 border rounded-full'>GitHub</button>
          </div>
        </div>
      </div>
    </div>
  )
}
