import { Request, Response } from "express";
import createUser from './services/CreateUser'

// string, number, boolean, object, Array
// Interface

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'caio.robert@live.com',
    password: '123456',
    techs: [
      'NodeJS', 
      'ReactJS', 
      'ReactNative',
      { title: 'Javascript', experience: 100 },
      { title: 'HTML', experience: 99 },
      { title: 'CSS', experience: 50 },
    ],
  });

  return response.json({ message: 'Hello World' });
}