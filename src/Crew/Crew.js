import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Container, Row, Col, Carousel } from "react-bootstrap"; 
import { crew } from "../data";
import styles from "./Crew.module.css";


function Crew() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const resize = ()=> {
    setScreenWidth(window.innerWidth);
  }

  const getBackground = (screenWidth)=> {
    if (screenWidth > 991) {
      return `url(${process.env.PUBLIC_URL + "/assets/crew/background-crew-desktop.jpg"})`
    }
    else if (screenWidth > 767) {
      return `url(${process.env.PUBLIC_URL + "/assets/crew/background-crew-tablet.jpg"})`
    }
    else {
      return `url(${process.env.PUBLIC_URL + "/assets/crew/background-crew-mobile.jpg"})`
    }
  }

  useEffect(()=>{
    window.addEventListener("resize", resize);

    resize();
  },[]);

  return(
    <main className={styles.main} style={{ 
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh", 
      height: "100%",
      backgroundImage: getBackground(screenWidth)
      }}>
            
      <Header />

      <Carousel activeIndex={index} controls={false} onSelect={handleSelect}>
      
        {crew.map((item)=>{
          const { id, name, images, role, bio } = item;
          
          return(
            <Carousel.Item key={id}>
              <Container>
                <Row>
                  <Col lg={6} className={styles.first}>
                    <p className="mb-5 mt-5"><span>02</span>meet your crew</p>

                    <h3>{role}</h3>
                    <h2>{name}</h2>

                    <p>
                      {bio}
                    </p>
                  </Col>

                  <Col lg={6} className={styles.second}>
                    <img src={images.png} />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          );
        })}

      </Carousel>

    </main>
  );
}

export default Crew;