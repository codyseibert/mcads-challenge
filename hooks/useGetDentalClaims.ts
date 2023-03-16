import { useQuery } from '@tanstack/vue-query';
import { applicationContext } from '~~/context/applicationContext';

export function useGetDentalClaims() {
  return useQuery({
    queryKey: ['dental-claims'],
    queryFn: applicationContext().getDentalClaims,
  });
}
