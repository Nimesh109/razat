import React from "react"

import "./createBanquet.css"

import Header from "../navBar/Header";

function Banquet() {
 return (
  <>
   <Header />
   <div className="container">
    <div className="auth-container">
     <section className="auth-first-section">
      <section className="card-design">
       <section className="u-shaped card-01"></section>
       <section className="u-shaped card-02"></section>
       <section className="u-shaped card-03"></section>
       <section className="u-shaped card-04"></section>
      </section>
      <section className="register-form">
       <h1>Create Banquet</h1>
       <form className="register" method="POST" action="/api/createBanquet" enctype="multipart/form-data">
        <div className="email-field">
         <span className="login-icon"><i className="fa-solid fa-utensils"></i></span>
         <input
          type="name"
          id="name"
          name="name"
          placeholder="Banquet Name"
         />
        </div>
        <div className="password-field">
         <span className="login-icon"><i className="fa-solid fa-info"></i></span>

         <textarea
          type="desc"
          id="desc"
          name="desc"
          placeholder="Description"
         />
        </div>
        <div className="image-field">
         <input type="file" name="image" accept="image/png,image/jpeg" id="image-field" />
        </div>

        <div className="btn-pass">
         <button type="submit" className="btn">Create Banquet</button>
        </div>
       </form>
      </section>
     </section>
    </div>
    {/* <form className="create-banquet" method="POST" action="/api/createBanquet" enctype="multipart/form-data">
    <label htmlFor="">Banquet Name </label>
    <input type="text" className="name" id="name" />
    <br />
    <label htmlFor="desc">Description  </label>
    <input type="text" className="desc" id="desc" />
    <br />
    <label htmlFor="desc">Image  </label>
    <input type="file" name="image" accept="image/png,image/jpeg" />
    <button className="btn">Submit</button>
   </form> */}
   </div >
  </>
 )
}

export default Banquet;