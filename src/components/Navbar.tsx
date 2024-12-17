'use client'

import Link from 'next/link'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/components/cartStore'
// Assuming CartItem type is defined in cartStore

export default function Navbar() {
  const cartItems = useCartStore((state:any) => state.items) || []

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            ModernShop
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/categories">Categories</Link>
            <Link href="/cart" className="relative">
              <ShoppingBagIcon className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
