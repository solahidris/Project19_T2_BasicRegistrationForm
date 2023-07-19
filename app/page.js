// our-domain.com/

import NextjsLogo from "./NextjsLogo";
import AppTitle from "./AppTitle";
import RegisterForm from "./RegisterForm";
import CodeHow from "./CodeHow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10">
      <NextjsLogo />

      <div>
        <AppTitle />
        <RegisterForm />
        <p className="mt-4 mb-1 text-end text-xs">Click here to see forms submitted</p>
        <div className="flex justify-end">
          <a className="bg-green-500 text-white flex p-3 mb-5 text-xs rounded-full" href="https://project19-t2-next-js-basic-registration-form.vercel.app/data">Data Page</a>
        </div>
        <CodeHow />
      </div>

    </main>
  );
}
