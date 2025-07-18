'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white border rounded-lg p-4 shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col h-full">
        <div className="flex-grow">
          <Image src={product.image} alt={product.title} width={200} height={200} className="object-contain mx-auto mb-4 h-48"/>
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 h-12">
            {product.title}
          </h2>
        </div>
        <p className="text-green-600 font-bold text-right mt-2">${product.price}</p>
      </div>
    </Link>
  )
}
