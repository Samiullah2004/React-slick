import React, { useEffect, useState } from "react";

const Crud = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(null);
  const [edit, setEdit] = useState({
    userName: "",
    email: "",
    website: "",
    phone: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    if (state === id) {
      setState(null);
      setEdit({
        userName: "",
        email: "",
        website: "",
        phone: "",
      });
    } else {
      setState(id);
      const itemToEdit = data.find((item) => item.id === id);
      setEdit({
        userName: itemToEdit.name,
        email: itemToEdit.email,
        website: itemToEdit.website,
        phone: itemToEdit.phone,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit({
      ...edit,
      [name]: value,
    });
  };

  const handleUpdate = (id) => {
    setData(data.map((item) => (item.id === id ? { ...item, ...edit } : item)));
    setState(null);
  };

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
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, email, website, phone }) => (
              <tr
                key={id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {state === id ? (
                    <input
                      type="text"
                      onChange={handleChange}
                      name="userName"
                      value={edit.userName}
                    />
                  ) : (
                    name
                  )}
                </th>
                <td className="px-6 py-4">
                  {state === id ? (
                    <input
                      type="text"
                      value={edit.email}
                      onChange={handleChange}
                      name="email"
                    />
                  ) : (
                    email
                  )}
                </td>
                <td className="px-6 py-4">
                  {state === id ? (
                    <input
                      type="text"
                      value={edit.website}
                      onChange={handleChange}
                      name="website"
                    />
                  ) : (
                    website
                  )}
                </td>
                <td className="px-6 py-4">
                  {state === id ? (
                    <input
                      type="text"
                      value={edit.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  ) : (
                    phone
                  )}
                </td>
                <td className="px-6 py-4 space-x-3">
                  {state === id ? (
                    <button
                      onClick={() => handleUpdate(id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Update
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
