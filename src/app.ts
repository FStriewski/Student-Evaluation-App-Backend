import 'reflect-metadata'
import {createKoaServer, Action} from 'routing-controllers'
import TeacherController from './teacher/controller'
import EvaluationController from './evaluation/controller'
import BatchController from './batch/controller'

export default createKoaServer({
  controllers: [
    TeacherController,
    EvaluationController,
    BatchController,
   
   ]
  // authorizationChecker: (action: Action) => {
  //   const header: string =
  //   action.request.headers.authorization
  //   if (header && header.startsWith('Bearer')) {
  //     const [ , token ] = header.split(' ')
  //     return !!(token && verify(token))
  //   }
  //   return false
  // }
})
