import React from "react";
import Header from "../Components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { technology } from "../data";
import styles from "./Technology.module.css";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";

function Technology () {
    const { screenWidth, value, setValue } = useGlobalContext();

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

    const { name, images, description } = technology[value];

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
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
        </motion.div>
    );
}

export default Technology;