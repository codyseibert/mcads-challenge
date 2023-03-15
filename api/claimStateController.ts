import {ref} from 'vue'
import { DentalClaim } from './dentalClaim';

const claims = ref<DentalClaim[]>([]);

const defaultDentalClaims = [
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
] as DentalClaim[];

async function loadDentalClaims() {
  // This should load claims from the backend
  return defaultDentalClaims
}

// https://www.vuemastery.com/blog/coding-better-composables-5-of-5/
export function getDentalClaims() {
  const execute = async () => {
    claims.value = await loadDentalClaims();
  }

  execute();

  return claims;
}

export async function addDentalClaim(npi: string) {
  claims.value.push(new DentalClaim(npi))
}
