'use client'

import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import SearchBar from "../components/SearchBar"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))}, [])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">
          Productos
        </h1>

        <div className="max-w-xl mx-auto mb-8">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map(product => (<ProductCard key={product.id} product={product} />))}
        </div>
      </div>
    </div>
  )
}
