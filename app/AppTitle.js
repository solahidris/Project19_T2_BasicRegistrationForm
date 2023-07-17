import React from "react";

const AppTitle = () => {
  return (
    <div className="bg-stone-100 rounded-lg p-4 mt-5 font-mono">
      <p className="text-center mx-5 mb-4 underline underline-offset-4">
        P19 - Basic Registration Form
      </p>
      <p className="text-center mx-5 text-xs">
        Build a basic registration form in NextJS where users can enter first
        name, last name, and email. Post-registration, an error message is
        displayed for each field if validation fails else a success message is
        shown
      </p>
    </div>
  );
};

export default AppTitle;
