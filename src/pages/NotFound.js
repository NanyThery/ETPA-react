import React from 'react';
import Image404 from '../assets/img/404.png'
import styled from 'styled-components'

const NotFoundContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;

`

const TextContainer = styled.div`
display: flex;
flex-flow: column;
align-items: center;
font-family: var(--special-font);
font-size: 2em; 
max-width: 50vh;
`
class NotFound extends React.Component {

    render() {
        return (
            <NotFoundContainer>
                <TextContainer style={{ textAlign: "center" }}>
                    <div style={{ maxWidth: "300px" }}><img style={{ width: "100%" }} src={Image404}></img></div>
                    <p>Has llegado a un típico caso de 404, foraster@. La página que has venido a buscar... ya no está aquí</p>
                </TextContainer>



            </NotFoundContainer >

        )
    }
}

export default NotFound