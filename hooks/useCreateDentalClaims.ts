import { useMutation } from '@tanstack/vue-query';
import { createDentalClaim } from '~~/api/createDentalClaim';

export function useCreateDentalClaims() {
  return useMutation({
    mutationKey: ['create-claims'],
    mutationFn: createDentalClaim,
  });
}
