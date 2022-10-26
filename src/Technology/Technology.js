import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { technology } from "../data";
import styles from "./Technology.module.css";

function Technology () {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [value, setValue] = useState(0);

    const resize = ()=> {
        setScreenWidth(window.innerWidth);
    }

    const getBackground = (screenWidth)=> {
        if (screenWidth > 991) {
            return `url(${process.env.PUBLIC_URL + "/assets/technology/background-technology-desktop.jpg"})`
        }
        else if (screenWidth > 767) {
            return `url(${process.env.PUBLIC_URL + "/assets/technology/background-technology-tablet.jpg"})`
        }
        else {
            return `url(${process.env.PUBLIC_URL + "/assets/technology/background-technology-mobile.jpg"})`
        }
    }

    useEffect(()=>{
        window.addEventListener("resize", resize);

        resize();
    },[]);

    const { name, images, description } = technology[value];

    return(
        <main style={{ 
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
                    <Col xs={{ order: "last" }} lg={{ span: 6, order: "first" }}>
                        <p className={`${styles.para} mb-5 mt-5`}><span>03</span>space launch 101</p>

                        <section>
                            <article>
                                {technology.map((item, index) => {
                                    return(
                                        <div key={item.id} onClick={()=> {setValue(index)}} className={`${styles.tabs} mt-5 mb-5 ${index === value && styles.active}`}>
                                            <p>{item.id}</p>
                                        </div>
                                    );
                                })
                                }
                            </article>
                            
                            <article>
                                <p>the terminology...</p>
                                <h2>{name}</h2>
                                <p>{description}</p>
                            </article>
                        </section>
                    </Col>

                    <Col xs={{ order: "first" }} lg={{ span: 6, order: "last"}} className={styles.col2}>
                        {screenWidth > 991 ? <img src={images.portrait} alt="img" /> : <img src={images.landscape} alt="img" /> }
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Technology;