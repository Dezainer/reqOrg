import * as Store from '../utils/store'
import * as UserReqs from '../reqs/userReqs'

export function getUsers(type) {
	return Store.getAndStore(
		type, () => 
		UserReqs.fetchUsers(type)
	)
}