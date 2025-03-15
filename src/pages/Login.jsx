import { useState } from 'react';
import Title from '../components/Title';

function Login() {
  const [currentState, setCurrentState] = useState('SIGN IN');
  const titleValue = currentState.split(' ');

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  // Hàm giả lập đăng nhập Google (sau này tích hợp thực tế)
  const handleGoogleLogin = () => {
    console.log('Google login clicked!');
    // Thêm logic đăng nhập Google ở đây, ví dụ dùng Firebase hoặc OAuth2
  };

  // Hàm giả lập đăng nhập Google (sau này tích hợp thực tế)
  const handleFacebookLogin = () => {
    console.log('Google login clicked!');
    // Thêm logic đăng nhập Google ở đây, ví dụ dùng Firebase hoặc OAuth2
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
    >
      <div className='mb-4 text-4xl sm:text-5xl'>
        <Title text1={titleValue[0]} text2={titleValue[1]} />
      </div>

      {currentState === 'SIGN IN' ? (
        ''
      ) : (
        <input
          type='text'
          className='w-full px-3 py-2 border border-gray-800 outline-none'
          placeholder='Name'
          required
        />
      )}

      <input
        type='email'
        className='w-full px-3 py-2 border border-gray-800 outline-none'
        placeholder='Email'
        required
      />
      <input
        type='password'
        className='w-full px-3 py-2 border border-gray-800 outline-none'
        placeholder='Password'
        required
      />

      <div className='flex justify-between w-full text-sm mt-[-8px]'>
        <p className='border-b border-white cursor-pointer hover:border-black'>
          Forgot Your Password?
        </p>
        {currentState === 'SIGN IN' ? (
          <p
            onClick={() => setCurrentState('SIGN UP')}
            className='border-b border-white cursor-pointer hover:border-black'
          >
            Don&apos;t have an account? Sign Up.
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('SIGN IN')}
            className='border-b border-white cursor-pointer hover:border-black'
          >
            Already have an account? Sign In.
          </p>
        )}
      </div>

      <button className='w-full py-3 mt-6 font-light text-white bg-black'>
        {currentState === 'SIGN IN' ? 'Sign In' : 'Sign Up'}
      </button>

      <button
        type='button'
        onClick={handleGoogleLogin}
        className='flex items-center justify-center w-full gap-3 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition duration-300'
      >
        <img
          src='https://www.svgrepo.com/show/475656/google-color.svg'
          alt='Google Logo'
          className='w-5 h-5'
        />
        <span className='text-sm font-medium text-gray-700'>
          Continue with Google
        </span>
      </button>
      <button
        type='button'
        onClick={handleFacebookLogin}
        className='flex items-center justify-center w-full gap-3 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition duration-300'
      >
        <img
          src='https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000' // đổi thành đúng path ảnh của bạn
          alt='Facebook Logo'
          className='w-6 h-6'
        />
        <span className='text-sm font-medium text-gray-700'>
          Continue with Facebook
        </span>
      </button>
    </form>
  );
}

export default Login;
