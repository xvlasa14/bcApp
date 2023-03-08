import { getAll, get, create, update, remove } from '../services/user.service.mjs'

/**
 * 
 * @param {string} id user id
 * @returns JSON object of user or error code
 */
export const getUser = (id) => {
    try {
        return get(id)
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @returns all users
 */
export const getUsers = () => {
    return getAll();
}   

/**
 * 
 * @param {JSON object} user request body of new user 
 * @param {fastify object} reply response holder
 * @returns new user object or error code
 */
export async function createUser (user, reply) {
    try {
        return reply.send(await create(user))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}
/**
 * 
 * @param {JSON object} data data for update
 * @param {fastify Object} reply response holder 
 * @returns updated object or error code
 */
export async function updateUser (data, reply) {
    try {
        return reply.send(await update(data))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} id user ID
 * @returns deleted record
 */
export async function deleteUser (id) {
    return remove(id);
}