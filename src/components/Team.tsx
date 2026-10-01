const people = [
  "NYK Group",
  "AET",
  "Stolt-Nielsen",
  "Matson",
  "P&O Nedlloyd",
  "Kuehne + Nagel",
  "HPH Trust",
  "MOL",
  "ZIM",
  "Maersk Line",
  "ABP",
  "Adani",
  "DP World",
]

export default function Team() {
  const list = [...people, ...people]

  return (
    <section className="overflow-hidden border-y border-[#C9A84C]/10 bg-[#0B0B14] py-14 sm:py-20">
      <div className="mb-10 px-4 text-center sm:mb-12 sm:px-8">
        <div className="mb-3 text-[10px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase">
          iLogBC — Industry Network
        </div>
        <h2
          className="text-3xl text-[#F0E8D5] md:text-4xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Team's Experience Includes
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#8A8070]">
          Our team brings hands-on experience from leading organisations across
          shipping, logistics, infrastructure and supply chain, shaped by years
          of working on real business challenges.
        </p>
      </div>
      <div className="flex w-max animate-marquee">
        {list.map((person, index) => (
          <div
            key={`${person}-${index}`}
            className="flex shrink-0 items-center"
          >
            <span
              className="px-5 text-lg text-[#F0E8D5]/45 transition-colors hover:text-[#C9A84C] sm:px-10 sm:text-xl md:text-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {person}
            </span>
            <span className="text-sm text-[#C9A84C]/25">◆</span>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-4xl px-8 text-center text-[10px] leading-relaxed font-mono text-[#8A8070]/60 uppercase">
        *Experience disclosure: Company names and logos are shown solely to
        identify organisations with which members of our team have professional
        experience. All trademarks and logos remain the property of their
        respective owners. iLogBC is not affiliated with, sponsored by, or
        endorsed by these organisations unless expressly stated.
      </p>
    </section>
  )
}
