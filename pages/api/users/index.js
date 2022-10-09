import {getAllUsers, createUser} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const data = await getAllUsers();
    return response.status(200).json({message: 'This is a GET Method', data});
  } else if (request.method === 'POST') {
    const jsonParse = JSON.parse(request.body);
    const newData = await createUser(
      jsonParse.name,
      jsonParse.gender,
      jsonParse.email,
    );
    console.log(newData);
    return response.status(200).json(newData);
  }
  response.status(403).json({message: 'Error: request method not allowed.'});
}
