import React, { useEffect, useState } from "react"

import "./displayBanquet.css"

const url = "http://localhost:8000/api/getBanquet";

const DisplayBanquet = () => {

 const [banquetData, setBanquetData] = useState([])

 const fetchData = async () => {
  fetch(url).then((response) => {
   return response.json();
  }).then((data) => {
   setBanquetData(data)
  }).catch((error) => {
   console.log(error)
  })
 }

 useEffect(() => {
  fetchData()
 }, [])

 return (
  <>
   {
    banquetData.map((item) => {
     const { _id, banquet_name, banquet_description, image_location } = item;
     return (
      <div key={_id} className="banquet-container">
       {/* <img src={require(`${image_location}`)} alt="" /> */}
       <p>{banquet_name}</p>
       <p>{banquet_description}</p>
      </div>
     )
    })
   }
  </>

 )
}

export default DisplayBanquet;