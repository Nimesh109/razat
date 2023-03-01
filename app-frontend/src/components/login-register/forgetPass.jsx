import React from "react";

import { Header } from "../"
import "./login-register.css"

const ForgetPass = () => {
 // const [changeHeader,] = useState(true);
 return (
  <>
   <Header />
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
       <h1 id="reset-pass">Reset Password</h1>
       <form className="register" action="/api/sendResetPasswordLink" method="POST">
        <div className="email-field">
         <span className="login-icon"><i className="fa-solid fa-user"></i></span>
         <input
          type="email"
          id="email"
          name="email"
          placeholder="Username"
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
         <button type="submit" className="btn">Reset Password</button>
        </div>
        <div className="forget-pass">
         <a href="register" className="margin-bottom">
          Create Your Account
          <i className="fa-solid fa-arrow-right"></i>
         </a>
        </div>
       </form>
      </section>
     </section>
    </div>
   </main>
   {/* <Footer /> */}
  </>
 )
}

export default ForgetPass