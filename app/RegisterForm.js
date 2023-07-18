"use client";

import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted successfully", data);
    reset(); // Reset form fields
  };

  return (
    <div className="bg-stone-100 p-5 mt-5 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-stone-200/50 px-4 py-3 rounded-lg flex justify-between">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register("firstName", { required: "Please enter your first name." })}
            className="ml-2 rounded px-2"
          />
        </div>
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}

        <div className="bg-stone-200/50 px-4 py-3 mt-4 rounded-lg flex justify-between">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            {...register("lastName", { required: "Please enter your last name." })}
            className="ml-2 rounded px-2"
          />
        </div>
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}

        <div className="bg-stone-200/50 px-4 py-3 mt-4 rounded-lg flex justify-between">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: "Please enter your email.", pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email address." } })}
            className="ml-2 rounded px-2"
          />
        </div>
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}

        <button
          type="submit"
          className="px-3 py-2 mt-5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
