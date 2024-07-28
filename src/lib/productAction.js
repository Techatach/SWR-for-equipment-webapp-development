import useSWR from "swr";

export function useProductBySKU(sku) {
  async function fetcher(url) {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Error cannot get data: products from API");
    }
    return res.json();
  }
  const { data, isLoading, mutate, error } = useSWR(
    `/api/products/${sku}`,
    fetcher
  );

  return {
    data,
    isLoading,
    mutate,
    error,
  };
}

export function useAllProducts() {
  async function fetcher(url) {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Error cannot get data:products from API");
    }
    return res.json();
  }
  const { data, isLoading, mutate, error } = useSWR(
    `/api/products`,
    fetcher
  );
  return {
    data,
    isLoading,
    mutate,
    error,
  };
}
