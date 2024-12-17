import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative">
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:opacity-75"
            sizes="100vw" // Ensures the image takes full width of the container
            priority // Loads the image faster if it’s likely to be seen immediately
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  )
}
