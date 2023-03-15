import { createDentalClaim } from '@/api/createDentalClaim';
import { getDentalClaims } from '@/api/getDentalClaims';
import { createDentalClaim as mockCreateDentalClaim } from '@/api/mock/createDentalClaim';
import { getDentalClaims as mockGetDentalClaims } from '@/api/mock/getDentalClaims';

const context = {
  createDentalClaim,
  getDentalClaims,
};

const mockContext = {
  createDentalClaim: mockCreateDentalClaim,
  getDentalClaims: mockGetDentalClaims,
};

export function applicationContext() {
  const runtimeConfig = useRuntimeConfig();
  return runtimeConfig.public.useMock ? mockContext : context;
}
