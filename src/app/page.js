"use client"
import Todo from '@/Components/Todo';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {

  let [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData(form => ({ ...form, [name]: value }));
    console.log(formData)
  }

  let onSubmitHandler = async (e) => {
    e.preventDefault();
    try {

      toast.success('Task Added Successfully')
    } catch (error) {
      toast.error('Task Error');
    }
  }
  return (
    <div>
      <ToastContainer theme="light" />
      <form
        onSubmit={onSubmitHandler}
        className='flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-20 px-2 mx-auto'>
        <input
          type="text"
          name='title'
          onChange={onChangeHandler}
          value={formData.title}
          placeholder='Enter Title'
          className='px-3 py-2 border-2 w-full' />

        <textarea
          name="description"
          onChange={onChangeHandler}
          value={formData.description}
          placeholder='Enter Description'
          className='px-3 py-2 border-2 w-full' />
        <button
          type="submit"
          className='px-11 py-2 bg-orange-800 text-white rounded-md'>Submit</button>
      </form>



      <div className="relative overflow-x-auto mx-auto mt-24 w-[60%]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo />
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default HomePage;