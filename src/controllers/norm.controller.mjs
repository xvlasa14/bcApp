import { getAll, get, create, update, remove } from '../services/norm.service.mjs'
/**
 * 
 * @param {string} id norm id
 * @returns norm JSON object
 */
export const getNorm = (id) => {
    return get(id)  
}

/**
 * 
 * @returns all norm objects
 */
export const getNorms = () => {
    return getAll()
}   

/**
 * 
 * @param {JSON object} data data creating new norm
 * @param {fastify Object} reply response carrier
 * @returns news norm object or error code on fail
 */
export async function createNorm (data, reply) {
    try {
        return reply.code(200).send(await create(data))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {fastify Object} request request carrying data
 * @param {fastify Object} reply response
 * @returns updated object or error code
 */
export async function updateNorm (request, reply) {
    try {
        return reply.code(200).send(await update(request.params.id, request.params.body))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} id norm's id
 * @returns JSON object of removed norm or error code
 */
export async function deleteNorm (id) {
    try {
        return remove(id)
    } catch (e) {
        console.log(e)
        return e.code
    }
    
}