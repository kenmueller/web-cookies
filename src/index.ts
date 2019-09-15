export function all(): { [name: string]: string } {
	return document.cookie.split(';').reduce((acc, element) => {
		const parts = element.split('=')
		if (parts.length < 2)
			return acc
		const value = parts[1].trim()
		return value ? { ...acc, [parts[0].trim()]: value } : acc
	}, {})
}

export function get(name: string): string | undefined {
	return (document.cookie.match(`(^|[^;]+)\\s*${name}\\s*=\\s*([^;]+)`) || []).pop()
}

export function set(
	name: string,
	value: any,
	options: { expiration?: string | null | Date, path?: string } = {}
): { name: string, value: any, expiration: Date | undefined, path: string } {
	const expiration = options.expiration
	const path = options.path
	const expirationDate = typeof expiration === 'string' || expiration === null
		? new Date(expiration === null || /^never$/i.test(expiration) ? 864e13 : Date.parse(expiration))
		: expiration
	document.cookie = `${name}=${value}${expirationDate === undefined ? '' : `; expires=${expirationDate.toUTCString()}`}${path === undefined ? '' : `; path=${path}`}`
	return { name, value, expiration: expirationDate, path: path === undefined ? '/' : path }
}

export function remove(name: string): string {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
	return name
}

export function exists(name: string): boolean {
	return get(name) !== undefined
}