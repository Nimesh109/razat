import React, { useEffect, useState, useId } from "react"

import { FaMedal } from "@react-icons/all-files/fa/FaMedal";

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { FaQuoteRight } from 'react-icons/fa';

import { Header } from "../"

import { Footer } from "../";

import "./home.css"

import silderImage01 from "../images/home_slider/slider-img01.jpg"

import silderImage02 from "../images/home_slider/slider-img02.jpg"

import silderImage03 from "../images/home_slider/slider-img03.jpg"

import review from "./review"

import CountUp from 'react-countup'

// import blog from "./blog-data"


const image = [
    silderImage03,
    silderImage01,
    silderImage02,

]

function HomePage() {
    const [index, setIndex] = useState(0);

    const [sliderIndex, setSliderIndex] = useState(0);

    const getId = useId();

    const [reviewData] = useState(review);


    useEffect(() => {
        const totalDataLength = reviewData.length - 1
        if (index < 0) {
            setIndex(totalDataLength)
            return;
        } else if (index > totalDataLength) {
            setIndex(0);
            return;
        }
    }, [index, reviewData])


    useEffect(() => {
        const timoutFunction = setInterval(() => {
            setIndex(index + 1)
        }, 3000)
        return (() => { clearInterval(timoutFunction) })
    }, [index])


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
    //     const timoutFunction = setInterval(() => {
    //         setSliderIndex(sliderIndex + 1)
    //     }, 3000)
    //     return (() => { clearInterval(timoutFunction) })
    // }, [sliderIndex, index])

    return (
        <>
            <Header />
            <main>
                <div className="main-container">
                    <section className="first-section ">
                        <div className="image-slider">
                            <div className="image-content ">
                                <h2 className="animate__animated animate__pulse">Art of cooking</h2>
                                <p className="animate__animated animate__lightSpeedInLeft">The best banquet in town</p>
                            </div>

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
                                        <article className={position} key={getId + itemIndex}>
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
                        </div>
                        <div className="bottom-medal">
                            <div className="medal">
                                <p><FaMedal /></p>
                            </div>

                            <div className="text-medal ">
                                <p><CountUp end={15} duration={3} />+</p>
                                <p id="changeColor">Years of Excellence</p>
                            </div>
                        </div>
                    </section>
                    {/* Start of second section */}
                    <section className="second-section " data-aos="fade-down">
                        <section className="banquet-info ">
                            <section className="heading-info " >
                                <h1 id="heading-h1">WELCOME</h1>
                                <p>
                                    Beyond the hustle and bustle of the city, we provide our one
                                    stop party venue services in a serene family location, furnished
                                    and attained to make your celebrations eternally
                                    memorable.Spread in a compound of over four rapani of land, a
                                    traditional newari house offers you a homely enviornment; state
                                    of art auditorium of 5500 sq.feet...
                                </p>

                                <section className="banquet-flex" data-aos="fade-right" data-aos-delay="600">
                                    <section className="about-item banquet-item">
                                        <h2>
                                            <i className="fa-solid fa-hands-holding-circle"></i>
                                            ABOUT DURBAR BANQUET
                                        </h2>
                                        <p>
                                            At Durbar Banquet, we plan to make your event, worry free
                                            and fun. Take the stress of planning your special event off
                                            your shoulders by selecting the level of assistance you
                                            want. When it comes to managing and catering your own event,
                                            our team of expertise...
                                        </p>
                                        <div className="about-link">

                                            <a href="about">
                                                <button type="submit" className="read-more-btn">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>

                                                    READ MORE
                                                </button>
                                            </a>
                                        </div>
                                    </section>
                                    <section className="choose-item banquet-item">
                                        <h2>
                                            <i className="fa-solid fa-clipboard"></i>
                                            WHY CHOOSE DURBAR BANQUET
                                        </h2>
                                        <p>
                                            At Durbar Banquet, we plan to make your event, worry free
                                            and fun. Take the stress of planning your special event off
                                            your shoulders by selecting the level of assistance you
                                            want. When it comes to managing and catering your own
                                            event,our team of expertise...
                                        </p>
                                        <div className="about-link">
                                            <a href="about">
                                                <button type="submit" className="read-more-btn">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    READ MORE
                                                </button>
                                            </a>
                                        </div>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className="heading-img">
                            <img src={require('../images/buddha.jpg')} alt="buddha " />
                        </section>
                    </section>
                    {/* End of second section */}


                    {/* Start of third section */}
                    <section className="third-section " data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="flex-amentities">
                            <div className="ametities-fixed-width">
                                <div className="amentities-items">
                                    <i className="fa-solid fa-utensils amenities-icons"></i>
                                    <p>Dining / reception hall</p>
                                </div>
                                <div className="amentities-items">
                                    <i className="fa-solid fa-martini-glass-citrus amenities-icons"></i>
                                    <p>Bar / launge</p>
                                </div>
                                <div className="amentities-items">
                                    <i className="fa-solid fa-spa amenities-icons"></i>
                                    <p>Wedding ceremony</p>
                                </div>
                                <div className="amentities-items">
                                    <i className="fa-solid fa-handshake amenities-icons"></i>
                                    <p>Events / Seminar hall</p>
                                </div>
                            </div>
                        </div>
                        <div className="wine-img"></div>

                    </section>
                    {/* End of fourth section*/}

                    {/* Start of fourth section*/}
                    <section className="fourth-section" data-aos="fade-up">
                        <div className="section">
                            <div className="title">
                                <h2><span>/</span> Reviews</h2>
                            </div>

                            <div className="section-center">
                                {
                                    reviewData.map((item, personIndex) => {
                                        const { id, image, name, title, quote } = item;

                                        let position = "lastSlide";

                                        if (personIndex === index) {
                                            position = "activeSlide"
                                        }
                                        if (personIndex === index - 1 || (personIndex === reviewData.length - 1 && index === 0)) {
                                            position = "nextSlide"
                                        }

                                        return (
                                            <article key={id} className={position}>
                                                <img src={image} alt="" className="review-img" />
                                                <h4>{name}</h4>
                                                <p>{title}</p>
                                                <p className="text">
                                                    {quote}
                                                </p>
                                                <FaQuoteRight className="home-quote-icon" />
                                            </article>
                                        )
                                    })
                                }

                                <button className="prev-btn" onClick={() => {
                                    setIndex(index - 1)
                                }}>
                                    <FiChevronLeft />
                                </button>
                                <button className="next-btn" onClick={() => {
                                    setIndex(index + 1)
                                }}>
                                    <FiChevronRight />
                                </button>
                            </div>
                        </div>
                    </section>
                    {/* End of fourth section*/}
                    {/* Start of fifth section  */}
                    <section className="fifth-section" data-aos="fade-up">
                        <section className="banquet-contact">
                            <div className="banquet-left" >
                                <div className="contact-item" data-aos="fade-down"
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos-delay="500">
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
                    {/* End of fifth section*/}
                </div >
            </main >

            <Footer />
        </>
    )
}

export default HomePage;