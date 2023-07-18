// our-domain.com/news 

const fnValue = "fnValue";

const RegisterForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstName">First Name Input: </label>
          <input type="text" id="firstName" name="firstName" value={fnValue} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name Input: </label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email Input: </label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default RegisterForm;
