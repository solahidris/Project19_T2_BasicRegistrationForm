"use client";

import { useState } from "react";

const RegisterForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-stone-100 p-5 mt-5 rounded-lg">
      <form>
        <div className="bg-stone-200/50 px-4 py-3 rounded-lg flex justify-between">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
            className="ml-2 rounded px-2"
          />
        </div>
        <div className="bg-stone-200/50 px-4 py-3 my-3 rounded-lg flex justify-between">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={(event) => setLastName(event.target.value)}
            className="ml-2 rounded px-2"
          />
        </div>
        <div className="bg-stone-200/50 px-4 py-3 rounded-lg flex justify-between">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            className="ml-2 rounded px-2"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 mt-5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Submit Form
        </button>
      </form>
      <div className="my-5">
        <p>current values</p>
        <p>first name = {firstName}</p>
        <p>last name = {lastName}</p>
        <p>email = {email}</p>
      </div>
    </div>
  );
};

export default RegisterForm;
