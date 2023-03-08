import db from '../middleware/db.util.mjs'

/**
 * 
 * @returns all exam records
 */
export async function getAll() {
    return await db.exam.findMany()
}

/**
 * 
 * @param {string} id exam identification
 * @returns specific exam record
 */
export async function get(id) {
    return await db.exam.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

/**
 * 
 * @param {JSON object} data new exam object
 * @returns new exam record
 */
export async function create(data) {
    return await db.exam.create({
        data: data
    })
}

/**
 * 
 * @param {string} id exam identification
 * @param {JSON object} data new data
 * @returns updated exam record
 */
export async function update(id, data) {
    return await db.exam.update({
        where: {
            id: parseInt(id)
        },
        data: data
    })
}

/**
 * 
 * @param {string} id exam identification
 * @returns deleted record
 */
export async function remove(id) {
    return await db.exam.delete({
        where: {
            id: parseInt(id)
        }
    })
}