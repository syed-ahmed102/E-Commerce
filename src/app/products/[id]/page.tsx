'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { products } from '@/components/products'
import Image from 'next/image'
import { useCartStore } from '@/components/cartStore'


export default function ProductPage() {
  const params = useParams()
  const { id } = params
  const product = products.find(p => p.id === id)
  const [quantity, setQuantity] = useState(1)
  const addToCart = useCartStore(state => state.addToCart)

  if (!product) return <div>Product not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          <div className="flex items-center gap-4 mb-4">
            <button
              className="px-4 py-2 border rounded"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-4 py-2 border rounded"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
