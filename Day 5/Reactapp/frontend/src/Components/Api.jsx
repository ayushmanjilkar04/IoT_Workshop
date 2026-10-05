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
      } catch (error) {
        console.log("API is not Working!", error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="p-2">
        <h1>Fetching an API using useEffect</h1>
        {data.map((item) => {
          return (
            <div key={item.id} className="p-2">
              <h1 style={{ color: "blue" }}>Name: {item.name}</h1>
              <h2>Username: {item.username}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Api;
