import { createDentalClaim } from '~~/api/createDentalClaim';
import { getDentalClaims } from '~~/api/getDentalClaims';

const context = {
  createDentalClaim,
  getDentalClaims  
};

export function applicationContext() {
  return context;
}
