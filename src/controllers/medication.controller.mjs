/**
 * CHYBÍ IMPLEMENTACE:
 *  - getMedBySubstance(request, reply) : vyhledat dle léčivé látky
 *  - getMedByName(request, reply) : vyhledat dle názvu léku
 * 
 * PROBLÉM:
 *  https://www.api.store/sukl.cz/dokumentace#section/Query-parametry
 *      - nepovedlo se mi použít filter, jinak je vyhledávání totiž byId
 *        a ID je dlouhý string random znaků, podle toho to nejde hledat
 *  
 *  "limit je nastaven na 30 záznamů na stránku"
 *      - musí se nějak vyřešit to stránkování, to nevím jak udělat
 */

import { getAll } from '../services/medication.service.mjs'

/**
 * 
 * @param {fastify Object} reply object that will carry response
 * @returns code 200 and JSON object of all medications, error code otherwise
 */
export async function getAllMeds(reply) {
    try {
        return reply.code(200).send(await getAll())
    }
    catch (e) {
        console.log(e) 
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {string} substance name of the substance needed
 * @param {fastify Object} reply response holder
 * @returns all records matching given substance, on fail error code
 */
export async function getMedBySubstance(substance, reply) {
    try {
        return substance
    }
    catch (e) {
        console.log(e)
        return reply.code(e.code)
    }
}

/**
 * 
 * @param {strin} name name of the medicine
 * @param {fastify Object} reply response
 * @returns record(s) matching the name, else error code
 */
export async function getMedByName(name, reply) {
    try {
        return name
    }
    catch(e) {
        console.log(e)
        return reply.code(e.code)
    }
}