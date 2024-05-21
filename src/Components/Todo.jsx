

const Todo = () => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td className="px-6 py-4">
                Study
              </td>
              <td className="px-6 py-4">
                Learn Cyber Security
              </td>
              <td className="px-6 py-4">
                Pending...
              </td>
              <td className="px-6 py-4 flex gap-2">
                <button className="bg-red-800 text-white px-3 py-2 rounded-md">Delete</button>
                <button className="bg-green-800 text-white px-3 py-2 rounded-md">Done</button>
              </td>

            </tr>
    );
};

export default Todo;