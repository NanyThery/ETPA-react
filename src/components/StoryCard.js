import React from 'react';
import styled from 'styled-components';
import { getRandomColor } from '../assets/auxFunctions/colorFunctions'
import { Link } from 'react-router-dom'

class StoryCard extends React.Component {
    render() {
        const StyledCard = styled.div`
        margin: 10px; 
        padding: 10px 20px; 
        width: 250px;
        max-width: 250px; 
        height: 450px;
        max-height: 450px; 
        display: flex; 
        flex-flow: column; 
        text-align: center;
        border-style: solid; 
        border-color: #404040;
        border-width: 1px; 
        box-shadow: 1px 1px 1px #404040;
        border-radius: 3px; 
        text-transform: uppercase;
        font-family: var(--special-font)
        `

        const StyledDividers = styled.hr`
        padding: 0; 
        border-top: 1px solid black;
        `

        const StyledStoryTitle = styled.h2`
            font-size: 1.2rem; 
            color: ${getRandomColor('title')};
        `

        const VolumeContainer = styled.span`
        padding: 4px 8px; 
        background-color: red; 
        color: yellow; 
        border-radius: 50%; 
        font-weight: bold;
        margin: 0; 
        `

        const SubText = styled.p`
        font-size: 0.75rem`

        const ImageContainer = styled.div`
        border-style: double; 
        border-radius: 50px 50px 0 0;
        border-width: 15px; 
        border-color: ${getRandomColor('border')}; 
        background-color: ${getRandomColor('background')}
        ; 
        max-height: 350px; 
        overflow: hidden; 
        `

        const storyLink = `/story/${this.props.id}`

        return (
            <Link style={{ textDecoration: 'none', color: "inherit" }} to={storyLink}>
                <StyledCard>
                    <div><VolumeContainer>{this.props.volume}</VolumeContainer></div>
                    <div>
                        <StyledDividers />
                        <StyledStoryTitle>{this.props.title}</StyledStoryTitle>
                        <StyledDividers />
                        <SubText > {this.props.author} </SubText>
                    </div>
                    <ImageContainer >
                        <img style={{ width: '100%' }} src={this.props.img} alt="Una Imagen Random" />
                    </ImageContainer>
                    <SubText >Edición Digital</SubText>
                </StyledCard>
            </Link>

        )
    }
}

export default StoryCard
