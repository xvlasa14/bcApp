import { getAll, get, create, update, remove } from '../services/patient.service.mjs'

/**
 * 
 * @param {string} id patient identification
 * @returns JSON object of patient information
 */
export const getPatient = (id) => {
    return get(id);    
}

/**
 * 
 * @returns all patients in JSON object
 */
export const getPatients = () => {
    return getAll();
}   

/**
 * 
 * @param {JSON Object} patient data of new patient 
 * @param {fastify Object} reply object carrying response
 * @returns 200 and new created patient, else error code
 */
export async function createPatient (patient, reply) {
    try {
        return reply.code(200).send(await create(patient))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} id patient identification
 * @param {string} data updated patient information 
 * @param {fastify Object} reply response
 * @returns updated JSON object on success, else error code
 */
export async function updatePatient (id, data, reply) {
    try {
        return reply.code(200).send(await update(id, data))
    } catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} id patient identification 
 * @returns deleted record or error
 */
export async function deletePatient (id) {
    return remove(id);
}