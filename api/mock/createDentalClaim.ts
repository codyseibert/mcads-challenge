import { claims } from './getDentalClaims';

export type TDentalClaim = {
  npi: string;
  timeSubmitted: string;
};

export async function createDentalClaim(npi: string) {
  const claim: TDentalClaim = {
    npi,
    timeSubmitted: new Date().toISOString(),
  };
  claims.push(claim);
  return claim;
}
