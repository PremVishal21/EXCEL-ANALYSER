
import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center'>
      <div className='max-w-5xl mx-auto p-8 rounded-2xl'>
        <header className='flex justify-between items-center mb-12'>
          <h1 className='text-4xl font-bold'>Unlock Your Data's Potential</h1>
          <nav>
            <Link to='/login' className='px-4 py-2 bg-purple-600 rounded-lg'>Login</Link>
          </nav>
        </header>
        <section className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <p className='mb-6'>Upload Excel files, map columns, and generate beautiful 2D/3D charts. AI summaries included.</p>
            <Link to='/dashboard' className='inline-block px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full font-semibold'>Get Started</Link>
          </div>
          <div className='bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl'>
            <h3 className='text-xl mb-4'>Key Features</h3>
            <ul className='space-y-3'>
              <li>File Upload (xlsx)</li>
              <li>Data Mapping & Chart Generation</li>
              <li>AI Insights (OpenAI)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
