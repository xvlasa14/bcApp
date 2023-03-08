import db from '../middleware/db.util.mjs'

/**
 * 
 * @returns all test records
 */
export async function getAll() {
    return await db.test.findMany()
}

/**
 * 
 * @param {string} id test identification
 * @returns specific test record
 */
export async function get(id) {
    return await db.test.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

/**
 * 
 * @param {JSON object} data new test object
 * @returns new test record
 */
export async function create(data) {
    return await db.test.create({
        data: data
    })
}

/**
 * 
 * @param {string} id test identification
 * @param {JSON object} data new data
 * @returns updated test record
 */
export async function update(id, data) {
    return await db.test.update({
        where: {
            id: parseInt(id)
        },
        data: data
    })
}

/**
 * 
 * @param {string} id test identification
 * @returns deleted record
 */
export async function remove(id) {
    return await db.test.delete({
        where: {
            id: parseInt(id)
        }
    })
}