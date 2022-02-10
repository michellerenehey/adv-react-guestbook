import { checkError, client } from './client.js';

export async function getSubmissions() {
  const response = await client.from('guestbook').select('*');
  return checkError(response);
}

export async function addSubmission(name, message) {
  const response = await client.from('guestbook').insert({ name, message });
  return checkError(response);
}
