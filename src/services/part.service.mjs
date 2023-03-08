import db from '../middleware/db.util.mjs'

/**
 * 
 * @returns all part records
 */
export async function getAll() {
    return await db.part.findMany()
}

/**
 * 
 * @param {string} id part identification
 * @returns specific part record
 */
export async function get(id) {
    return await db.part.findUnique({
        where: {
            id: parseInt(id)
        }
    })
}

/**
 * 
 * @param {JSON object} data new part object
 * @returns new part record
 */
export async function create(data) {
    return await db.part.create({
        data: data
    })
}

/**
 * 
 * @param {string} id part identification
 * @param {JSON object} data new data
 * @returns updated part record
 */
export async function update(id, data) {
    return await db.part.update({
        where: {
            id: parseInt(id)
        },
        data: data
    })
}

/**
 * 
 * @param {string} id part identification
 * @returns deleted record
 */
export async function remove(id) {
    return await db.part.delete({
        where: {
            id: parseInt(id)
        }
    })
}

export async function checkParentPart(partId, testId, subtestId) {

}