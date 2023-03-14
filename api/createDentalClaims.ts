import { TDentalClaim } from './getDentalClaims';

export async function createDentalClaims(npi: string) {
  return {
    npi,
    timeSubmitted: new Date().toISOString(),
  } as TDentalClaim;
}
