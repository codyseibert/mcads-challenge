import { claims } from './getDentalClaims';

export type TDentalClaim = {
  npi: string;
  timeSubmitted: string;
};

export async function createDentalClaim(npi: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const claim: TDentalClaim = {
    npi,
    timeSubmitted: new Date().toISOString(),
  };
  claims.push(claim);
  return claim;
}
