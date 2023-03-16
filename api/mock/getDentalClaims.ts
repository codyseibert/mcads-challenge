import { TDentalClaim } from '../mock/createDentalClaim';

export const claims = [
  {
    npi: '1234567813',
    timeSubmitted: '2011-10-05T14:48:00.000Z',
  },
  {
    npi: '1234567814',
    timeSubmitted: '2011-10-05T14:48:00.000Z',
  },
  {
    npi: '1234567815',
    timeSubmitted: '2011-10-05T14:48:00.000Z',
  },
] as TDentalClaim[];

export async function getDentalClaims() {
  return claims;
}
