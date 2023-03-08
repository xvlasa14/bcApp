import db, { exclude } from '../middleware/db.util.mjs'
import { hash } from '../middleware/security.util.mjs'

/**
 * 
 * @returns all users
 */
export async function getAll() {
    return exclude(await db.user.findMany(), ['password']);
}

/**
 * 
 * @param {string} id user ID
 * @returns user record
 */
export async function get(id) {
    return exclude(await db.user.findUnique({
        where: {
            id: parseInt(id)
        }
    }), ['password'])
}

/**
 * 
 * @param {JSON object} data new user data
 * @returns new user
 */
export async function create(data) {

    data.password = hash(data.password);

    return exclude(await db.user.create({
        data: data
    }), ['password'])
}

/**
 * 
 * @param {fastify object} request obj holding data
 * @returns updated record
 */
export async function update(request) {
    if( request.body.password ) {
        request.body.password = hash(request.body.password)
    }

    return exclude(await db.user.update({
        where: {
            id: parseInt(request.params.id)
        },
        data: request.body
    }), ['password'])
}

/**
 * 
 * @param {string} id user ID
 * @returns deleted user object WITHOUT password
 */
export async function remove(id) {
    return exclude(await db.user.delete({
        where: {
            id: parseInt(id)
        }
    }), ['password'])
}