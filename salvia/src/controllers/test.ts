/* 
get /tests/                 get all tests
get /tests/{id}             get {id} test
get /tests/{id}/norms       get all {id} test' norms
get /tests/norms/{norm_id}  get {id} test' {norm_id} norm

post /tests/            create a new test
post /tests/{id}/norms  create  {id} test' norms

patch /tests/{id}/details       update {id} test
patch /tests/norms/{norm_id}    update {id} test' {norm_id} norm

delete /tests/{id}/root         delete {id} test
delete /tests/norms/{norm_id}   delete {id} test' {norm_id} norm


= CREATE test:
    name
    abbreviation
    description 

*/