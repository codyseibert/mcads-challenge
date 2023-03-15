import { createDentalClaim as mockCreateDentalClaim } from '@/api/mock/createDentalClaim';
import { getDentalClaims as mockGetDentalClaims } from '@/api/mock/getDentalClaims';
import { createDentalClaim } from '@/api/createDentalClaim';
import { getDentalClaims } from '@/api/getDentalClaims';

const mockContext = {
  createDentalClaim: mockCreateDentalClaim,
  getDentalClaims: mockGetDentalClaims,
};

const context = {
  createDentalClaim,
  getDentalClaims,
};

export function getContext() {
  return context;
}
