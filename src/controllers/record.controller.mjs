import { getAll, get, create, update, remove } from '../services/record.service.mjs'
/**
 * 
 * @param {string} id record id
 * @returns record JSON object
 */
export const getRecord = (id) => {
    return get(id)  
}

/**
 * 
 * @returns all record objects
 */
export const getRecords = () => {
    return getAll()
}   

/**
 * 
 * @param {JSON object} data data creating new record
 * @param {fastify Object} reply response carrier
 * @returns news record object or error code on fail
 */
export async function createRecord (data, reply) {
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
export async function updateRecord (request, reply) {
    try {
        return reply.code(200).send(await update(request.params.id, request.params.body))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} id record's id
 * @returns JSON object of removed record or error code
 */
export async function deleteRecord (id) {
    try {
        return remove(id)
    } catch (e) {
        console.log(e)
        return e.code
    }
    
}