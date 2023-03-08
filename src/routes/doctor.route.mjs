import { createDoctor, getDoctor, getDoctors, updateDoctor, deleteDoctor } from "../controllers/doctor.controller.mjs";

export default async function doctorRouter(app) {
    /**
     * GET  [URL]/[prefix]/     : no params
     */
    app.get('/', () => {
        return getDoctors()
    });

    /**
     * GET  [URL]/[prefix]/{name}   : name || surname || name surname
     */
    app.get('/:name', (request) => {
        return getDoctor(request.params.name);
    })

    /**
     * POST       [URL]/[prefix]/   : no params
     *  body: 
     * {
     *      "name":     "string",
     *      "surname":  "string"
     *      "userId":   int
     * }
     */
    app.post('/', (request, reply) => {
        return createDoctor(request.body, reply);
    })

    /**
     * PUT      [URL]/[prefix]/{id} : id
     *  body:   data, JSON
     */
    app.put('/:id', (request, reply) => {
        return updateDoctor(request, reply);
    })

    /**
     * DELETE   [URL]/[prefix]/{id} : id
     */
    app.delete('/:id', (request) => {
        return deleteDoctor(request.params.id)
    })
}