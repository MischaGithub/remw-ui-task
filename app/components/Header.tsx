export default function Header() {
  return (
    <header className="max-w-6xl mx-auto mb-8 md:mb-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            WW
          </div>
          <h1 className="ml-3 text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
            We Want Waste
          </h1>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 md:p-8 relative overflow-hidden">
        {/* Neon accent */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

        <h1 className="text-2xl md:text-4xl font-bold text-center mb-3 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
            Choose Your Skip Size
          </span>
        </h1>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Select the perfect skip size for your project. All skips include a
          14-day hire period and free delivery within our service area.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700/50 border border-gray-600 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center mb-3">
              <div className="bg-gradient-to-br from-pink-500 to-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">
                1
              </div>
              <h3 className="font-bold text-lg">Select Size</h3>
            </div>
            <p className="text-sm text-gray-300">
              Choose the skip size that fits your needs
            </p>
          </div>

          <div className="bg-gray-700/50 border border-gray-600 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center mb-3">
              <div className="bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-gray-300 font-bold mr-3">
                2
              </div>
              <h3 className="font-bold text-lg">Schedule Delivery</h3>
            </div>
            <p className="text-sm text-gray-300">
              Pick a convenient delivery date
            </p>
          </div>

          <div className="bg-gray-700/50 border border-gray-600 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center mb-3">
              <div className="bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-gray-300 font-bold mr-3">
                3
              </div>
              <h3 className="font-bold text-lg">Complete Order</h3>
            </div>
            <p className="text-sm text-gray-300">
              Confirm your details and payment
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
