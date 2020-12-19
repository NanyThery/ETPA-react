import React from 'react';
import styled from 'styled-components';



class Header extends React.Component {
    render() {
        const StyledDivider = styled.hr`
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
        `;

        const Container = styled.div`
        width: 80%;
        `

        const StyledTitle = styled.h1`
    font-family: var(--special-font);
    background-color: var(--main-title-red); 
    color: white; 
    text-transform: uppercase;
    padding: 0 10px;
    border-radius: 50px;

    @media (max-width: 768px) {
        font-size: 1em;
      }




  }
        `
        return (
            <Container>

                <StyledTitle >Elige tu Propia Aventura</StyledTitle>
                <h2 className="featured-font">Tú eres protagonist@ de estas aventuras. Elige cuál quieres jugar.</h2>
                <StyledDivider></StyledDivider>


            </Container>)
    }
}

export default Header



