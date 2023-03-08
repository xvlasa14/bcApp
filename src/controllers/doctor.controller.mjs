import { getAll, get, create, update, remove } from '../services/doctor.service.mjs'
/**
 * 
 * @param {string} name doctor name
 * @returns doctor JSON object
 */
export const getDoctor = (name) => {
    return get(name)  
}

/**
 * 
 * @returns all doctor objects
 */
export const getDoctors = () => {
    return getAll()
}   

/**
 * 
 * @param {JSON object} data data creating new doctor
 * @param {fastify Object} reply response carrier
 * @returns news doctor object or error code on fail
 */
export async function createDoctor (data, reply) {
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
export async function updateDoctor (request, reply) {
    try {
        return reply.code(200).send(await update(request.params.id, request.params.body))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} id doctor's id
 * @returns JSON object of removed doctor or error code
 */
export async function deleteDoctor (id) {
    try {
        return remove(id)
    } catch (e) {
        console.log(e)
        return e.code
    }
    
}