our-domain.com/data

const DataPage = () => {
    return(
        <div className="bg-stone-100 min-h-[100vh]">
            <h1>This is the Data Page</h1>
            <h3>---------------------</h3>
            <a href="http://localhost:3000/">Home</a>
        </div>
    )
};

export default DataPage;

// "use client"

// import { useRouter } from "next/router";

// const ConfirmationPage = () => {
//   const router = useRouter();
//   const { firstName, lastName, email } = router.query; // Assuming form data is passed as query parameters

//   return (
//     <div>
//       <h1>Confirmation Page</h1>
//       <p>First Name: {firstName}</p>
//       <p>Last Name: {lastName}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// };

// export default ConfirmationPage;
