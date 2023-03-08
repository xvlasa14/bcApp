import db from '../middleware/db.util.mjs'

/**
 * 
 * @returns all record records
 */
export async function getAll() {
    return await db.record.findMany()
}

/**
 * 
 * @param {string} id record identification
 * @returns specific record record
 */
export async function get(id) {
    return await db.record.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

/**
 * 
 * @param {JSON object} data new record object
 * @returns new record record
 */
export async function create(data) {
    return await db.record.create({
        data: data
    })
}

/**
 * 
 * @param {string} id record identification
 * @param {JSON object} data new data
 * @returns updated record record
 */
export async function update(id, data) {
    return await db.record.update({
        where: {
            id: parseInt(id)
        },
        data: data
    })
}

/**
 * 
 * @param {string} id record identification
 * @returns deleted record
 */
export async function remove(id) {
    return await db.record.delete({
        where: {
            id: parseInt(id)
        }
    })
}