"use client"
import Todo from '@/Components/Todo';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {

  let [todos, setTodos] = useState([]);
  let [formData, setFormData] = useState({
    title: '',
    description: '',
    status: false,
  });

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData(form => ({ ...form, [name]: value }));
    console.log(formData)
  }

  let fetchedData = async () => {
    try {
      let res = await axios.get('http://localhost:5000/get-task')
      setTodos(res.data.tasks);
    } catch (error) {
      toast.error('Task Error');
    }
  }

  useEffect(() => {
    fetchedData();
  }, []);

  let onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post('http://localhost:5000/create-task', formData)
      if (res.data.result) {
        toast.success('Task Added Successfully');
        setFormData({
          title: '',
          description: '',
          isCompleted: false,
        });
        fetchedData();
      } else {
        toast.error('Task Not Added');
      }
    } catch (error) {
      toast.error('Task Error');
    }
  }

  let handleDeleteTask = async (id) => {
    let res = await axios.delete(`http://localhost:5000/delete-task/${id}`)
    if (res.data.result) {
      toast.success('Task Deleted');
      fetchedData();
    } else {
      toast.error('Something Went Wrong');
    }
  };

  let handleUpdateTask = async (id) => {
    let res = await axios.put(`http://localhost:5000/update-task/${id}`)
    if (res.data.result) {
      toast.success('Task Done');
      fetchedData();
    } else {
      toast.error('Something Went Wrong');
    }
  };


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

      <div className="relative overflow-x-auto mx-auto mt-20 w-[60%]">
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
            {
              todos.map((task, index) => {
                return <Todo key={index} index={index} task={task} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask} />
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default HomePage;