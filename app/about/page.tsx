export default function About() {
  const blocks = [
    { t: "Our Story", d: "HB&J Solutions was formed at the University at Buffalo, where our founders met in MGS351 and discovered a shared interest in turning messy business processes into clean, working systems." },
    { t: "Our Vision", d: "To create, inspire, and innovate for organizations that want to modernize how they manage information — without losing the human side of how their teams actually work." },
    { t: "Our Technology", d: "We build with Microsoft Access and Salesforce, pairing relational database design with cloud CRM tools to deliver solutions that are powerful and easy to adopt." },
  ];
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-semibold tracking-widest text-[#8A5A2B] uppercase">Who We Are</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#4A1D5E]">About HB&amp;J Solutions</h1>
      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        {blocks.map((b) => (
          <div key={b.t} className="rounded-xl border border-[#E0CBA8] bg-white/60 p-6">
            <h2 className="font-bold text-[#5B2A86] text-lg">{b.t}</h2>
            <p className="mt-3 text-sm text-[#5A4A4A] leading-relaxed">{b.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-[#E0CBA8] bg-[#E9DCF0]/50 p-8">
        <h2 className="text-xl font-bold text-[#4A1D5E]">The name?</h2>
        <p className="mt-3 text-[#5A4A4A] leading-relaxed">
          HB&amp;J is a nod to PB&amp;J — our team's initials layered together like a classic sandwich. Two solid slices of bread, something smooth in the middle, and a result that just works.
        </p>
      </div>
    </section>
  );
}