import { checkError, client } from './client.js';

export async function getToDos() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createToDo(description) {
  const response = await client.from('todos').insert([{ description }]).single();
  return checkError(response);
}
