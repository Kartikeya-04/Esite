import React from 'react';
import { delay, motion } from 'framer-motion';
import Navbar from './Navbar';
import Insta from '../assets/insta.svg';
import Whatsapp from '../assets/whatsapp.svg';
import Twitter from '../assets/twit.svg';

const page = () => {
  function whats() {
    window.open('https://www.whatsapp.com/', '_blank');
  }
  function instt() {
    window.open(
      'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1',
      '_blank'
    );
  }
  function twitter() {
    window.open(
      'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D',
      '_blank'
    );
  }
  function submitt() {
    const numb = document.querySelector('#Phone');
    const iput = numb.value;
    const nameVal = document.querySelector('#name');
    if (document.querySelector('#name').value === '') {
      document.querySelector('.wrong-name').style.display = 'block';
    } else {
      document.querySelector('.wrong-name').style.display = 'none';
    }

    if (iput === '') {
      document.querySelector('.wrong-Phone').style.display = 'block';
    } else if (iput.length !== 10) {
      document.querySelector('.wrong-Phone1').style.display = 'block';
    } else {
      document.querySelector('.wrong-Phone').style.display = 'none';
      document.querySelector('.wrong-Phone1').style.display = 'none';
    }

    if (nameVal.value !== '' && iput !== '' && iput.length === 10) {
      document.querySelector('.after-sub').style.display = 'block';
    }
  }
  return (
    <div>
      <Navbar />
      <motion.div className="Contacts text-center">
        <div className="2xl:flex xl:flex lg:flex md:flex sm:block gap-0">
          <motion.div
            className="text-left instagram  "
            onClick={instt}
            animate={{ rotate: 45, rotate: 90, rotate: 360 }}
            transition={{ duration: 2 }}
          >
            <img src={Insta} height={60} width={60} />
          </motion.div>
          <motion.div
            className="mr-1 mt-2 twit"
            onClick={twitter}
            animate={{ rotate: 45, rotate: 90, rotate: 360 }}
            transition={{ duration: 2 }}
          >
            <img src={Twitter} height={50} width={50} />
          </motion.div>
          <motion.div
            className="ml-2 mt-2 mr-1 whats"
            onClick={whats}
            animate={{ rotate: 45, rotate: 90, rotate: 360 }}
            transition={{ duration: 2 }}
          >
            <img src={Whatsapp} height={40} width={40} />
          </motion.div>
        </div>
        <motion.div
          className="p-10 tot"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: 100 }}
          transition={{ duration: 1 }}
        >
          <h1 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl font-semibold sm:text-base">
            Contact Us
          </h1>
          <motion.div className=" 2xl:p-6 xl:p-6 lg:p-6 md:p-7 sm:p-2 inss ">
            <div className="">
              {' '}
              <label for="name">Name</label>
            </div>
            <br />

            <div className="">
              <input type="text" placeholder="Enter your name" id="name" />
            </div>
            <br />

            <div className="">
              {''}
              <label for="Phone">Phone Number</label>
            </div>

            <br />
            <div className="">
              <input
                type="number"
                placeholder="Enter your Phone Number"
                id="Phone"
              />
            </div>
            <div className="m-6">
              <label for="message">Message</label>
            </div>
            <div className="m-6">
              <textarea
                cols="50"
                rows="5"
                type="text"
                className="resize-x resize-y"
                placeholder="Write Here..."
              ></textarea>
            </div>
            <motion.div
              drag
              whileDrag={{ scale: 1.2, opacity: 0.8, cursor: 'grabbing' }}
            >
              <button
                className="rounded-md bg-black text-white p-4 butto"
                onClick={submitt}
              >
                Submit
              </button>
            </motion.div>
          </motion.div>
          <div className="bg-purple-700 text-yellow-100 wrong-name hidden">
            Please enter the Name!
          </div>
          <div className="bg-purple-700 text-yellow-100 hidden wrong-Phone">
            Please enter the Phone Number!
          </div>
          <div className="bg-purple-700 text-yellow-100 hidden wrong-Phone1">
            Please enter 10 digits of Mobile Number!
          </div>
          <div className="after-sub  text-center text-red-400 bg-pink-100 hidden">
            Thanks for submission
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default page;
