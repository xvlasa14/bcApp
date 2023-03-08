import { getAll, get, create, update, remove } from '../services/exam.service.mjs'
/**
 * 
 * @param {string} id exam id
 * @returns exam JSON object
 */
export const getExam = (id) => {
    return get(id)  
}

/**
 * 
 * @returns all exam objects
 */
export const getExams = () => {
    return getAll()
}   

/**
 * 
 * @param {JSON object} data data creating new exam
 * @param {fastify Object} reply response carrier
 * @returns news exam object or error code on fail
 */
export async function createExam (data, reply) {
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
export async function updateExam (request, reply) {
    try {
        return reply.code(200).send(await update(request.params.id, request.params.body))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} id exam's id
 * @returns JSON object of removed exam or error code
 */
export async function deleteExam (id) {
    try {
        return remove(id)
    } catch (e) {
        console.log(e)
        return e.code
    }
    
}