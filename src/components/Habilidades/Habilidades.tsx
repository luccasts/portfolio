import "../../styles/habilidades.css"
import { Row } from "react-bootstrap";





export const Habilidades = () => {
    return (
            <section>
                <Row id='Habilidades'>
                        <h1 className=''> Habilidades</h1>
                    
                        <h2 className=''>Tecnologias conhecidas</h2>
                        <div id='icons'>
                            <img loading="lazy" alt='icon react' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" />
                            <img loading="lazy"  alt='icon figma' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="40" height="40"  />
                            <img loading="lazy" alt='icon javascript' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"  />
                            <img loading="lazy"  alt='icon typescript' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  width="40" height="40"   />
                            <img loading="lazy"  alt='icon angularjs' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" width="40" height="40" />
                            <img loading="lazy"  alt='icon nextjs' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="40" height="40" />
                            <img loading="lazy"  alt='icon ruby' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" width="40" height="40"/>
                        </div>
                  
                            <div id='Github'>
                                <a href="https://github.com/LucasSst">
                                <img loading="lazy"  alt='github tabela de tecnologias' src="https://github-readme-stats.vercel.app/api/top-langs/?username=LucasSst&layout=compact&langs_count=7&theme=dracula"/></a>
                            </div >
                            <p id='Github-p'> Quadro de Tecnologias utilizadas nos projetos do GitHub</p>
                    
                </Row>
            </section> 
    )
}