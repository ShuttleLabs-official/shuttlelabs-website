import Image from "next/image"

const services = [
  {
    title: "Automation",
    description: "AI-powered workflows integrated into your apps for streamlined operations.",
  },
  {
    title: "Web Dev",
    description: "AI-powered workflows integrated into your apps for streamlined operations.",
  },
  {
    title: "Automation",
    description: "AI-powered workflows integrated into your apps for streamlined operations.",
  },
  {
    title: "Automation",
    description: "AI-powered workflows integrated into your apps for streamlined operations.",
  },
  {
    title: "Automation",
    description: "AI-powered workflows integrated into your apps for streamlined operations.",
  },
  {
    title: "Automation",
    description: "AI-powered workflows integrated into your apps for streamlined operations.",
  },
]

export function ServicesGrid() {
  return (
    <section className="px-4 py-12">
      <h2 className="text-2xl font-semibold text-white text-center mb-8">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-5 flex flex-col items-center text-center"
          >
            <h3 className="text-white font-medium mb-3">{service.title}</h3>
            <div className="w-24 h-24 relative mb-3">
              <Image src="/grayscale-illustration-robot-automation-gear-docum.jpg" alt={service.title} fill className="object-contain grayscale" />
            </div>
            <p className="text-[#888] text-xs mb-4 leading-relaxed">{service.description}</p>
            <button className="bg-[#8B5CF6] text-white text-xs font-medium px-4 py-1.5 rounded-md hover:bg-[#7C3AED] transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}