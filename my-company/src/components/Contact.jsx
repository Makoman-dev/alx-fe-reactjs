import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange   
 = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();   

    // Handle form submission here, e.g., send data to a server
    console.log(formData);
    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#333', fontSize: '36px', marginBottom: '20px' }}>Contact Us</h1>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}   

          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;