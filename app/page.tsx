import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm font-semibold tracking-widest text-[#8A5A2B] uppercase">Student-Led Consulting</p>
        <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight text-[#4A1D5E] leading-[1.1]">
          Spreading smart solutions,<br />one layer at a time.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[#5A4A4A]">
          HB&amp;J Solutions builds practical database and CRM tools that help organizations replace manual busywork with systems their teams actually want to use.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/products" className="px-7 py-3 rounded-lg bg-[#5B2A86] text-white font-medium hover:bg-[#4A1D5E] transition-colors">See Our Work</Link>
          <Link href="/team" className="px-7 py-3 rounded-lg border border-[#C2A47A] text-[#8A5A2B] font-medium hover:bg-[#F3E9D6] transition-colors">Meet the Team</Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-5">
        {[
          { t: "Microsoft Access", d: "Custom relational databases that centralize records, relationships, and reporting." },
          { t: "Salesforce", d: "Cloud CRM applications that connect teams, customers, and data in one place." },
          { t: "Built to Last", d: "Clean, documented solutions designed around how your team really works." },
        ].map((c) => (
          <div key={c.t} className="rounded-xl border border-[#E0CBA8] bg-white/60 p-6">
            <h3 className="font-bold text-[#4A1D5E]">{c.t}</h3>
            <p className="mt-2 text-sm text-[#5A4A4A] leading-relaxed">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#F3E9D6] border-y border-[#E0CBA8]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-sm font-semibold tracking-widest text-[#8A5A2B] uppercase text-center">How We Work</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#4A1D5E] text-center">Our Process</h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Discover", d: "We sit down with your team to map the current workflow, find the bottlenecks, and define exactly what success looks like." },
              { n: "02", t: "Build", d: "We design and build the solution in Access or Salesforce, structuring data and automating the manual steps that slow you down." },
              { n: "03", t: "Deliver", d: "We hand off a clean, documented system your team can actually use, with the reports and tools you need from day one." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-[#E0CBA8] bg-white p-6">
                <span className="text-3xl font-extrabold text-[#C2A47A]">{s.n}</span>
                <h3 className="mt-3 font-bold text-[#4A1D5E] text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-[#5A4A4A] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}