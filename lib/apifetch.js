export default async function apifetchFunction(url) {
  const characterResponse = await fetch(url);
  const body = await characterResponse.json();
  const characters = body.results;
  return characters;
}
