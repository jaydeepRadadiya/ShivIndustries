import React, { useState, useMemo } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/data/products"; // Import product data

const ProductCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");

  const filteredAndSortedProducts = useMemo(() => {
    let currentProducts = [...products];

    // Filter by search term
    if (searchTerm) {
      currentProducts = currentProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortOrder !== "none") {
      currentProducts.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (sortOrder === "asc") {
          return titleA.localeCompare(titleB);
        } else {
          return titleB.localeCompare(titleA);
        }
      });
    }

    return currentProducts;
  }, [searchTerm, sortOrder]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-24 pt-32"> {/* Added pt-32 for header spacing */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">Our Product Catalog</h1>
        <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Explore our full range of packaging solutions. Use the search and sort options to find exactly what you need.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          <Input
            type="text"
            placeholder="Search products..."
            className="max-w-md w-full md:w-1/2 lg:w-1/3 p-2 border rounded-md shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select onValueChange={(value: "asc" | "desc" | "none") => setSortOrder(value)} defaultValue={sortOrder}>
            <SelectTrigger className="w-full md:w-[180px] p-2 border rounded-md shadow-sm">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Sort</SelectItem>
              <SelectItem value="asc">Name (A-Z)</SelectItem>
              <SelectItem value="desc">Name (Z-A)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAndSortedProducts.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                benefit={product.benefit}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl text-muted-foreground py-10">
            No products found matching your criteria.
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductCatalog;