import React from "react";
import Header from "../Components/Header";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";

function Home () {
    const { screenWidth } = useGlobalContext();

    const getBackground = (screenWidth)=> {
        if (screenWidth > 991) {
            return `url(${process.env.PUBLIC_URL + "/assets/home/background-home-desktop.jpg"})`
        }
        else if (screenWidth > 767) {
            return `url(${process.env.PUBLIC_URL + "/assets/home/background-home-tablet.jpg"})`
        }
        else {
            return `url(${process.env.PUBLIC_URL + "/assets/home/background-home-mobile.jpg"})`
        }
    }

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

                <Container className={styles.container}>
                    <Row>
                        <Col lg={6} className={styles.col1}>
                            <p>
                                So, you want to travel to
                            </p>

                            <h2>space</h2>

                            <p>
                                Let’s face it; if you want to go to space, you might as well genuinely go to 
                                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                                because we’ll give you a truly out of this world experience!
                            </p>
                        </Col>

                        <Col lg={6} className={styles.wrapper}>
                            <div className={styles.exploreContainer}>
                                <div className={styles.explore}>explore</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </motion.div>
    );
}

export default Home;