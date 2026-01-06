import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Fixed Size Image */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Image - Fixed Size */}
          <div className="relative w-full lg:w-[600px] h-[600px] rounded-3xl overflow-hidden flex-shrink-0">
            <Image
              src="/second-image.png"
              alt="Hero"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Where
              <br />
              Complexity
              <br />
              Meets <span className="text-white">Clarity</span>
            </h1>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Explore Solutions
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-colors">
                Benefits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
