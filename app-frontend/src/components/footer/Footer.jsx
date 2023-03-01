import React from "react";

import { FaWhatsappSquare } from "@react-icons/all-files/fa/FaWhatsappSquare"

import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <section className="footer-left">
          <i
            className="fa-brands fa-square-pied-piper"
            style={{ fontSize: "100px" }}
          ></i>
          <p>
            Rupakot Resort is set on 10 hectares and nearly 1 hour drive from
            Pokhara Lakeside and airport. Spledid view of Bengnas, Rupa, Fewa
            lakes, couples of hiking routes, an infinity pool, a world-className
            spa, Panorama restaurant, exotic bar and much more to explore.
          </p>
          <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src={require("../images/Facebook_Logo.png.webp")}
              alt="Social media"
            />
          </a>
          <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src={require("../images/Instagram_logo_2016.svg.webp")}
              alt="Social media"
            />
          </a>
          <a href="http://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare id="whats-app" />
          </a>
          <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              className="twitter"
              src={require("../images/twitter.png")}
              alt="Social media "
            />
          </a>
        </section>
        <section className="footer-right">
          <section className="footer-links">
            <a href="/">The Resort </a>
            <a href="about">About Us </a>
            <a href="ourRooms">Our Rooms </a>
            <a href="blog">Blog</a>
            <br />
          </section>
          <section className="footer-text">
            <p>
              Reach Us
              <br />
              ----------------------------------------
            </p>
            <p className="small-text">Powered by: Razat.Lab.Pvt.Ltd</p>
          </section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
