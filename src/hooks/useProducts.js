import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const useProducts = () => {
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/product").then((res) => res.json())
  );

  return [isLoading, error, products, refetch];
};

export default useProducts;
