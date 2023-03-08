import { createUser, getUser, getUsers, updateUser, deleteUser } from "../controllers/user.controller.mjs";

export default async function userRouter(app) {
    /**
     * GET  [URL]/[prefix]/     : no params
     */
    app.get('/', () => {
        return getUsers()
    });

    /** 
     * GET  [URL]/[prefix]/{id} : id
     */
    app.get('/:id', (request) => {
        return getUser(request.params.id)
    })

    /**
     * POST [URL]/[prefix]/     : no params
     *  body:
     * {
     *  "login":    "string",
     *  "password": "string"
     * }
     */
    app.post('/', (request, reply) => {
        return createUser(request, reply)
    })

    /**
     * PUT  [URL]/[prefix]/{id} : id
     *  body:
     * {
     *  update data LOGIN || PASSWORD only
     * }
     */
    app.put('/:id', (request, reply) => {
        return updateUser(request.body, reply)
    })

    /**
     * DELETE   [URL]/[prefix]/{id} : id
     */
    app.delete('/:id', (request) => {
        return deleteUser(request.params.id)
    })
}