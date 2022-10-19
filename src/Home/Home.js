import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home () {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const resize = ()=> {
        setScreenWidth(window.innerWidth);
    }

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

    useEffect(()=>{
        window.addEventListener("resize", resize);

        resize();
    },[]);

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
                    <Col lg={6}>
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

                    <Col lg={6} className="wrapper">
                        <div className="explore-container">
                            <div className="explore">explore</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Home;