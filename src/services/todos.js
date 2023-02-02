import { checkError, client } from './client.js';

export async function getToDos() {
  const response = await client.from('todos').select().order('id');
  return checkError(response);
}

export async function createToDo(description) {
  const response = await client.from('todos').insert([{ description }]).single();
  return checkError(response);
}

export async function toggleComplete({ id, complete }) {
  const response = await client
    .from('todos')
    .update({ complete: !complete })
    .match({ id })
    .single();
  return checkError(response);
}

export async function deleteToDo(id) {
  const response = await client.from('todos').delete().match(id).single();
  return checkError(response);
}
