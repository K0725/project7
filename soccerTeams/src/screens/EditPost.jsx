import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const EditPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState({ id: null, title: "", players: "", levels: "" });

  useEffect(() => {
    const result = data.filter(item => String(item.id) === id)[0];
    setPost({ title: result.title, players: result.players, levels: result.levels });
  }, [data, id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updatePost = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from('Posts')
      .update({ title: post.title, players: post.players, levels: post.levels })
      .eq('id', id);

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  const deletePost = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from('Posts')
      .delete()
      .eq('id', id);

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
        <label>Teams</label> <br />
        <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
        <br />

        <label>Players</label><br />
        <input type="text" id="players" name="players" value={post.players} onChange={handleChange} /><br />
        <br />

        <label>Choose your team levels </label>
      <br />

        <ul>
          {levels.map((level) => (
            <li key={level}>
              <button
                id="levels"
                value={level}
                onClick={(event) => {
                  event.preventDefault();

                  // Remove the 'selected' class from other buttons
                  document.querySelectorAll('#levels.selected').forEach((btn) => {
                    btn.classList.remove('selected');
                  });

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
        </ul>
        <br />
        <input type="submit" value="Submit" onClick={updatePost} />
        <button className="deleteButton" onClick={deletePost}>Delete</button>
      </form>
    </div>
  );
};

export default EditPost;
