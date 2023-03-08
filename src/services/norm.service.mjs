import db from '../middleware/db.util.mjs'

/**
 * 
 * @returns all norm records
 */
export async function getAll() {
    return await db.norm.findMany()
}

/**
 * 
 * @param {string} id norm identification
 * @returns specific norm record
 */
export async function get(id) {
    return await db.norm.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

/**
 * 
 * @param {JSON object} data new norm object
 * @returns new norm record
 */
export async function create(data) {
    return await db.norm.create({
        data: data
    })
}

/**
 * 
 * @param {string} id norm identification
 * @param {JSON object} data new data
 * @returns updated norm record
 */
export async function update(id, data) {
    return await db.norm.update({
        where: {
            id: parseInt(id)
        },
        data: data
    })
}

/**
 * 
 * @param {string} id norm identification
 * @returns deleted record
 */
export async function remove(id) {
    return await db.norm.delete({
        where: {
            id: parseInt(id)
        }
    })
}