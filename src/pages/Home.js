import React from 'react';
import CardsList from '../components/CardsList'
import Header from '../components/Header'
import './Home.css'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display:flex;
  flex-flow: column;
  align-items: center;
`
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: null,
    }
  }

  async componentDidMount() {
    const url = `/stories/story-index.json`

    await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(data => data.json()).then(res => this.setState({ stories: res.stories }))

  }

  render() {

    //@TODO - Refactor con un solo return
    if (this.state.stories) {
      return (
        <StyledContainer>
          <Header></Header>
          <CardsList stories={this.state.stories}></CardsList>
        </StyledContainer>
      )
    }
    return (
      <p>Cargando...</p>
    )
  }

}

export default Home;
