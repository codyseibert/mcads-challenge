import { useQuery } from '@tanstack/vue-query';
import { getDentalClaims } from '~~/api/getDentalClaims';

export function useGetDentalClaims() {
  return useQuery({
    queryKey: ['dental-claims'],
    queryFn: getDentalClaims,
  });
}
