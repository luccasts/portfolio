import { Col, Container, Row } from "react-bootstrap";
import photo from "../img/img-perfil.jpg"




export const Sliders = () => {
    return (
        <Container  id='Home'>
                <Row>
                    <Col sm={{ order: 'last' }} md={{order: 'first'}}>
                        
                            <div  className='div-title-main'>
                                <h1 className='title-main'> Bem vindo!</h1>
                            </div>

                            <div className='div-title-secondary'>
                                <h2  className='title-secondary'>Oi! Me chamo Lucas e sou </h2>
                                <h2 className='title-secondary-desenvolvedor' >Desenvolvedor web</h2>
                            </div>    
                </Col>
                <Col  sm={{ order: 'first' }} md={{order: 'last'}}>
                    <div className='div-photo'>
                            <img  className='photo' width={300} src={photo} alt="foto" />  
                    </div>
                </Col>
                </Row>
                
            </Container>
    )
}