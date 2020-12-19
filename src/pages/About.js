import React from 'react';
import styled from 'styled-components';
import NadineFoto from '../assets/img/NadineFoto.jpg'


const StyledContainer = styled.div`
display: flex; 
width: 100%;
justify-content: center;
align-items: center; 
@media (max-width: 768px) {
    flex-flow:column; 
    
}
`

const Card = styled.div`
display:flex; 
flex-flow: column; 
align-items: center;
justify-content: space-around;
padding: 2px 15px 15px 15px;
border-width: 1px; 
width: 25%;
min-height: 350px;
border-radius: 15px; 
margin: 10px;
box-shadow: 3px 3px 5px var(--regular-text-color);
@media (max-width: 768px) {
    min-width: 80%;
}
`

const Avatar = styled.div`
max-width: 100px;
`
const SocialContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.5em;
    `

const StyledTitle = styled.h1`
    font-family: var(--special-font);
    background-color: var(--main-title-red); 
    color: white; 
    text-transform: uppercase;
    padding: 10px;
    border-radius: 50px;
    font-size: 1em;

  `



class About extends React.Component {
    render() {
        return (
            <StyledContainer>
                <Card>
                    <StyledTitle>Este Proyecto</StyledTitle>
                    <p>Esta aplicación está hecha con React <i class="fab fa-react"></i>. Y forma parte de un repositorio abierto de Elige Tu Propia Aventura, donde este mismo proyecto se va realizando en diferentes lenguajes.</p>
                    <p> Si quieres aportar tu propia versión en React <i class="fab fa-react"></i>, Vue <i class="fab fa-vue"></i>, Angular<i class="fab fa-angular"></i>, o cualquier otro lenguaje, siéntete libre de contribuir. El objetivo es que sirva como guía de funcionalidades básicas aplicadas y también como proyecto de prueba si estás aprendiendo un lenguaje.</p>


                    <SocialContainer >
                        <a href='https://github.com/NanyThery/EligeTuPropiaAventura'><i style={{ fontSize: "2em", color: 'var(--regular-text-color)' }} className="fab fa-github"></i></a>
                    </SocialContainer>

                </Card>
                <Card>
                    <StyledTitle>Sobre mí</StyledTitle>
                    <Avatar style={{ width: "80%" }}>
                        <img style={{ width: "100%", borderRadius: "50%" }} src={NadineFoto} alt="Colección de Libros de Elige tu Propia Aventura"></img>
                    </Avatar>
                    <p> Soy Nadine, desarrolladora Front-End👩‍💻, loca de las plantas🌿, los juegos de mesa🎲, y los videojuegos🎮. Concienciada con el planeta🌎 y con hacer un impacto positivo💚. Puedes seguirme en:
                    </p>
                    <SocialContainer >
                        <a href='https://github.com/NanyThery' rel="noreferrer" target="_blank"><i style={{ fontSize: "2em", color: 'var(--regular-text-color)' }} className="fab fa-github"></i></a>
                        <a href='https://www.Twitter.com/NanyThery'><i style={{ fontSize: "2em", color: 'var(--regular-text-color)' }} className="fab fa-twitter"></i></a>
                        <a href='https://dev.to/nanythery'><i style={{ fontSize: "2em", color: 'var(--regular-text-color)' }} className="fab fa-dev"></i></a>
                        <a href='https://linkedin.com/in/nadinethery'><i style={{ fontSize: "2em", color: 'var(--regular-text-color)' }} className="fab fa-linkedin"></i></a>

                    </SocialContainer>



                </Card>
            </StyledContainer>
        )
    }
}

export default About