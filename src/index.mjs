import fastify from 'fastify'
import helmet from '@fastify/helmet'
import cors from '@fastify/cors'

import userRouter from './routes/user.route.mjs'
import patientRouter from './routes/patient.route.mjs'
import doctorRouter from './routes/doctor.route.mjs'
import diagnosisApi from './middleware/diagnosis.api.mjs'
import medicationRouter from './routes/medication.route.mjs'
import normRouter from './routes/norm.route.mjs'
import testRouter from './routes/test.route.mjs'
import partRouter from './routes/part.route.mjs'
import examRouter from './routes/exam.route.mjs'
import resultRouter from './routes/result.route.mjs'
import recordRouter from './routes/record.route.mjs'

const app = fastify()

async function main() {

  /////////////////////   ROUTING   /////////////////////
  app.register(userRouter, { prefix: 'api/user'})
  app.register(patientRouter, { prefix: 'api/patient'})
  app.register(doctorRouter, { prefix: 'api/doctor'})
  app.register(diagnosisApi, { prefix: 'api/diagnosis'})
  app.register(medicationRouter, {prefix: 'api/medication'})
  app.register(normRouter, { prefix: 'api/norm'})
  app.register(testRouter, { prefix: 'api/test'})
  app.register(partRouter, { prefix: 'api/part'})
  app.register(examRouter, { prefix: 'api/exam'})
  app.register(resultRouter, {prefix: 'api/result'})
  app.register(recordRouter, {prefix: 'api/record'})
   
  /////////////////////   HEADERS   /////////////////////
  app.register(helmet)
  app.register(cors)

  try {
    app.listen({ port: process.env.PORT || 3000, host: process.env.HOST ||'localhost'})
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

main()

