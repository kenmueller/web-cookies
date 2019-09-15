/**
 * Get all the cookies on the page
 *
 * @returns A key/value pair of all the cookies on the page
 */
export function all(): { [name: string]: string }

/**
 * Get the value for the specified cookie
 *
 * @param name The name of the cookie
 * @returns The cookie's value of type `string`. Returns `undefined` if the cookie doesn't exist.
 */
export function get(name: string): string | undefined

/**
 * Set the value of a cookie
 *
 * @param name The name of the cookie
 * @param value The cookie's value
 * @param options.expiration
 *
 * The expiration of the cookie.
 *
 * If give an expiration of `'never'` or `null`, the cookie never expires.
 *
 * By default, the cookie expires on browser session end.
 *
 * Otherwise, you can specify a `Date` or a `string` for the expiration.
 *
 * @param options.path The path of the cookie. By default, it is `'/'`.
 * @returns The cookie's record. Includes its name, value, expiration, and path
 */
export function set(
	name: string,
	value: any,
	options?: { expiration?: string | null | Date, path?: string }
): { name: string, value: any, expiration: Date | undefined, path: string }

/**
 * Removes a cookie and returns the name
 *
 * @param name The name of the cookie
 * @returns The name of the cookie that was removed
 */
export function remove(name: string): string

/**
 * Check if a cookie exists
 *
 * @param name The name of the cookie
 * @returns Whether the cookie exists or not
 */
export function exists(name: string): boolean