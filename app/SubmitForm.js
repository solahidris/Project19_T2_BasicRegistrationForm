// "use client"

import { useState } from "react";

export default function SubmitForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit form data to the API route
    const response = await fetch("/api/submitForm", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Form submitted successfully
      // You can handle the success scenario here (e.g., show a success message)
      console.log("Form submitted successfully!");
    } else {
      // Error occurred while submitting the form
      // You can handle the error scenario here (e.g., show an error message)
      console.log("Error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name Input</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name Input</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Input</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}
