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

        <p>make a registration form - in progress</p>
        <p>first name input - added</p>
        <p>last name input - added</p>
        <p>email input - added</p>
        <p>make this 3 into a form - added</p>

        <p>if ok, display success message</p>
        <p>if not ok, display error on each input</p>
      </div>
    </main>
  );
}
