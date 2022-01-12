import { client, checkError } from './client';

export async function getTeams(query) {
  let request = client.from('teams').select().order('name');

  if (query) {
    request = request.ilike('name', `%${query}%`);
  }

  const resp = await request;

  return checkError(resp);
}

export async function getTeamById(id) {
  const resp = await client.from('teams').select('*').match({ id }).single();
  return checkError(resp);
}

export async function updateTeamById(id, { name, city, state }) {
  const resp = await client.from('teams').update({ name, city, state }).match({ id });
  return checkError(resp);
}

export async function createTeam({ name, city, state }) {
  const resp = await client.from('teams').insert({ name, city, state });
  return checkError(resp);
}

export async function deleteTeamById(id) {
  const resp = await client.from('teams').delete().match({ id });
  return checkError(resp);
}
