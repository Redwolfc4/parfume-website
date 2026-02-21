import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getProducts, getProductById, getFeaturedProducts } from '@/lib/contentful';
import type { Product } from '@/types';

export function useProducts(): UseQueryResult<Product[], Error> {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });
}

export function useProduct(id: string): UseQueryResult<Product | null, Error> {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFeaturedProducts(): UseQueryResult<Product[], Error> {
  return useQuery({
    queryKey: ['featured-products'],
    queryFn: getFeaturedProducts,
    staleTime: 1000 * 60 * 5,
  });
}
