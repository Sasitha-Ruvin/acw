import React, { useState, useRef } from 'react';
import ProductCard from '../Cards/ProductCard';
import { products, Product } from '../../Data/products';
import ProductPopup from '../PopUps/ProductPopUp';
import { motion } from 'framer-motion';

const ITEMS_PER_PAGE = 12;

export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // State for selected product
  const gridRef = useRef<HTMLDivElement>(null); // Create a ref for the product grid

  const handleClick = (page: number) => {
    setCurrentPage(page);
    // Scroll to the top of the product grid
    if (gridRef.current) {
      window.scrollTo({
        top: gridRef.current.offsetTop,
        behavior: 'smooth', // smooth scrolling effect
      });
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product); // Open popup with selected product
  };

  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto py-12">
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map((product, index) => (
          <motion.div
            key={product.id}
            onClick={() => handleProductClick(product)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard key={product.id} product={product} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i + 1)}
            className={`px-4 py-2 mx-1 border ${
              i + 1 === currentPage ? 'bg-purple-700 text-white' : 'bg-white text-purple-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Product Popup */}
      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
