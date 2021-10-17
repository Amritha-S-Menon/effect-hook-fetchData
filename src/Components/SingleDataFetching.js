import React, { useState, useEffect} from 'react'
import axios from 'axios'

function SingleDataFetching() {

    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    

    useEffect(() => {
        const fetchPosts = async () => {
          
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const data = await res.json();
          setPosts(data);
          
        };
        fetchPosts();
      }, [id]);


    return (
        <div>
            {/*<input type ='text' value={id} onChange={e => setId(e.target.value)}/>*/}
            <button onClick ={() =>setId(id+1) }> Fetch next post</button>
            <div>
                <h1>{posts.title}</h1>
                <span>{posts.body}</span>
            </div>
        </div>
    )
}

export default SingleDataFetching
