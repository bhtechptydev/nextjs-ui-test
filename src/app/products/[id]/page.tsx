import Image from 'next/image'

interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
  category: string
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product: Product = await res.json()

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain mx-auto"
          />
          <div>
            <h1 className="text-3xl font-bold text-indigo-600 mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-green-600 font-bold text-xl">${product.price}</p>
            <p className="text-sm text-gray-500 mt-2">Categoría: {product.category}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
