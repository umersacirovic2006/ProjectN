import React from "react";
import './Hero.css'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import imagesSlide from "../../images/imagesSlide";

const Hero = () => {
    return (
        <Carousel
            infiniteLoop={true}
            showArrows={true}
            autoPlay={true}
            interval="3600"
            showThumbs={false}
            className="hero"
        >
            {imagesSlide.map((image) => (
                <div key={image.alt}>
                    <img src={image.url} alt={image.alt}/>
                </div>))}
        </Carousel>
    );
};

export default Hero 