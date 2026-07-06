const accessUrl = "https://drive.google.com/file/d/1Y-7gbGCJWfqFoZRsDtQEN7bxOzC5oYdV/view?usp=sharing";
const salesforceUrl = "https://orgfarm-cbc43e6b79-dev-ed.develop.lightning.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJkZXNrdG9wRGFzaGJvYXJkczpkYXNoYm9hcmQiLCJhdHRyaWJ1dGVzIjp7ImRhc2hib2FyZElkIjoiMDFaZEwwMDAwMEI1MVE5VUFKIiwiZGlzcGxheU1vZGUiOiJlZGl0In0sInN0YXRlIjp7fX0%3D";

export default function Products() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-semibold tracking-widest text-[#8A5A2B] uppercase">What We Build</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#4A1D5E]">Our Products</h1>

      <div className="mt-12 space-y-8">
        <article className="rounded-2xl border border-[#E0CBA8] bg-white/60 p-8">
          <h2 className="text-2xl font-bold text-[#5B2A86]">Microsoft Access</h2>
          <p className="mt-3 text-[#5A4A4A] leading-relaxed">
            Microsoft Access is a relational database management system. Our team builds custom Access databases that centralize records, define clean relationships between tables, and generate the reports a business needs to make decisions. Click below to download a prototype built by our team.
          </p>
          <a href={accessUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block px-6 py-2.5 rounded-lg bg-[#8A5A2B] text-white font-medium hover:bg-[#6F4720] transition-colors">Download Access Prototype</a>
        </article>

        <article className="rounded-2xl border border-[#E0CBA8] bg-white/60 p-8">
          <h2 className="text-2xl font-bold text-[#5B2A86]">Salesforce</h2>
          <p className="mt-3 text-[#5A4A4A] leading-relaxed">
            Salesforce is a cloud-based CRM platform that connects companies with their teams and customers. Our team designs Salesforce applications that replace scattered, manual processes with one centralized system — grouping related records, automating steps, and producing reports on demand. Click below to explore an application built by our team. (Requires a login to our Salesforce org.)
          </p>
          <a href={salesforceUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block px-6 py-2.5 rounded-lg bg-[#5B2A86] text-white font-medium hover:bg-[#4A1D5E] transition-colors">Launch Salesforce App</a>
        </article>
      </div>
    </section>
  );
}