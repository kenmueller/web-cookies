const cookies = {
	all: () =>
		document.cookie.split(';').reduce((acc, element) => {
			const parts = element.split('=')
			if (parts.length < 2)
				return acc
			const value = parts[1].trim()
			return value ? { ...acc, [parts[0].trim()]: value } : acc
		}, {}),
	get: name =>
		(document.cookie.match(`(^|[^;]+)\\s*${name}\\s*=\\s*([^;]+)`) || []).pop(),
	set: (name, value, { expiration, path } = {}) => {
		const expirationDate = typeof expiration === 'string' || expiration === null
			? new Date(expiration === null || /^never$/i.test(expiration) ? 864e13 : Date.parse(expiration))
			: expiration
		document.cookie = `${name}=${value}${expirationDate === undefined ? '' : `; expires=${expirationDate.toUTCString()}`}${path === undefined ? '' : `; path=${path}`}`
		return { name, value, expiration: expirationDate, path: path === undefined ? '/' : path }
	},
	remove: name => {
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
		return name
	},
	exists: name =>
		cookies.get(name) !== undefined
}