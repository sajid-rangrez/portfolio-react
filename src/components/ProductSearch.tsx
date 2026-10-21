import { useEffect, useState } from "react";
import useDebouncedValue from "./../hooks/useDebouncedValue";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductResponse {
  products: Product[];
}

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearchTerm = useDebouncedValue(searchTerm, 400);

  useEffect(() => {
    const query = debouncedSearchTerm.trim();

    if (!query) {
      setProducts([]);
      setError(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function searchProducts() {
      setLoading(true);
      setError(null);

      try {
        const url =
          `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`;

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data: ProductResponse = await response.json();
        setProducts(data.products);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void searchProducts();

    return () => {
      controller.abort();
    };
  }, [debouncedSearchTerm]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-3xl font-bold text-white">
        Product Search
      </h2>

      <input
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search products..."
        className="mt-5 w-full max-w-xl rounded-xl border border-slate-700 bg-slate-900 p-3 text-white"
      />

      {loading && (
        <p className="mt-4 text-slate-400">Searching...</p>
      )}

      {error && (
        <p role="alert" className="mt-4 text-red-400">
          {error}
        </p>
      )}

      {!loading && !error && searchTerm.trim() && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <h3 className="font-semibold text-cyan-400">
                {product.title}
              </h3>
              <p className="mt-2 text-slate-300">
                ${product.price}
              </p>
            </article>
          ))}

          {products.length === 0 && (
            <p className="text-slate-400">No products found.</p>
          )}
        </div>
      )}
    </section>
  );
}

export default ProductSearch;