import axios from "axios";
import { useEffect, useState } from "react";

const DataFromBackend = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        console.log(response.data.users);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching the user data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container px-2 mx-auto mt-20 sm:px-8">
      <div className="py-4 ">
        <h1 className="text-2xl font-semibold leading-tight ">User Data</h1>
        <div className="flex flex-col my-2 sm:flex-row">
          <div className="flex flex-row mb-1 sm:mb-0">
            {/* You can add a search or filter functionality here */}
          </div>
        </div>
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300">
                    Name
                  </th>
                  <th className="p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300">
                    Email
                  </th>
                  <th className="p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300">
                    Phone
                  </th>
                  {/* <th className="p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300">
                    Actions
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="flex flex-row flex-wrap mb-10 bg-white lg:hover:bg-gray-100 lg:table-row lg:flex-row lg:flex-no-wrap lg:mb-0"
                  >
                    <td className="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                      <span className="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden">
                        Name
                      </span>
                      {user.name}
                    </td>
                    <td className="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                      <span className="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden">
                        Email
                      </span>
                      {user.email}
                    </td>
                    <td className="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                      <span className="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden">
                        Phone
                      </span>
                      {user.phone}
                    </td>
                    {/* <td className="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                      <span className="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden">
                        Actions
                      </span>
                      <a
                        href="#"
                        className="text-blue-400 underline hover:text-blue-600"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="pl-6 text-blue-400 underline hover:text-blue-600"
                      >
                        Remove
                      </a>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFromBackend;
