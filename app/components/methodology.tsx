const steps = [
  {
    number: 1,
    title: "Discovery and Analysis",
    description: "We start by understanding your business needs, challenges, and goals through comprehensive research.",
    align: "left",
  },
  {
    number: 2,
    title: "Strategy & Planning",
    description:
      "Our team develops a tailored AI strategy with clear milestones, technical architecture, and success metrics.",
    align: "right",
  },
  {
    number: 3,
    title: "Discovery and Analysis",
    description: "We start by understanding your business needs, challenges, and goals through comprehensive research.",
    align: "left",
  },
  {
    number: 4,
    title: "Strategy & Planning",
    description:
      "Our team develops a tailored AI strategy with clear milestones, technical architecture, and success metrics.",
    align: "right",
  },
  {
    number: 5,
    title: "Discovery and Analysis",
    description: "We start by understanding your business needs, challenges, and goals through comprehensive research.",
    align: "left",
  },
]

export function Methodology() {
  return (
    <section className="px-4 py-12">
      <h2 className="text-2xl font-semibold text-white text-center mb-10">
        Our <span className="text-[#8B5CF6]">Methodology</span>
      </h2>
      <div className="max-w-md mx-auto space-y-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`flex items-stretch gap-3 ${step.align === "right" ? "flex-row-reverse" : ""}`}
          >
            {/* Number box */}
            <div className="flex-shrink-0 w-16 h-auto bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl flex items-center justify-center">
              <span className="text-3xl font-light text-[#888]">{step.number}</span>
            </div>
            {/* Content box */}
            <div className="flex-1 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-4">
              <h3 className="text-white text-sm font-medium mb-1">{step.title}</h3>
              <p className="text-[#888] text-xs leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
