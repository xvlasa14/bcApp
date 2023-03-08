import data from './../../data/data.mjs'

/**
 * 
 * @param {string} keyword any word that could be in the title
 * @returns object containing all possible matches
 */
function searchByKeyword(keyword) {
    return data.filter((data) => { return data.Nazev.includes(keyword) } )
}

/**
 * 
 * @param {string} code diagnosis code 
 * @returns object(s) matching given code
 */
function searchByCode(code) {
    return data.filter( (data) => { return data.Kod == code})
}

/////////////////////////////  DIAGNOSIS ROUTER /////////////////////////////
/**
 * NUTNÉ DOKONČIT
 *  - vracení všech diagnóz, asi přidat stránkování
 */

export default async function diagnosisApi(app) {
    /**
     * GET  [URL]/[prefix]/     :no params
     */
    app.get('/', () => {
        return 'all diagnoses'
    })

    /**
     * GET  [URL]/[prefix]/search/{keyword} : diagnosis keyword
     */
    app.get('/search/:keyword', (request) => {
         return searchByKeyword(request.params.keyword)
    })

    /**
     * GET [URL]/[prefix]/find/{id} : diagnosis ID [A-Z0-9]{3,5}
     */
    app.get('/find/:id', (request, reply) => {
        if(request.params.id.match(/[A-Z0-9]{3,5}/g) && request.params.id.length <= 5) {
            return searchByCode(request.params.id)
        }
        else {
            return reply.code(500).send('bad code format')
        }
        
    })
}