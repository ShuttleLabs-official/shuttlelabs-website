import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function ContactSection() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-4xl mx-auto bg-[#0f0f0f] border border-[#8B5CF6] rounded-2xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
              We're here to assist you & address any questions
            </h2>
            <p className="text-[#888] text-xs mb-8 leading-relaxed">
              Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling
              sleeper.
            </p>

            <div className="grid grid-cols-3 gap-4 text-xs mb-8">
              <div>
                <h4 className="text-white font-medium mb-1">Call Center</h4>
                <p className="text-[#888]">800 100 975 20 34</p>
                <p className="text-[#888]">+(123) 1800-234-5678</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Our Location</h4>
                <p className="text-[#888]">USA, New York - 1060</p>
                <p className="text-[#888]">Str. First Avenue 1</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <p className="text-[#888]">agency@mail.co</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="#" className="text-[#888] hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-[#888] hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-[#888] hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-[#888] hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Get in Touch</h3>
            <p className="text-[#888] text-xs mb-6">
              Define your goals and identify areas where AI can add value to your business
            </p>

            <form className="space-y-4">
              <div>
                <label className="text-[#888] text-xs block mb-1">Full name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-[#2a2a2a] text-white text-sm py-2 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                />
              </div>
              <div>
                <label className="text-[#888] text-xs block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-[#2a2a2a] text-white text-sm py-2 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                />
              </div>
              <div>
                <label className="text-[#888] text-xs block mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-[#2a2a2a] text-white text-sm py-2 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                />
              </div>
              <div>
                <label className="text-[#888] text-xs block mb-1">Message</label>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border-b border-[#2a2a2a] text-white text-sm py-2 focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="border border-[#8B5CF6] text-white text-sm px-6 py-2 rounded-md hover:bg-[#8B5CF6] transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}