import formurlencoded from "form-urlencoded";
async function getUsers() {
    const reply = await fetch(import.meta.env.VITE_DB_URL + "/users", {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        },
    });

    return reply.json();
}

async function getUser(id: number) {
    const reply = await fetch(import.meta.env.VITE_DB_URL + "/users/" + id, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            "Authorization": "Bearer " + import.meta.env.VITE_TOKEN,
        },
    });

    return reply.json();
}

async function createUser(
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role: string
) {
    const u = {
        "username": username,
        "email": email,
        "password": password,
        "first_name": firstName,
        "last_name": lastName,
        "role_id": role
    }

    const reply = await fetch(import.meta.env.VITE_DB_URL + "/users", {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            "Authorization": "Bearer " + import.meta.env.VITE_TOKEN
        },
        body: JSON.stringify(u)
    });

    return await reply.json();
}

async function deleteUser(id: number) {
    const reply = await fetch(import.meta.env.VITE_DB_URL + "/users/" + id, {
        method: "DELETE",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            "Authorization": "Bearer " + import.meta.env.VITE_TOKEN,
        },
    });

    return reply;
}


/**
 * Log in a user with the provided username and password. Set the token in the environment variable.
 * 
 * 
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<void>} - A promise that resolves when the user is logged in successfully.
 */
async function loginUser(username: string, password: string) {
    const reply = await fetch(import.meta.env.VITE_DB_URL + "/auth/token", {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/x-www-form-urlencoded",
        },
        body: formurlencoded({ username: username, password: password }),
    });

    if (reply.ok) {
        import.meta.env.VITE_TOKEN = (await reply.json()).access_token;
        console.log(import.meta.env.VITE_TOKEN);
    } else {
        throw new Error('Login failed');
    }
}

async function authUser(): Promise<Response> {
    const reply = await fetch(import.meta.env.VITE_DB_URL + "/auth/me", {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
            "Authorization": "Bearer " + import.meta.env.VITE_TOKEN,
        },
    });
    return reply;
}

export { authUser, loginUser, deleteUser, createUser, getUser, getUsers };
