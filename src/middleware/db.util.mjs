/**
 * DATABASE HELPERS AND UTILITIES
 */
import { PrismaClient } from '@prisma/client'
  
const db = new PrismaClient()

/**
 * 
 * @param {JSON object} user user object that needs cleaning up  
 * @param {Array} keys items that need to be removed 
 * @returns clean object
 */
export function exclude(user, keys) {
    for (let key of keys) {
        delete user[key]
    } 
    return user
}

export default db