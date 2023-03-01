import React, { useState } from "react"

import data from "./blog-data"

import DisplayBlog from "../pages-components/displayBlog";

import { Footer } from "../";

import { Header } from "../";

import "./blog.css"

function Blog() {

 const [blogData] = useState(data);

 return (
  <>
   <Header />
   <div className="img-section">
    {/* <img src={require("../images/sub-banner.jpg")} alt="" /> */}
    <div className="img-content">
     <h2 className="animate__animated animate__pulse">Latest News</h2>
     <p className="animate__animated animate__lightSpeedInLeft">Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
    </div>
   </div>
   <div className="blog-container">
    {
     blogData.map((item, index) => {
      return (
       <DisplayBlog key={index} {...item} dataLen={blogData.length} />

      )
     })
    }
   </div>
   <Footer />
  </>
 )
}


export default Blog

