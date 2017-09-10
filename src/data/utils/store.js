export function getAndStore(name, req) {

	let stored = retrieveFromStorage(name)
	return new Promise((resolve, reject) => {
		stored
			? resolve(stored)
			: req().then(result => {
				saveOnStorage(name, result)
				resolve(result)
			})
	})
}

function retrieveFromStorage(name) {
	return JSON.parse(sessionStorage.getItem(name))
}

function saveOnStorage(name, value) {
	sessionStorage.setItem(name, JSON.stringify(value))
}

function removeFromStorage(name) {
	sessionStorage.removeItem(name)
}