import { createPatient, getPatient, getPatients, updatePatient, deletePatient } from "../controllers/patient.controller.mjs";

export default async function patientRouter(app) {
    /**
     * GET  [URL]/[prefix]/     : no params
     */
    app.get('/', () => {
        return getPatients()
    });

    /**
     * GET  [URL]/[prefix]/{id} : id
     */
    app.get('/:id', (request, reply) => {
        return getPatient(request.params.id);
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
        return createPatient(request.body, reply);
    })

    /**
     * PUT  [URL]/[prefix]/{id} : id
     *  body: JSON object of data
     */
    app.put('/:id', (request, reply) => {
        return updatePatient(request, reply);
    })

    /**
     * DELETE   [URL]/[prefix]/{id} : id
     */
    app.delete('/:id', (request) => {
        return deletePatient(request.params.id)
    })
}