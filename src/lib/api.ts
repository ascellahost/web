export async function getImage(i: string): Promise<any> {
  return await fetch(`https://api.ascella.host/v2/ascella/view/${i}/stats`)
    .then((r) => r.json())
    .catch(() => ({}));
}
export async function getDomains(): Promise<any> {
  return await fetch(`https://api.ascella.host/v2/ascella/domains`)
    .then((r) => r.json())
    .catch(() => ({}));
}
export async function getReviews(): Promise<any> {
  return await fetch(`https://api.ascella.host/v2/ascella/reviews.json`)
    .then((r) => r.json())
    .catch(() => []);
}
export async function getStats(): Promise<any> {
  return await fetch(`https://api.ascella.host/v2/ascella/stats.json`)
    .then((r) => r.json())
    .catch(() => ({}));
}
export async function getPaste(i: string): Promise<any> {
  try {
    const r = await fetch(`https://api.ascella.host/v2/paste/${i}`);
    return await r.json();
  } catch {
    return undefined;
  }
}
