import React from 'react'
import * as UserStore from '../../data/stores/userStore'

export default class UsersLogic extends React.Component {

	componentDidMount() {
		this.fetchUsers()
	}

	fetchUsers() {
		UserStore.getUsers(this.props.params.gender)
			.then(users => {
				this.setState({ users })
			})
	}
}