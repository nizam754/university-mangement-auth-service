import express, { Application, Request, Response } from 'express'
import cors from 'cors'
// import usersService from './app/modules/users/users.service'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors)

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users/', usersRouter)

//Testing
app.get('/', async (req: Request, res: Response) => {
  // await usersService.createUser({
  //   id: '998',
  //   password: '1234',
  //   role: 'student',
  // })
  res.send('Working Successfully')
})

export default app
