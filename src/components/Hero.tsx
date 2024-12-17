export default function Hero() {
    return (
      <div className="relative bg-gray-900 h-[500px]">
        <div className="absolute inset-0">
          <div className="h-full w-full object-cover bg-gradient-to-r from-purple-800 to-indigo-900" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to ModernShop
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300">
              Discover our collection of premium products at amazing prices.
            </p>
            <div className="mt-10">
              <button className="rounded-md bg-white px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  