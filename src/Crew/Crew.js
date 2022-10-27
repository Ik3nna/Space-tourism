import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Container, Row, Col, Carousel } from "react-bootstrap"; 
import { crew } from "../data";
import styles from "./Crew.module.css";
import { useGlobalContext } from "../context";

function Crew() {
  const [index, setIndex] = useState(0);
  const { screenWidth } = useGlobalContext();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
      
      <Carousel interval={3000} indicatorLabels= {["btn1","btn2","btn3","btn4"]} activeIndex={index} controls={false} onSelect={handleSelect}>
      
        {crew.map((item)=>{
          const { id, name, images, role, bio } = item;
          
          return(
            <Carousel.Item key={id}>
              <Container>
                <Row>
                  <Col xs={{ order: "last" }} lg={{ span: 6, order: "first" }} className={styles.first}>
                    <p className="mb-5 mt-5"><span>02</span>meet your crew</p>

                    <h3>{role}</h3>
                    <h2>{name}</h2>

                    <p>
                      {bio}
                    </p>
                  </Col>

                  <Col xs={{ order: "first" }} lg={{ span: 6, order: "last" }} className={styles.second}>
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