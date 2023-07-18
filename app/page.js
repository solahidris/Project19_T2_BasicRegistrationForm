// our-domain.com/

import NextjsLogo from "./NextjsLogo";
import AppTitle from "./AppTitle";
import RegisterForm from "./RegisterForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <NextjsLogo />

      <div>
        <AppTitle />
        <RegisterForm />
        <div className="flex justify-end">
          <a className="bg-green-500 text-white flex p-3 mb-5 text-xs rounded-full" href="http://localhost:3000/data">Data Page</a>
        </div>

        <p className="font-bold">how this was written</p>
        <p>1) plan rough what to write, form, label & input for firstname, lastname & email</p>
        <p>2) make components to import to main page</p>
        <p>3) tried using useState but was not ideal since need to display error as well</p>
        <p>4) couldnt import due to not declaring "use client"</p>
        <p>5) finished reading docs and understood app routing method</p>
        <p>6) figured out that can use either react-hook-form / formik with yup</p>
        <p>7) decided on using react-hook-form and edited registerform component</p>
        <p>8) added error and reset form & saw objects in console log after submit</p>
        <p>9) create modal for prompting user on success/error when clicking submit</p>
        <p>10) can use tailwindcss prebuilt for modal and make a modal state OR use react-modal</p>
        <p>11) installed react-modal to try out and added state and modify state on form page</p>

        <p>if ok, display success message</p>
        <p>if not ok, display error on each input</p>
      </div>
    </main>
  );
}
