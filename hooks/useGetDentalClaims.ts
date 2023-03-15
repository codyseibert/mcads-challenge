import { useQuery } from '@tanstack/vue-query';
import { applicationContext } from '~~/api/applicationContext';

export function useGetDentalClaims() {
  return useQuery({
    queryKey: ['dental-claims'],
    queryFn: applicationContext().getDentalClaims
  });
}
