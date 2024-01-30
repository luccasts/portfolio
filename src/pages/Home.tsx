import {Container } from "react-bootstrap";

import { FooterComponent } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";



export const Home = () => {
    return (
        <Container id='Container'>
            <Main />
            <FooterComponent />      
        </Container>
    )
}