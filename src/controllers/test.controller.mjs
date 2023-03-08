import { getAll, get, create, update, remove } from '../services/test.service.mjs'
/**
 * 
 * @param {string} id test id
 * @returns test JSON object
 */
export const getTest = (id) => {
    return get(id)  
}

/**
 * 
 * @returns all test objects
 */
export const getTests = () => {
    return getAll()
}   

/**
 * 
 * @param {JSON object} data data creating new test
 * @param {fastify Object} reply response carrier
 * @returns news test object or error code on fail
 */
export async function createTest (data, reply) {
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
export async function updateTest (request, reply) {
    try {
        return reply.code(200).send(await update(request.params.id, request.params.body))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} id test's id
 * @returns JSON object of removed test or error code
 */
export async function deleteTest (id) {
    try {
        return remove(id)
    } catch (e) {
        console.log(e)
        return e.code
    }
    
}