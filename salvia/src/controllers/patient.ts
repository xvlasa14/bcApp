/* 
get     /patients/      get all patients
post    /patients/      create new patient
get     /patients/{id}  get {id} patient
patch   /patients/{id}  update {id} patient
delete /patients/{id}   delete {id} patient

get     /patients/{id}/rehabilitations          get all {id} patients' PT
post    /patients/{id}/rehabilitations          create new {id} patients' PT
get     /patients/rehabilitations/{rehab_id}    get {id} patients' PT {rehab_id}
patch   /patients/rehabilitations/{rehab_id}    update {id} patients' PT {rehab_id}
delete  /patients/rehabilitations/{rehab_id}    delete {id} patients' PT {rehab_id}

get     /patients/{id}/diagnoses                    get all {id} patient' diagnoses
post    /patients/{id}/diagnoses                    create/add {id} patient' diagnosis
get     /patients/{id}/diagnoses/{diagnosis_id}     get {id} patient' diagnosis {diagnosis_id}
delete  /patients/{id}/diagnoses/{diagnosis_id}     delete {id} patient' diagnosis {diagnosis_id}

get     /patients/{id}/examinations             get all {id} patient' examinations
post    /patients/{id}/examinations            create {id} patient' examinations 
get     /patients/{id}/examinations/{exam_id}   get {id} patient' exam {exam_id}
patch   /patients/examinations/{exam_id}      update {id} patient' examination {exam_id}
delete  /patients/examinations/{exam_id}     delete {id} patient' examination {exam_id}
*/