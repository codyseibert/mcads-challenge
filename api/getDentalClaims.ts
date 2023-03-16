import { TDentalClaim } from './createDentalClaim';

export async function getDentalClaims() {
  return fetch('/claims').then((response) => response.json()) as Promise<
    TDentalClaim[]
  >;
}
