// src/components/PropertyForm.js
import React, { useState } from 'react';
import { useProperty } from '../firebase/property';

const PropertyForm = () => {
  const { addProperty } = useProperty();
  const [property, setProperty] = useState({
    Title: '',
    Address:'',
    District:'',
    Area :'',
    Price : '',
    Description:'',
    PropertyType : '',
    TransactionType : '',
    Facilities: []
  });
  const [files, setFiles] = useState([]);

// x  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProperty(property, files);
      alert('Property added successfully!');
    } catch (error) {
      console.error('Error adding property: ', error);
      alert('Failed to add property');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Location</label>
        <input type="text" name="location" value={property.location} onChange={handleChange} required />
      </div>

      <div>
        <label>Images</label>
        <input type="file" multiple accept="image/*,video/*" onChange={handleFileChange} required />      </div>
      <button type="submit">Add Property</button>
    </form>
  );
};

export default PropertyForm;
