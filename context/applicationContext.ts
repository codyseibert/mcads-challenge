import { createDentalClaim } from '~~/api/createDentalClaim';
import { getDentalClaims } from '~~/api/getDentalClaims';
import { createDentalClaim as mockCreateDentalClaim } from '~~/api/mock/createDentalClaim';
import { getDentalClaims as mockGetDentalClaims } from '~~/api/mock/getDentalClaims';
import { getRuntimeConfig } from '~~/hooks/getRuntimeConfig';

const context = {
  createDentalClaim,
  getDentalClaims,
};

const mockContext: typeof context = {
  createDentalClaim: mockCreateDentalClaim,
  getDentalClaims: mockGetDentalClaims,
};

export function applicationContext() {
  const runtimeConfig = getRuntimeConfig();
  return runtimeConfig.public.useMock ? mockContext : context;
}
