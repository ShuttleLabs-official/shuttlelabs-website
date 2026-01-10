import { ServicesHero } from "@/app/components/services-hero"
import { ServicesGrid } from "@/app/components/services-grid"
import { Methodology } from "@/app/components/methodology"
import { ContactSection } from "@/app/components/contact-section"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <ServicesHero />
      <ServicesGrid />
      <Methodology />
      <ContactSection />
    </main>
  )
}