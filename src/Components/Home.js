import React, { useEffect } from "react";
import "aos/dist/aos.css";
import aos from "aos";
import { Button } from "react-bootstrap";
import { ImArrowRight } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <div className="background-image"></div>
        <div className="home-content">
          <h1 data-aos="fade-left">LIVERPOOL FC</h1>
          <Link to="/squad">
            <Button className="home-btn" size="lg" data-aos="fade-right">
              Explore <ImArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
