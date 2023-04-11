import React from 'react';
import { useState } from 'react';
import './Card.css';

import { Link } from 'react-router-dom';
import { supabase } from '../client';



const Card = (props) => {



  return (
    <div className="Card">
     
      <Link to={'edit/' + props.id}>
        <h2 className="dot">...</h2>
      </Link>
      <h2 className="title"><strong>{props.title}</strong></h2>
      <h3 className="players">{"Players: " + props.players}</h3>
      <h4 className="levels">{"Level: " + props.levels}</h4>
      
    </div>
  );
};

export default Card;