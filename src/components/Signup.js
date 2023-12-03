import React, { useState } from 'react';

import Navbar from './Navbar';

function Signup() {
  const [sign, setsign] = useState({ Name: '', Password: '', Email: '' });
  const [users, setusers] = useState([]);

  const User = (e) => {
    e.preventDefault();
    setsign({ ...sign, Name: e.target.value });
  };

  const UserPass = (e) => {
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const passw = e.target.value;

    // if (passwordRegex.test(passw)) {
    setsign({ ...sign, Password: passw });
    // } else {
    //   console.error(
    //     'Password should contain at least 8 characters, including one lowercase letter, one uppercase letter, and one number.'
    //   );
    // alert(
    //   'Password should contain at least 8 characters, including one lowercase letter, one uppercase letter, and one number.'
    // );

    e.preventDefault();
  };

  const UserE = (e) => {
    e.preventDefault();
    setsign({ ...sign, Email: e.target.value });
  };

  const addUser = async () => {
    const response = await fetch('http://localhost:7500/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sign),
    });
    const data = await response.json();
    setsign(() => ({ Name: '', Password: '', Email: '' }));
    console.log(sign);

    console.log(data);
    alert('You are Signed In!');
  };

  // const displayUser = async () => {
  //   const response = await fetch('http://localhost:7325/submit', {
  //     method: 'GET',
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   setusers(data);
  // };

  // const deleteUser = async () => {
  //   const passwordData = { Password: sign.Password };
  //   const response = await fetch('http://localhost:7500/submit', {
  //     method: 'DELETE',
  //     body: JSON.stringify(sign),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   alert('Deleted Successfully!');
  // };
  return (
    <div>
      <Navbar />
      <div className="all flex flex-col justify-center items-center space-y-5 h-auto w-screen pb-48 flex-shrink">
        <h1 className="text-black text-6xl m-3 mb-7">SIGNUP FORM</h1>
        <label className="text-2xl">UserName:</label>
        <input
          className="border-black border-t-4 border-b-4 border-l-4 border-r-4 h-10 rounded-md"
          type="text"
          placeholder="Enter the UserName"
          value={sign.Name}
          onChange={User}
          required
        />
        <br />
        <label className="text-2xl">Password:</label>
        <input
          className="border-black border-t-4 border-b-4 border-l-4 border-r-4 h-10 rounded-md"
          type="Password"
          placeholder="Enter the Password"
          value={sign.Password}
          onChange={UserPass}
          required
        />
        <br />
        <label className="text-2xl">Email: </label>
        <input
          className="border-black border-t-4 border-b-4 border-l-4 border-r-4 h-10 w-64 rounded-md"
          type="text"
          placeholder="Email"
          value={sign.Email}
          onChange={UserE}
          required
        />
        <br />
        <div className="space-x-3">
          <button
            className="text-white bg-green-800 rounded-xl p-4 hover:bg-green-700"
            onClick={() => {
              addUser();
            }}
          >
            👉 SignIn 👈
          </button>
          {/* <button
          className="text-white bg-neutral-400 rounded-xl p-4 hover:bg-neutral-300"
          onClick={displayUser}
        >
          Display
        </button> */}
          {/* <button
            className="text-white bg-red-500 rounded-xl p-4 hover:bg-red-400"
            onClick={deleteUser}
          >
            Delete
          </button> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Signup;
