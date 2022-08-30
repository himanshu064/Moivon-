
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from './index.module.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { preparePublicFolder } from "../../utils/api";
import Header from '../Header'
import { MdArrowDownward } from'react-icons/md';


export default function CreavtiveEventPage() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    
    return (
        <>
            <Offcanvas show={show} placement='top' onHide={handleClose} className="OffcanvasBody" style={{ height: '100vh ', backgroundRepeat: 'no-repeat', backgroundImage: `url(${preparePublicFolder("/img/Creativebackground.png")})`, backgroundSize: 'cover' }} >
                <Offcanvas.Header closeButton className={styles.offCanvasHeader}>
                    <MdArrowDownward />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container  >

                        <Header />
                        <div>
                            <div>
                                <h1>FINDING YOUR NEXT CREATIVE EVENT SHOULD BE SO EASY</h1>
                            </div>
                            <div>
                                <h6>Welcome to Moivon, your one source for uncovering
                                    art, creative, and design events. Explore our curated
                                    list, made for you, and fall in love in each!
                                    Explore Now Video of Our Events</h6>
                            </div>
                        </div>
                        <div>
                            <Button/>
                        </div>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );

}



