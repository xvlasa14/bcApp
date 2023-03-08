import db from '../middleware/db.util.mjs'

/**
 * 
 * @returns JSON object of all doctors in database
 */
export async function getAll() {
    return await db.doctor.findMany();
}

/**
 * 
 * @param {string} name name, surname or both 
 * @returns JSON object of doctor(s) matching given name
 */
export async function get(name) {
    let wholeName = name.split(' ');
    return await db.doctor.findMany({
        where: {
            OR: [
                { name: { equals: name } },
                { surname: { equals: name } },
                { name: { equals: wholeName[0] } },
                { surname: { equals: wholeName[1] } }
            ]
        }
    })
}

/**
 * 
 * @param {JSON object} data object containing all items needed to create new doctor
 * @returns JSON object of new created doctor, error if fail 
  */
export async function create(data) {
    return await db.doctor.create({
        data: data
    })
}

/**
 * 
 * @param {string} id doctor identification 
 * @param {*} data data needed for update
 * @returns updated doctor JSON object on success, else error
 */
export async function update(id, data) {
    return await db.doctor.update({
        where: {
            id: parseInt(id)
        },
        data: data
    })
}

/**
 * 
 * @param {string} id doctor identification
 * @returns on success returns record that was deleted, else error
 */
export async function remove(id) {
    return await db.doctor.delete({
        where: {
            id: parseInt(id)
        }
    })
}