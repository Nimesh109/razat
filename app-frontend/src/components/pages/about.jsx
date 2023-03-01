import React, { useState, useEffect } from "react";

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { Footer } from "../";

import { Header } from "../";

import team from "./about-data"

import "./about.css"

import silderImage01 from "../images/about_slider/slider-img01.jpg"

import silderImage02 from "../images/home_slider/slider-img02.jpg"

import silderImage03 from "../images/home_slider/slider-img03.jpg"

const image = [
 silderImage01,
 silderImage02,
 silderImage03,
]

function About() {

 const [sliderIndex, setSliderIndex] = useState(0);



 useEffect(() => {
  const totalDataLength = image.length - 1;
  if (sliderIndex < 0) {
   setSliderIndex(totalDataLength)
   return;
  } else if (sliderIndex > totalDataLength) {
   setSliderIndex(0);
   return;
  }
 }, [sliderIndex])


 // useEffect(() => {
 //  const timoutFunction = setInterval(() => {
 //   setSliderIndex(sliderIndex + 1)
 //  }, 3000)
 //  return (() => { clearInterval(timoutFunction) })
 // }, [sliderIndex])


 return (
  <>
   <Header />
   <div className="container">
    <section className="about-first-section">

     <div className="image-slider">
      {
       image.map((item, itemIndex) => {
        let position = "lastSlide";
        if (itemIndex === sliderIndex) {
         position = "activeSlide"
        }
        if (itemIndex === sliderIndex - 1 || (itemIndex === image.length - 1 && sliderIndex === 0)) {
         position = "nextSlide"
        }
        return (
         <article className={position} key={itemIndex}>
          <img src={item} alt="" />
         </article>
        )
       })
      }
      <button className="prev-btn" onClick={() => {
       setSliderIndex(sliderIndex - 1)
      }}>
       <FiChevronLeft />
      </button>
      <button className="next-btn" onClick={() => {
       setSliderIndex(sliderIndex + 1)
      }}>
       <FiChevronRight />
      </button>
      <div className="about-img-content">
       <h2 className="animate__animated animate__pulse">Latest News</h2>
       <p className="animate__animated animate__lightSpeedInLeft">Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
      </div>
     </div>

     <div className="text-center" data-aos="fade-down">
      <h2>Our Story</h2>
      <div className="big-font">
       <p>Discover us & find Tranquility</p>
      </div>
      <p>
       Escape to the pristine luxury of the White Mountains, green hills,
       and village life. Rupakot Resort is the perfect place to discover
       the tranquil bliss of Nepal's rural life, whether, from a private
       veranda overlooking the lakes, the stone blocked posh residence
       perched on the hilltop or the turquoise waters of our infinity
       pool.<br />
       <br />
       Rupakot Resort is a beautiful resort set on 25 acres of space on the
       hill of the Rupa mountain in Pokhara, Kaski, nearly a 45-minute
       drive away from Lakeside Pokhara and Pokhara national airport. At
       the resort, you can enjoy the splendid views of the Begnas, Rupa,
       and Fewa lake. It’s a haven where your room will seem woven subtly
       into the landscape directly connecting to the Annapurna Himalaya
       range. A place where you’ll enjoy a true sense of space and
       uninterrupted views of the serene lakes from your private spacious
       veranda. Giving the taste of Nepali rural life, this is a luxury
       resort where you’ll discover an outstanding level of service with
       ultimate comfort.
      </p>
     </div>

     <div className="about-atmosphere">
      <section className="atmosphere-desc" data-aos="fade-right">
       <article className="atmosphere-heading">
        <span>Traditional</span>
        <h1>Atmosphere</h1>
       </article>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae accumsan. interdum hendrerit lacinia. Semper ac dolor vitae accumsan.</p>
      </section>
      <section className="atmosphere-img" data-aos="fade-left">
       <img src={"http://wahabali.com/work/pearl-demo/images/atmosphere.jpg"} alt="" />
      </section>
     </div>

    </section>
    {/* End of first-section */}

    {/* Start of second-section*/}
    <section className="about-second-section">
     <section className="video-content">
      <img src={require("../images/pexels-craig-adderley-2306278.jpg")} alt="" />
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod
       laudantium quidem adipisci ab temporibus maxime nostrum, at veniam
       quis magni ut explicabo? Quibusdam fugit corrupti assumenda quam
       error explicabo. Lorem ipsum dolor, sit amet consectetur adipisicing
       elit. Sunt pariatur nostrum assumenda, voluptate beatae enim
       consectetur qui cupiditate velit veritatis facere laboriosam iste
       ratione rem esse ut aliquid dolore officiis! Lorem ipsum dolor sit
       amet consectetur adipisicing elit. Cupiditate, iste libero. Dolores
       quam repellendus, blanditiis consequuntur harum quis illo sunt quasi
       necessitatibus facere repudiandae, architecto impedit distinctio eos
       itaque reprehenderit.
      </p>
     </section>
    </section>
    {/* End of second-section */}
    {/* End of third-section */}

    <section className="about-third-section" data-aos="fade-down">
     <h2>Our Teams</h2>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tenetur harum nobis esse ex alias.</p>

     <div className="team-container">
      {
       team.map((item, index) => {
        const { name, position, desc } = item;
        return (
         <div className="person" key={index} data-aos="zoom-in">
          <div className="person-image">
           <img src={"https://pixlr.com/images/index/remove-bg.webp"} alt="" />
          </div>
          <div className="person-desc">
           <h2>{name}</h2>
           <p>{position}</p>
           <p>{desc}</p>
          </div>
          <div className="social-link">
           <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
             src={require("../images/Facebook_Logo.png.webp")}
             alt="Social media" width={30}
            />
           </a>
           <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
             src={require("../images/Instagram_logo_2016.svg.webp")}
             alt="Social media" width={30}
            />
           </a>
           <a href="http://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img
             className="twitter"
             src={require("../images/twitter.png")}
             alt="Social media " width={30} style={{ backgroundColor: "blue" }}
            />
           </a>
          </div>
         </div>
        )
       })
      }
     </div>
    </section>
    {/* End of third-section */}



    {/* Start of fourth section */}
    <section className="about-fourth-section" data-aos="fade-up">
     <section className="banquet-contact">
      <div className="banquet-left">
       <div className="contact-item"
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="500"
       >
        <div className="contact-icon">
         <i className="fa-solid fa-address-book"></i>
        </div>
        <div className="contact-text">
         <h2>address</h2>
         <p>
          soalteemode, rabibhawan, <br />Ganeshman Sign Rd,
          <br />Kathmandu
         </p>
        </div>
       </div>
       <div className="contact-item" data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="1000">
        <div className="contact-icon">
         <i className="fa-solid fa-phone"></i>
        </div>
        <div className="contact-text">
         <h2>telephone</h2>
         <p>92130213213</p>
        </div>
       </div>
       <div className="contact-item" data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="1500">
        <div className="contact-icon">
         <i className="fa-solid fa-at"></i>
        </div>
        <div className="contact-text">
         <h2>email / website</h2>
         <p>
          <i className="fa-solid fa-at"></i>
          <br />
          budhathokirajat31@gmail.com
         </p>
         <p>
          <i className="fa-solid fa-globe"></i>
          <br />
          www.abcposadmasd.com.np
         </p>
        </div>
       </div>
      </div>
      <section className="banquet-right" data-aos="fade-down"
       data-aos-anchor-placement="top-bottom"
       data-aos-delay="2500">
       <p>
        <iframe title="myFrame"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1823503578307!2d85.31790641557545!3d27.711655582790193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19042204f6a1%3A0xa7af95e7f7d75e66!2sHotel%20Yak%20%26%20Yeti!5e0!3m2!1sen!2snp!4v1675318298177!5m2!1sen!2snp"
         style={{ border: "0" }}
         width="1250"
         height="490"
         loading="lazy"
        ></iframe>
       </p>
      </section>
     </section>
    </section>
    {/*End of fourth section */}
   </div>
   <Footer />
  </>
 )
}

export default About;