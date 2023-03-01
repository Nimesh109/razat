import React, { useState } from "react"


function DisplayBlog({ id, image, title, desc, read, postedDate, text, dataLen }) {
 const [showItemBtn, setShowItemBtn] = useState(false);

 return (<>
  <div key={id} className="blog-items" data-aos="zoom-in">
   <div className="blog-right">
    <div className="blog-desc">
     <p>{postedDate}</p>
     <h2>{title}</h2>
     <p>{showItemBtn ? text : `${text.slice(0, 200)}....`} <button className="show-items" onClick={() => { setShowItemBtn(!showItemBtn) }}>{showItemBtn ? 'Show Less' : 'Read More'}</button>
     </p>
    </div>
    <div className="blog-buttom">
     <p id="blog-cover-bg">{desc}</p>
     <p>{read}</p>
    </div>
   </div>
   <div className="blog-left">
    <img src={image} alt="" />
   </div>
  </div>
  {
   id !== dataLen && <div className="underline"></div>
  }
 </>)
}

export default DisplayBlog