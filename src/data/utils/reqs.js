const url = 'https://randomuser.me/api/'

export function get(route) {
	return fetch(url+route, {
		method: 'GET'
	}).then(response => {
		return response.json()
	})
}