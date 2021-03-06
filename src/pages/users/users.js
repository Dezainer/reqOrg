import React from 'react';
import UsersLogic from './usersLogic'

export default class Users extends UsersLogic {

	getList() {
		return this.state.users.length == 0
		? <span>Alahuakbar</span>
		: this.state.users.map((user, i) => 
			<li key={ i }>{ user.name.first }</li>
		)
	}

	render() {
		return (
			<div>
				<h1>{this.props.params.gender}</h1>
				{
					!this.state
						? <span>Loading...</span>
						: (
							<div>
								<ul>
									{ this.getList() }
								</ul>
							</div>
						)
				}
			</div>
		)
	}
}