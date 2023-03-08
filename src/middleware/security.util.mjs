/**
 * SECURITY UTILITIES
 */

import crypto from 'crypto'

/**
 * 
 * @param {string} password password in raw form
 * @returns hash containing password
 */
export function hash(password) {
    const salt = crypto.randomBytes(16).toString("hex")

    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex")

    return hash
}

/**
 * 
 * @param {string} password password from frontend/client
 * @param {string} salt 
 * @param {string} hash  
 * @returns true if password is correct, false otherwise
 */
export function verify(password, salt, hash) {
    const control = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex")

    return control === hash
}

