import React, {Component} from "react";
import "./Main.css";
import List from "../List/List"
import SearchPanel from "../SearchPanel/SearchPanel"

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			text: "",
			term: "",
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.onDelete = this.onDelete.bind(this)
		this.onUpdateSearch = this.onUpdateSearch.bind(this)
		this.onToggleClassNames = this.onToggleClassNames.bind(this)
	}

	handleChange(e) {
		this.setState({ text: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		if(this.state.text.length === 0) {
			return
		}
		const newItem = {
			text: this.state.text,
			id: Date.now(),
			like: false
		}
		this.setState((state) => ({
			items: [...state.items, newItem],
			text: ""
		}))
		console.log(this.state.items)
	}

	onDelete(id) {
		this.setState(({items}) => {
			const index = items.findIndex(item => item.id === id);
			const newArr = [...items.slice(0, index), ...items.slice(index + 1)];
			return {
				items: newArr
			}
		})
	}

	searchPost(items, term) {
		if(term.length === 0) {
			return items
		}

		return items.filter((item) => {
			return item.text.indexOf(term) > -1
		})
	}

	onUpdateSearch(term) {
		this.setState({term})
	}

	onToggleClassNames(id) {
		this.setState(({items}) => {
			const index = items.findIndex(item => item.id === id);
			const old = items[index];
			const newitem = {...old, like: !old.like}
			const newArr = [...items.slice(0, index), newitem, ...items.slice(index + 1)]

			return {
				items: newArr
			}
		})
	}

	render() {
		const {term, items} = this.state;
		const visiblePosts = this.searchPost(items, term)
		const count = items.length
		const like = items.filter(item => item.like).length


		return(
			<div>
				<h1>Список дел</h1>
				<p><span>{like}</span> - понравишься, всего - <span >{count}</span></p>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="todo">Что нужно сделать?</label>
					<div className="input-form">
						<input
						id="todo"
						value={this.state.text}
						onChange={this.handleChange}
						/>
						<button className="btn">Добавить</button>
					</div>
				</form>
				<SearchPanel 
					onUpdateSearch={this.onUpdateSearch}
					onFilterSelect={this.onFilterSelect}
				/>
				<List 
				onToggleClassNames={this.onToggleClassNames}
				onDelete={this.onDelete}
				items={visiblePosts}
				/>
			</div>
		)
	}
}