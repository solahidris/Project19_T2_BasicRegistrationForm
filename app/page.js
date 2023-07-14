import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
     
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="">
        <div className='bg-stone-100 rounded-lg p-4 mt-5 font-mono'>
          <p className='text-center mx-5 mb-4 underline underline-offset-4'>P19 - Basic Registration Form</p>
          <p className='text-center mx-5 text-xs'>Build a basic registration form in NextJS where users can enter first name, last name, and email. Post-registration, an error message is displayed for each field if validation fails else a success message is shown</p>
        </div>

        <p>make a registration form</p>
        <p>------------</p>
        <p>first name input</p>
        <p>last name input</p>
        <p>email input</p>
        <p>make this 3 into a form</p>
        <p>if ok, display success message</p>
        <p>if not ok, display error on each input</p>
      </div>

    </main>
  )
}