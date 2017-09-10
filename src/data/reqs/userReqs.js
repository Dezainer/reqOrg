import { get } from '../utils/reqs'

export function fetchUsers(gender) {
	return get('?gender='+gender).then(result => {
		return result.results
	})
}