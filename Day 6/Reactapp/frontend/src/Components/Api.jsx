import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  // useEffect(() => {}, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("API is not Working!", error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="p-2 flex-col flex items-center">
        <h1 className="">Fetching an API using useEffect</h1>
        <div className="p-2 flex flex-wrap gap-1 items-start max-w-11/12 justify-center m-0">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="group w-72 rounded-2xl border border-black bg-amber-200 p-6 shadow-md transition-all duration-300   hover:-translate-y-2 hover:shadow-2xl m-1 hover:bg-amber-100" >
                <div className="flex items-center gap-4 mb-5 b">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shrink-0">
                    {item.name?.charAt(0).toUpperCase()}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h2>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  Username: {item.username} <br />
                  Email: {item.email} <br />
                  Phone: {item.phone} <br />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Api;
