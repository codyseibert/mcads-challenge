import { useMutation } from '@tanstack/vue-query';
import { applicationContext } from '@/api/applicationContext';

export function useCreateDentalClaims() {
  return useMutation({
    mutationKey: ['create-claims'],
    mutationFn: applicationContext().createDentalClaim,
  });
}
