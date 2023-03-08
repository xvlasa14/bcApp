import { getAll, get, create, update, remove } from '../services/result.service.mjs'
/**
 * 
 * @param {string} id result id
 * @returns result JSON object
 */
export const getResult = (id) => {
    return get(id)  
}

/**
 * 
 * @returns all result objects
 */
export const getResults = () => {
    return getAll()
}   

/**
 * 
 * @param {JSON object} data data creating new result
 * @param {fastify Object} reply response carrier
 * @returns news result object or error code on fail
 */
export async function createResult (data, reply) {
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
export async function updateResult (request, reply) {
    try {
        return reply.code(200).send(await update(request.params.id, request.params.body))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} id result's id
 * @returns JSON object of removed result or error code
 */
export async function deleteResult (id) {
    try {
        return remove(id)
    } catch (e) {
        console.log(e)
        return e.code
    }
    
}