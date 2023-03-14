export type TDentalClaim = {
  npi: string;
  timeSubmitted: string;
};

export async function getDentalClaims() {
  return [
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
}
