export default function CallToAction() {
  return (
    <section className="relative overflow-hidden border-t border-[#C9A84C]/10 bg-[#10101C] px-4 py-16 text-center sm:px-6 md:px-14 md:py-24">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-8">
        <div className="text-[10px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase">
          Let's Build Your Next Growth Story
        </div>
        <h2
          className="mt-5 mb-6 text-3xl leading-tight text-[#F0E8D5] sm:text-4xl md:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to Discuss Your
          <br />
          <em className="text-[#C9A84C]">Strategic Advisory</em> Requirements?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#8A8070]">
          Whether you are expanding into India, raising capital, restructuring
          your supply chain, investing in logistics infrastructure, or seeking
          specialist commercial advisory, our experts work alongside your team
          to develop practical strategies that create measurable business value.
        </p>
        <button
          type="button"
          className="w-full max-w-xs bg-[#C9A84C] px-6 py-4 text-[9px] font-bold font-mono tracking-[0.2em] text-[#0B0B14] uppercase hover:bg-[#E8C96A] sm:w-auto sm:px-10 sm:tracking-[0.28em]"
        >
          Request a Consultation
        </button>
      </div>
    </section>
  )
}
