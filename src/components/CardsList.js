import React from 'react';
import styled from 'styled-components';
//import storyIndex from '.././assets/story-index.json'
import StoryCard from '../components/StoryCard'

const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 50px 0 0 0;
width: 80%;
justify-content: center;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`
class CardsList extends React.Component {

    render() {
        const cardsToRender = this.props.stories.map((card, index) =>
            <StoryCard key={card.id} id={card.id} link={card.link} author={card.author} img={card.img} volume={index + 1} title={card.title}></StoryCard>
        )
        return (

            <CardContainer>
                {cardsToRender}
            </CardContainer>

        )
    }
}

export default CardsList