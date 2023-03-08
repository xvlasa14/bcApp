import { getAllMeds, getMedBySubstance, getMedByName } from "./../controllers/medication.controller.mjs"


export default async function medicationRouter(app) {
    /**
     * GET  [URL]/[prefix]/     : no params
     */
    app.get('/', (reply) => {
        return getAllMeds(reply);
    })

    /**
     * GET  [URL]/[prefix]/substance/{name}     : name
     */
    app.get('/substance/:name', (request, reply) => {
        return getMedBySubstance(request.params.name, reply)
    })

    /**
     * GET  [URL]/[prefix]/{name}       : name
     */
    app.get('/:name', (request, reply) => {
        return getMedByName(request.params.name, reply)
    })
}