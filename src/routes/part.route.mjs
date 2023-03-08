import { createPart, getPart, getParts, updatePart, deletePart } from "../controllers/part.controller.mjs";

export default async function partRouter(app) {
    /**
     * GET  [URL]/[prefix]/     : no params
     */
    app.get('/', () => {
        return getParts()
    });

    /**
     * GET  [URL]/[prefix]/{id} : id
     */
    app.get('/:id', (request, reply) => {
        return getPart(request.params.id);
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
        return createPart(request.body, reply);
    })

    /**
     * PUT  [URL]/[prefix]/{id} : id
     *  body: JSON object of data
     */
    app.put('/:id', (request, reply) => {
        return updatePart(request, reply);
    })

    /**
     * DELETE   [URL]/[prefix]/{id} : id
     */
    app.delete('/:id', (request) => {
        return deletePart(request.params.id)
    })
}