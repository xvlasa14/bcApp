import { getAll, get, create, update, remove } from '../services/part.service.mjs'
/**
 * 
 * @param {string} id part id
 * @returns part JSON object
 */
export const getPart = (id) => {
    return get(id)  
}

/**
 * 
 * @returns all part objects
 */
export const getParts = () => {
    return getAll()
}   

/**
 * 
 * @param {JSON object} data data creating new part
 * @param {fastify Object} reply response carrier
 * @returns news part object or error code on fail
 */
export async function createPart (data, reply) {
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
export async function updatePart (request, reply) {
    try {
        return reply.code(200).send(await update(request.params.id, request.params.body))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} id part's id
 * @returns JSON object of removed part or error code
 */
export async function deletePart (id) {
    try {
        return remove(id)
    } catch (e) {
        console.log(e)
        return e.code
    }
    
}