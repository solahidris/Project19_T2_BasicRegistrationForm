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
        <p>------------</p>
        <p>------------</p>
      <a href="http://localhost:3000/data">Data Page</a>
        <p>------------</p>

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
