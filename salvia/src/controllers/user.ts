/* 
get     /users/         get all users
get     /users/{id}     get {id} user

delete  /users/{id}     delete {id} user

post    /users/         create new user

patch   /users/{id}/details     update {id} user details

patch   /users/{id}/role        change {id} user role           [ ADMIN ONLY ENDPOINT ]
patch   /users/{id}/activation  activate/deactivate {id} user   [ ADMIN ONLY ENDPOINT ] 

patch   /users/{id}/password    update {id} user password
put     /users/{id}/reset-password              reset {id} user password
post    /users/{email}/request-password-reset   password reset request

---------------------------------------------------------------------------------------
= CREATE:
    email
    firstName
    lastName
    username
    role        (default value: 'doctor')
    password

= PASSWORD RESET:     (access only from email link following password reset request)
    newPassword
    token   (client token)

= UPDATE:
    email
    firstName
    lastName

    password
---------------------------------------------------------------------------------------
*/