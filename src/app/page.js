import React from 'react';

const HomePage = () => {
  return (
    <div>
      <form className='flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto'>
        <input
          type="text"
          name='title'
          placeholder='Enter Title'
          className='px-3 py-2 border-2 w-full' />

        <textarea
          name="description"
          placeholder='Enter Description'
          className='px-3 py-2 border-2 w-full' />
        <button 
        type="submit"
        className='px-11 py-2 bg-orange-800 text-white rounded-md'>Submit</button>
      </form>
    </div>
  );
};

export default HomePage;