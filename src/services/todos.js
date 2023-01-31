import { checkError, client } from './client.js';

export async function createToDo(description) {
  const response = await client.from('todos').insert([{ description }]).single();
  return checkError(response);
}
