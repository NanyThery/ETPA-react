import React from 'react';
import StoryParagraph from '../components/StoryParagraph'
import { getParagraph } from '../assets/auxFunctions/utils'
import StoryCard from '../components/StoryCard';
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const StyledContainer = styled.div`
width: 50vw;
display: flex; 
flex-flow: column; 
align-items: center;

@media (max-width: 768px) {
    width: 80vw;
}
`

class StoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            storyParagraphs: [],
            isError: null,
        }
        this.getNextParagraph = this.getNextParagraph.bind(this)
        this.reloadStory = this.reloadStory.bind(this)

    }

    async componentDidMount() {
        const url = `/stories/${this.props.match.params.id}.json`

        await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(data => data.json()).then(res => this.setState({ data: res })).catch(error => this.setState({ isError: true }))

        if (this.state.data) {
            let startingText = await getParagraph(this.state.data.paragraphs, 'start')
            this.setState({ storyParagraphs: [startingText] })
        }
    }
    async getNextParagraph(nextOutputReference) {
        if (nextOutputReference) {
            const nextParagraph = await getParagraph(this.state.data.paragraphs, nextOutputReference)
            this.setState({ storyParagraphs: [...this.state.storyParagraphs, nextParagraph] })
        }
    }

    async reloadStory(input) {
        this.setState({ storyParagraphs: [] });
        if (this.state.data) {
            let startingText = await getParagraph(this.state.data.paragraphs, 'start')
            this.setState({ storyParagraphs: [startingText] })
        }

    }

    render() {
        if (this.state.data) {
            let story = this.state.storyParagraphs.map(item =>
                <StoryParagraph key={item.id} text={item.text} options={item.options} onReload={this.reloadStory} onOptionSubmit={this.getNextParagraph} ></StoryParagraph>
            )

            return (
                <StyledContainer>
                    <StoryCard volume={this.state.data.volume} title={this.state.data.title} author={this.state.data.author} img={this.state.data.img}></StoryCard>
                    <hr />
                    {story}
                </StyledContainer>

            )
        }

        if (this.state.isError) {
            return <Redirect to="/NotFound"></Redirect>
        }

        return (
            <h1>Loading...</h1>
        )



    }
}

export default StoryPage