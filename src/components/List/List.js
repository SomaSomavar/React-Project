import React, {Component} from "react";
import "./List.css";

export default class List extends Component {
	render() {
		const {onDelete, onToggleClassNames} = this.props
		return(
			<ul>
				{this.props.items.map(item => (
					<ListItems 
					like={item.like}
					item={item.text} 
					key={item.id}
					onToggleClassNames={() => onToggleClassNames(item.id)} 
					onDelete={() => onDelete(item.id)}/>
				))}
			</ul>
		)
	}
}

class ListItems extends Component {

	render() {

		let classNames = "eq"
		const {item, onDelete, onToggleClassNames, like} = this.props

		if (like) {
			classNames += " like"
		}

		return(
			<li className="list-item">
				<div className="app-list-item">
					<span>{item}</span>
					<div className={classNames}>
						<button 
						onClick={onDelete}
						type="button" 
						className="btn-trash btn-sm">
						<i className="fa fa-trash-o"></i>
						</button>
						<button
						onClick={onToggleClassNames} 
						className="btn-heart btn-sm">
							 <i className="fa fa-heart"></i>
						</button>
					</div>
				</div>
			</li>
		)
	}
}

