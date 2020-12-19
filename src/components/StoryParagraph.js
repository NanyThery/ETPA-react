import React from 'react'
import './styles/StoryParagraph.css'

class StoryParagraph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nextOutput: null,
            optionSent: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.submitPlayAgain = this.submitPlayAgain.bind(this)
    }

    handleChange(event) {
        this.setState({ nextOutput: event.target.dataset.nextOutput })
    }

    handleSubmit(event) {
        if (!this.state.nextOutput) {
            window.alert('Elige una opción para continuar')
            return;
        }
        this.setState({ optionSent: true })
        this.props.onOptionSubmit(this.state.nextOutput)
        return;

    }
    submitPlayAgain(event) {
        this.props.onReload(event)
    }

    render() {
        let options = this.props.options.map(item =>
            <div className="option-line" key={item.id}>
                <label className="option-label" htmlFor="opt-a" id="opt-a-text">{item.optionText} </label><input className="option-radio-btn" type="radio" name="options" data-next-output={item.output} id={item.id} onChange={this.handleChange} />
            </div>


        )
        // Comprueba si no hay opciones, entiende que es un final. 
        let isEnd = options.length === 0;

        return (
            <div className="story-holder">
                <div className="story-text">
                    <p className="text">{this.props.text}</p>
                </div>

                {!this.state.optionSent && !isEnd &&

                    <div id="story-options">
                        <hr />
                        <div className="story-input-container">
                            {options}
                        </div>
                        <div className="story-button-action">

                            <input className="story-options-button" type="button" onClick={this.handleSubmit} value="Siguiente >" /> <br />
                        </div>

                    </div>}

                { isEnd && <div className="story-end">
                    <p className="end-text">FIN</p>
                    <input className="story-options-button" type="button" onClick={this.submitPlayAgain} value="Jugar otra vez" /> <br />
                </div>}
            </div>
        )
    }
}

export default StoryParagraph