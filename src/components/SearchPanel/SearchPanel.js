import React, {Component} from "react";


export default class SearchPanel extends Component {
	constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
        this.allPosts = this.allPosts.bind(this)
        this.onDown = this.onDown.bind(this)
    }

	onDown(e) {
		e.preventDefault()
		const term = e.target.value
		this.setState({ term })
		this.props.onUpdateSearch(term)
	}

	allPosts(e) {
		this.setState({ term: ""})
		e.preventDefault()
		this.props.onUpdateSearch("")
	}

	render() {
		return(
			<>
			<form >
				<input
					className="input"
					placeholder="Найти из списка"
					onChange={this.onDown}
					value={this.state.term}
				/>

				<button 
				onClick={this.allPosts}
				className="btn">Все</button>
			</form>
			</>
		)
		}

} 


