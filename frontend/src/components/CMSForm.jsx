import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {useNavigate } from 'react-router-dom';


const CMSForm = () => {
  const [text, setText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchHeading = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/heading');
        setText(response.data.text);
      } catch (error) {
        console.error('Failed to fetch heading:', error);
      }
    };

    fetchHeading();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editMode) return;

    try {
      await axios.post('http://localhost:8080/api/heading', { text });
      alert('Heading updated successfully!');
      setEditMode(false);
    } catch (error) {
      alert('Error updating heading');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cms-form">
      <h2 className='cms-form-heading'>Update Homepage Heading</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={!editMode}
        className="cms-textarea"
        placeholder="Enter new heading here"
      />
      <div className="form-buttons">
        <button
          type="button"
          className="save-btn"
          onClick={() => setEditMode(true)}
          disabled={editMode}
        >
          Edit
        </button>
        <button
          type="submit"
          className="save-btn"
          disabled={!editMode}
           onClick={() => navigate('/')}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default CMSForm;
