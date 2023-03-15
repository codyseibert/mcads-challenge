import { TDentalClaim } from './createDentalClaim';

export const claims = [
  {
    npi: '123427482938',
    timeSubmitted: '2011-10-05T14:48:00.000Z',
  },
  {
    npi: '123427482938',
    timeSubmitted: '2011-10-05T14:48:00.000Z',
  },
  {
    npi: '123427482938',
    timeSubmitted: '2011-10-05T14:48:00.000Z',
  },
] as TDentalClaim[];

export async function getDentalClaims() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return claims;
}
