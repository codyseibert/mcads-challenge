export type TDentalClaim = {
  npi: string;
  timeSubmitted: string;
};

export async function createDentalClaim(npi: string) {
  return fetch('/claims', {
    method: 'POST',
    body: JSON.stringify({
      npi,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}
