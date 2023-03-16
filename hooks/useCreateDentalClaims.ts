import { useMutation } from '@tanstack/vue-query';
import { applicationContext } from '~~/context/applicationContext';

export function useCreateDentalClaims() {
  return useMutation({
    mutationKey: ['create-claims'],
    mutationFn: applicationContext().createDentalClaim,
  });
}
