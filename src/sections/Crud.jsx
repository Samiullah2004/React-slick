import React, { useEffect, useState } from "react";

const Crud = () => {
  let [data, setData] = useState([]);
  let [state, setState] = useState({
    edit: false,
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  //   const handleEdit = (id) => {
  //     setState({ edit: true });
  //     setData(data.filter((item) => item.id !== id));
  //   };
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[1512] px-20 mx-auto mt-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Website
              </th>
              <th scope="col" className="px-6 py-3">
                phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          {data.map(({ id, name, email, website, phone }) => (
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {name}
                </th>
                <td className="px-6 py-4">{email}</td>
                <td className="px-6 py-4">{website}</td>
                <td className="px-6 py-4">{phone}</td>
                <td className="px-6 py-4 space-x-3">
                  <button
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    href="#"
                    onClick={() => handleDelete(id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Crud;
