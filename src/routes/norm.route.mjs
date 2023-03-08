import { createNorm, getNorm, getNorms, updateNorm, deleteNorm } from "../controllers/norm.controller.mjs";

export default async function normRouter(app) {
    /**
     * GET  [URL]/[prefix]/     : no params
     */
    app.get('/', () => {
        return getNorms()
    });

    /**
     * GET  [URL]/[prefix]/{id} : id
     */
    app.get('/:id', (request, reply) => {
        return getNorm(request.params.id);
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
        return createNorm(request.body, reply);
    })

    /**
     * PUT  [URL]/[prefix]/{id} : id
     *  body: JSON object of data
     */
    app.put('/:id', (request, reply) => {
        return updateNorm(request, reply);
    })

    /**
     * DELETE   [URL]/[prefix]/{id} : id
     */
    app.delete('/:id', (request) => {
        return deleteNorm(request.params.id)
    })
}