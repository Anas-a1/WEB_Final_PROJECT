import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className='block text-lg font-medium text-gray-400'>Login Form</h1>
          <div>
            <label className="block text-sm font-medium text-gray-300">Username</label>
            <input type="text" name="username" onChange={handleForm} className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input type="password" name="password" onChange={handleForm} className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input type="email" name="email" onChange={handleForm} className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
