# **web-cookies**

**Manipulate cookies in the browser**

## **Use in the browser**

```html
<script src="https://raw.githubusercontent.com/kenmueller/web-cookies/master/browser/index.min.js"></script>
```

## **npm**

```bash
npm i web-cookies
```

## **Functions**

- **[`all`](#all-function)**
- **[`get`](#get-function)**
- **[`set`](#set-function)**
- **[`remove`](#remove-function)**
- **[`exists`](#exists-function)**

<div id="all-function"></div>

```typescript
/**
 * Get all the cookies on the page
 *
 * @returns A key/value pair of all the cookies on the page
 * @type `{ [name: string]: string }`
 */
function all(): { [name: string]: string }
```

<div id="get-function"></div>

```typescript
/**
 * Get the value for the specified cookie
 *
 * @param name The name of the cookie
 * @returns The cookie's value of type `string`. Returns `undefined` if the cookie doesn't exist.
 */
function get(name: string): string | undefined
```

<div id="set-function"></div>

```typescript
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
function set(
	name: string,
	value: any,
	options?: { expiration?: string | null | Date, path?: string }
): { name: string, value: any, expiration: Date | undefined, path: string }
```

<div id="remove-function"></div>

```typescript
/**
 * Removes a cookie and returns the name
 *
 * @param name The name of the cookie
 * @returns The name of the cookie that was removed
 */
function remove(name: string): string
```

<div id="exists-function"></div>

```typescript
/**
 * Check if a cookie exists
 *
 * @param name The name of the cookie
 * @returns Whether the cookie exists or not
 */
function exists(name: string): boolean
```