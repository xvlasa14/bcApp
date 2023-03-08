import { createRecord, getRecord, getRecords, updateRecord, deleteRecord } from "../controllers/record.controller.mjs";

export default async function recordRecordr(app) {
    /**
     * GET  [URL]/[prefix]/     : no params
     */
    app.get('/', () => {
        return getRecords()
    });

    /**
     * GET  [URL]/[prefix]/{id} : id
     */
    app.get('/:id', (request, reply) => {
        return getRecord(request.params.id);
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
        return createRecord(request.body, reply);
    })

    /**
     * PUT  [URL]/[prefix]/{id} : id
     *  body: JSON object of data
     */
    app.put('/:id', (request, reply) => {
        return updateRecord(request, reply);
    })

    /**
     * DELETE   [URL]/[prefix]/{id} : id
     */
    app.delete('/:id', (request) => {
        return deleteRecord(request.params.id)
    })
}