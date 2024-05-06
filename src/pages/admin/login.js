import React from 'react';

function Login() {
  return (
    <>
      <div className='flex w-full h-screen items-center justify-center sm:p-3'>
        <div className='border-2 border-solid md:w-1/4 w-full border-gray-600 rounded-3xl p-12'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='text-center text-2xl font-bold'>Login Admin</h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' method='POST'>
            <div>
              <label className='block text-lg font-medium'>Email address</label>
              <input className='block w-full h-10 mt-2 rounded-md border-2 border-gray-600 px-3'
                id='email'
                name='email'
                type='email'
                required>
              </input>
            </div>
            <div>
              <label className='block text-lg font-medium'>Password</label>
              <input className='block w-full h-10 mt-2 rounded-md border-2 border-gray-600 px-3'
                id='password'
                name='password'
                type='password'
                required>
              </input>
            </div>
            <div className='text-center'>
              <button type='submit'
                className='mt-5 rounded-md font-semibold border-2 border-gray-600 px-3 py-1.5'>
                Login
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    
    </>
  );
}

export default Login;