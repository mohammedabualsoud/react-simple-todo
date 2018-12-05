import React from 'react'
import PropTypes from 'prop-types'

class Todo  extends React.Component{
    constructor(props) {

        super(props)
        this.state = {
            updateClicked: false,
            updatedText: props.text,
        }
        this.toggleUpdate = this.toggleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.cancelModification = this.cancelModification.bind(this)
        this.toggleUpdateButtonState = this.toggleUpdateButtonState.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    toggleUpdateButtonState() {
        // toggle state, show up the Modify button
        this.setState((state) => {
            return {updateClicked: !state.updateClicked};
        })

    }
    toggleUpdate() {

        if (this.state.updateClicked) {
            // Save changes
            this.props.updateToDo(this.props.id, 'text', this.state.updatedText)

        }
      this.toggleUpdateButtonState()

    }

    handleChange(event) {
        const {name, value} = event.target;
        console.log('handleChange', );
        switch (name) {
            case 'text':
                this.setState({updatedText: value})
                break
            case 'status':
                this.props.updateToDo(this.props.id, 'status', value)
        }
    }

    cancelModification() {
        const self = this
        this.setState({updatedText: this.props.text}, () => {
            // it's not necessary to be here in the setState callback.
            self.toggleUpdateButtonState()

        })
    }

    handleRemove() {
        this.props.removeToDo(this.props.id)
    }


    render() {
        const {status} = this.props
        return (
            <React.Fragment>
                <li className={`c-todo-item c-todo-item--${status}`}
                >
                    {this.state.updateClicked ? <input type="text" onChange={this.handleChange} name="text" value={this.state.updatedText}/> : this.state.updatedText}
                    <button className="u-margin-start-lg" onClick={this.toggleUpdate}>{this.state.updateClicked ? 'Save' : 'Modify'}</button>
                    {this.state.updateClicked && <button onClick={this.cancelModification}>Cancel Modification</button>}
                    <button onClick={this.handleRemove}>Remove</button>
                    <select value={status} name="status" onChange={this.handleChange}>
                        <option>active</option>
                        <option>inactive</option>
                        <option>completed</option>
                        <option>incompleted</option>
                    </select>
                </li>
            </React.Fragment>

        )
    }
}


Todo.propTypes = {
    removeToDo: PropTypes.func.isRequired,
    updateToDo: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo
