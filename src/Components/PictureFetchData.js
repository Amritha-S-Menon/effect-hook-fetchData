import React, { useState, useEffect} from 'react'

function PictureFetchData() {
    
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        const res = await fetch("https://randomuser.me/api/?results=20");
        const { results: users } = await res.json();
        setUsers(users);
      };
      fetchUsers();
    }, []);

    return (
        <>
          {users.map((user, userIdx) => {
            return (
              <div key={userIdx}>
                <h1>{Object.values(user.name).join(" ")}</h1>
                <img src={user.picture.thumbnail} />
              </div>
            );
          })}
        </>
      );
      }
                   

export default PictureFetchData
