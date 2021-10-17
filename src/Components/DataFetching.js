import React, { useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
          const data = await res.json();
          setPosts(data);
          setLoading(false);
        };
        fetchPosts();
      }, []);
        


    return (
        <div>
            {posts.map((post) => (
            <div key={post.id}>
            <h1>{post.title}</h1>
            <span>{post.body}</span>
        </div>
      ))}

        </div>
    )
}

export default DataFetching
