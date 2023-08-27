import React, { useState } from 'react';
import { ref, set } from 'firebase/database'; // Import necessary functions
import { database } from './firebase';
import './style.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tripform = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        name: name,
        age: age,
        gender: gender,
        email: email,
        phone: phone,
        desc: desc,
      };

      // Validate phone number and user name
      if (phone.length > 11) {
        toast.error('Phone number must be 11 digits');
        return;
      }

      if (name.length > 20) {
        toast.error('User name must be 20 characters or less');
        return;
      }

      // Write data to the Firebase Realtime Database using the 'set' method
      const tripFormDataRef = ref(database, 'tripformdata');
      await set(tripFormDataRef, formData);

      // Reset the form
      setName('');
      setAge('');
      setGender('');
      setEmail('');
      setPhone('');
      setDesc('');

      toast.success('Form submitted successfully!');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container">
      <h1>Welcome to C.U.S.T Trip Form</h1>
      <p>Enter your details and submit this form to confirm your participation in the trip</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" />
        <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your Age" />
        <input type="text" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Enter your Gender" />
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
        <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your Phone Number" />
        <textarea name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} cols="30" rows="10" placeholder="Enter any other information here"></textarea>
        <button className="btn">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Tripform;
