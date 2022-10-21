import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Container, Row, Col, Stack } from "react-bootstrap"; 
import { destination } from "../data";
import styles from "./destination.module.css";

function Destination () {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [value, setValue] = useState(0);

    const resize = ()=> {
        setScreenWidth(window.innerWidth);
    }

    const getBackground = (screenWidth)=> {
        if (screenWidth > 991) {
            return `url(${process.env.PUBLIC_URL + "/assets/destination/background-destination-desktop.jpg"})`
        }
        else if (screenWidth > 767) {
            return `url(${process.env.PUBLIC_URL + "/assets/destination/background-destination-tablet.jpg"})`
        }
        else {
            return `url(${process.env.PUBLIC_URL + "/assets/destination/background-destination-mobile.jpg"})`
        }
    }

    useEffect(()=>{
        window.addEventListener("resize", resize);

        resize();
    },[]);

    const { name, images, description, distance, travel } = destination[value];

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

            <Container>
                <Row>
                    <Col lg = {6} className={styles.first}>
                        <p className="mb-5 mt-5"><span>01</span>pick your destination</p>

                        <img src={images.png} alt="name" className="mt-5" />
                    </Col>

                    <Col lg = {6} className={styles.second}>
                        <Stack className={styles.wrapper} direction="horizontal" gap={5}>
                            {destination.map((item, index) => {
                                return(
                                    <div key={item.id} onClick={()=> {setValue(index)}} className={`${styles.tabs}  ${index === value && styles.active}`}>
                                        {item.name}
                                    </div>
                                );
                            })
                            }
                        </Stack>

                        <h1>{name}</h1>

                        <p className={`${styles.description} mt-3 mb-5`}>{description}</p> <hr />

                        <article className={`${styles.last} mt-4`}>
                            <div>
                                <p>avg. distance</p>
                                <p>{distance}</p>
                            </div>

                            <div>
                                <p>est. travel time</p>
                                <p>{travel}</p>
                            </div>
                        </article>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Destination;