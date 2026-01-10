import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative w-full">
      {/* Abstract wave background */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image src="/abstract-3d-dark-wavy-flowing-metallic-shapes-gray.jpg" alt="Abstract wave background" fill className="object-cover" priority />
        {/* Overlay for text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            What we <span className="text-[#8B5CF6]">offer</span>
          </h1>
        </div>
      </div>
    </section>
  )
}