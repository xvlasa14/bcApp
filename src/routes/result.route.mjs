import { createResult, getResult, getResults, updateResult, deleteResult } from "../controllers/Result.controller.mjs";

export default async function ResultRouter(app) {
    /**
     * GET  [URL]/[prefix]/     : no params
     */
    app.get('/', () => {
        return getResults()
    });

    /**
     * GET  [URL]/[prefix]/{id} : id
     */
    app.get('/:id', (request, reply) => {
        return getResult(request.params.id);
    })

    /**
     * POST  [URL]/[prefix]/    : no params
     *  body: 
     * {
     *  "birthday":     "YYYY-MM-DD",
     *  "sex":          "string [male | m] || [female | f]"
     *  "education":    "string [primary | high school | university]"
     *  "doctorId":     int
     * }
     */
    app.post('/', (request, reply) => {
        return createResult(request.body, reply);
    })

    /**
     * PUT  [URL]/[prefix]/{id} : id
     *  body: JSON object of data
     */
    app.put('/:id', (request, reply) => {
        return updateResult(request, reply);
    })

    /**
     * DELETE   [URL]/[prefix]/{id} : id
     */
    app.delete('/:id', (request) => {
        return deleteResult(request.params.id)
    })
}