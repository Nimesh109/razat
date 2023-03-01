import React from "react";

import Header from '../navBar/Header'

import "./login-register.css"

const Register = () => {

 // const [changeHeader,] = useState(true);

 return (
  <>
   {/* <Header change={changeHeader} /> */}
   < Header />
   <main>
    <div className="auth-container">
     <section className="auth-first-section">
      <section className="card-design">
       <section className="u-shaped card-01"></section>
       <section className="u-shaped card-02"></section>
       <section className="u-shaped card-03"></section>
       <section className="u-shaped card-04"></section>
      </section>
      <section className="register-form">
       <h1 id="register-text">Register Account</h1>
       <form className="register" action="/api/register" method="POST">
        <div className="name-field">
         <span className="login-icon"><i className="fa-solid fa-user"></i></span>
         <input
          type="text"
          id="name"
          name="name"
          placeholder="Username"
         />
        </div>

        <div className="email-field">
         <span className="login-icon"
         ><i className="fa-solid fa-envelope"></i
         ></span>
         <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
         />
        </div>

        <div className="number-field">
         <span className="login-icon"
         ><i className="fa-solid fa-phone"></i
         ></span>
         <input
          type="number"
          id="number"
          name="number"
          placeholder="Number"
         />
        </div>

        <div className="password-field">
         <span className="login-icon"><i className="fa-solid fa-lock"></i></span>
         <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
         />
        </div>
        <div className="btn-pass">
         <button type="submit" className="btn">Register Account</button>
        </div>
        <div className="forget-pass">
         <a href="login">Already have an account?</a>
         <a href="login" className="margin-bottom">
          Sign In Your Account
          <i className="fa-solid fa-arrow-right"></i>
         </a>
        </div>
       </form>
       {/* <!--End of form section--> */}
      </section>
     </section>
    </div>
   </main>
   {/* <Footer /> */}
  </>
 )
}

export default Register;