import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './screens/ReadPost'
import CreatePost from './screens/CreatePost'
import EditPost from './screens/EditPost'
import { Link } from 'react-router-dom'
import { supabase } from './client'


const App = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    const fetchPosts = async () => {
      const {data} = await supabase
      .from('Posts')
      .select()
      .order('created_at', { ascending: true })

  
      setPosts(data)

    }

    fetchPosts()

  }, []);

  const  element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  
  return ( 
    <div className="App">
      <div className="header">
        <h1>Let's discover the teams!</h1>
        <Link to="/"><button className="headerBtn"> See the current Teams  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create New Team </button></Link>
      </div>
        {element}
    </div>
  );
}

export default App;