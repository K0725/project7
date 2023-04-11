import React, { useState } from "react";
import "./CreatePost.css";
import { supabase } from "../client";

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", players: "", levels: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("Posts")
      .insert({
        title: post.title,
        players: post.players,
        levels: post.levels,
      })
      .select();

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  const levels = [
    "beginner", 
    "intermediate",
    "co-ed",
    "mens",
    "womens", 
  ];

  return (
    <div>
      <form>
        <label><strong>Team Name</strong></label> <br />
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <br />
        <br/>

        <label><strong>Player Name</strong></label> 
        <br/>
        <input
          type="text"
          id="players"
          name="players"
          value={post.players}
          onChange={handleChange}
        />
        <br />
        <br />
        <label><strong>Level of the leagues</strong></label>
        <br/>
        <br/>
          {levels.map((level) => (
            
            <li key={level}>
              <button
                id="levels"
                value={level}
                onClick={(event) => {
                  event.preventDefault();
                  event.target.classList.add("selected");
                  handleChange({
                    target: { name: "levels", value: level },
                  });
                }}
              >
                {level}
              </button>
            </li>
          ))}
       
        
        <br/>
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;