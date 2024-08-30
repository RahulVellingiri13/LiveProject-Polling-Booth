import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Onepoll() {
  let { id } = useParams(); 
  let [onepoll, setOnepoll] = useState(null);
  let [error, setError] = useState(''); 
  let [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const fetchPollData = async () => {
      try {
        const res = await axios.post("http://92.205.109.210:8028/polls/getone", {
          poll_id: id,
        });
        console.log(res.data);
        setOnepoll(res.data);
      } catch (err) {
        console.error('Error fetching poll data:', err);
        setError('Failed to fetch poll data. Please try again later.');
      } finally {
        setLoading(false); 
      }
    };

    fetchPollData();
  }, [id]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {onepoll ? (
        <div>
          <h2>{onepoll.title}</h2>
          <p>{onepoll.question}</p>
          
        </div>
      ) : (
        <div>No poll data found</div>
      )}
    </div>
  
  );
}

export default Onepoll;
