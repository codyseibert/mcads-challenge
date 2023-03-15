export async function getDentalClaims() {
  return fetch('/claims').then((response) => response.json());
}
