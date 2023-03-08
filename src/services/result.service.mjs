import db from '../middleware/db.util.mjs'

/**
 * 
 * @returns all patient records
 */
export async function getAll() {
    return await db.patient.findMany()
}

/**
 * 
 * @param {string} id patient identification
 * @returns specific patient record
 */
export async function get(id) {
    return await db.patient.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

/**
 * 
 * @param {JSON object} data new patient object
 * @returns new patient record
 */
export async function create(data) {
    return await db.patient.create({
        data: data
    })
}

/**
 * 
 * @param {string} id patient identification
 * @param {JSON object} data new data
 * @returns updated patient record
 */
export async function update(id, data) {
    return await db.patient.update({
        where: {
            id: parseInt(id)
        },
        data: data
    })
}

/**
 * 
 * @param {string} id patient identification
 * @returns deleted record
 */
export async function remove(id) {
    return await db.patient.delete({
        where: {
            id: parseInt(id)
        }
    })
}