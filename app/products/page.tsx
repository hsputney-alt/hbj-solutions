const accessUrl = "#"; // TODO: replace with Microsoft Access prototype link
const salesforceUrl = "#"; // TODO: replace with Salesforce app URL

export default function Products() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-semibold tracking-widest text-[#8A5A2B] uppercase">What We Build</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#4A1D5E]">Our Products</h1>

      <div className="mt-12 space-y-8">
        <article className="rounded-2xl border border-[#E0CBA8] bg-white/60 p-8">
          <h2 className="text-2xl font-bold text-[#5B2A86]">Microsoft Access</h2>
          <p className="mt-3 text-[#5A4A4A] leading-relaxed">
            Microsoft Access is a relational database management system. Our team builds custom Access databases that centralize records, define clean relationships between tables, and generate the reports a business needs to make decisions. Click below to view a prototype built by our team. (Must be logged in to your buffalo.edu account.)
          </p>
          <a href={accessUrl} className="mt-5 inline-block px-6 py-2.5 rounded-lg bg-[#8A5A2B] text-white font-medium hover:bg-[#6F4720] transition-colors">View Access Prototype</a>
        </article>

        <article className="rounded-2xl border border-[#E0CBA8] bg-white/60 p-8">
          <h2 className="text-2xl font-bold text-[#5B2A86]">Salesforce</h2>
          <p className="mt-3 text-[#5A4A4A] leading-relaxed">
            Salesforce is a cloud-based CRM platform that connects companies with their teams and customers. Our team designs Salesforce applications that replace scattered, manual processes with one centralized system — grouping related records, automating steps, and producing reports on demand. Click below to explore an application built by our team.
          </p>
          <a href={salesforceUrl} className="mt-5 inline-block px-6 py-2.5 rounded-lg bg-[#5B2A86] text-white font-medium hover:bg-[#4A1D5E] transition-colors">Launch Salesforce App</a>
        </article>
      </div>
    </section>
  );
}