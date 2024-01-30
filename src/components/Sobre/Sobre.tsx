import { Row } from "react-bootstrap";
import photo from "../../img/img-perfil1.png"
import "../../styles/sobre.css"


export const Sobre = () => {
    return (
        <section>
            <Row id='Home'>
                <div id='home-col' >
                    <div id='home-div-img'>
                        <img  id='home-img'  src={photo} alt="foto" />  
                    </div>

                <div id='home-div-title'>       
                    <div id='home-div-h1'>
                            <h1 id='home-h1'>Bem vindo!</h1>
                        </div>

                        <div id='home-div-p'>
                            <p id='home-p'>Meu nome é Lucas, tenho 20 anos e programo mais de 3 anos. Sou um aspirante a programador em busca de conhecimento e adoro desafios!</p>
                        </div>  
                </div>

                </div>
            </Row>
        </section>
    )
}