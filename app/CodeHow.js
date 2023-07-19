const CodeHow = () => {
  return (
    <div className="text-[10px] mt-[3rem]">
      <p className="py-3">--------------------------------------------------------------------</p>
      <p className="font-bold">how this code was written</p>
      <p>
        1) plan rough what to write, form, label & input for firstname, lastname
        & email
      </p>
      <p>2) make components to import to main page</p>
      <p>
        3) tried using useState but was not ideal since need to display error as
        well
      </p>
      <p>4) couldnt import due to not declaring &quot;use client&quot;</p>
      <p>5) finished reading docs and understood app routing method</p>
      <p>
        6) figured out that can use either react-hook-form / formik with yup
      </p>
      <p>
        7) decided on using react-hook-form and edited registerform component
      </p>
      <p>
        8) added error and reset form & saw objects in console log after submit
      </p>
      <p>
        9) create modal for prompting user on success/error when clicking submit
      </p>
      <p>
        10) can use tailwindcss prebuilt for modal and make a modal state OR use
        react-modal
      </p>
      <p>
        11) installed react-modal to try out and added state and modify state on
        form page
      </p>
      <p>12) modal success working now</p>
      <p>13) figuring out how to show data in data page after submit</p>
      <p>14) decided to store data using localstorage and not an external db</p>
      <p>15) made new page called &quot;data&quot; and display form results there</p>
      <br></br>
      <p>tech used:-</p>
      <p>
        nextjs, react, react-hook-form, react-modal, localstorage, useState,
        useEffect form, app routing
      </p>
    </div>
  );
};

export default CodeHow;