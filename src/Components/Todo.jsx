
const Todo = ({ index, task, handleDeleteTask, handleUpdateTask }) => {
    let { _id, title, description, status } = task;


    return (
        <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${status ? 'line-through' : ''}`}>
                {index + 1}
            </th>
            <td className={`px-6 py-4 ${status ? 'line-through' : ''}`}>
                {title}
            </td>
            <td className={`px-6 py-4 ${status ? 'line-through' : ''}`}>
                {description}
            </td>
            <td className="px-6 py-4">
                {status ? 'Completed' : 'Pending'}
            </td>
            <td className="px-6 py-4 flex gap-2">
                <button
                    onClick={() => handleDeleteTask(_id)}
                    className="bg-red-800 text-white px-3 py-2 rounded-md">Delete
                </button>
                <button
                    disabled={status ? true : false}
                    onClick={() => handleUpdateTask(_id)}
                    className="bg-green-800 text-white px-3 py-2 rounded-md disabled:bg-gray-400">Done
                </button>
            </td>

        </tr>

    );
};

export default Todo;