import { client } from './client.js';

export function getUser() {
  return client.auth.currentUser;
}

//pass in email, password and type(sign-in/signup - from params)
export async function authUser(email, password, type) {
  let response;
  if (type === 'sign-up') {
    response = await client.auth.signUp({ email, password });
  } else {
    response = await client.auth.signIn({ email, password });
  }
  if (response.error) {
    throw response.error;
  }
  return response.user;
}
//authUser is called in Auth.js

export async function signOut() {
  await client.auth.signOut();
}
