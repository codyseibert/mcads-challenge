import { useQuery } from '@tanstack/vue-query';
import { getContext } from '~~/context';

export function useGetDentalClaims() {
  const { api } = getContext();

  return useQuery({
    queryKey: ['dental-claims'],
    queryFn: api.getDentalClaims,
  });
}
