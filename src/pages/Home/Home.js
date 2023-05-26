import React from "react";
import './Home.css'
import Hero from "../../components/Hero/Hero";

const Home = () => {
    return (
        <div className="home">
            <div className="hero-wrapper">
                <Hero />
            </div>
        </div>
    )
}

export default Home