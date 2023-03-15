import { useMutation } from '@tanstack/vue-query';
import { getContext } from '@/context';

export function useCreateDentalClaims() {
  const { api } = getContext();

  return useMutation({
    mutationKey: ['create-claims'],
    mutationFn: api.createDentalClaim,
  });
}
