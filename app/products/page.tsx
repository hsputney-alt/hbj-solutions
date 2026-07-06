const accessUrl = "https://drive.google.com/file/d/1Y-7gbGCJWfqFoZRsDtQEN7bxOzC5oYdV/view?usp=sharing";
const salesforceUrl = "https://orgfarm-cbc43e6b79-dev-ed.develop.lightning.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJkZXNrdG9wRGFzaGJvYXJkczpkYXNoYm9hcmQiLCJhdHRyaWJ1dGVzIjp7ImRhc2hib2FyZElkIjoiMDFaZEwwMDAwMEI1MVE5VUFKIiwiZGlzcGxheU1vZGUiOiJlZGl0In0sInN0YXRlIjp7fX0%3D";

export default function Products() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-semibold tracking-widest text-[#8A5A2B] uppercase">What We Build</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#4A1D5E]">Our Products</h1>
      <p className="mt-4 max-w-3xl text-[#5A4A4A] leading-relaxed">
        Both prototypes below were built for the U.S. Air Force JAG Corps&apos; Office of Airman&apos;s Counsel (OAC), replacing a paper-based system with centralized tools for managing attorneys, clients, and cases.
      </p>

      <div className="mt-12 space-y-8">
        <article className="rounded-2xl border border-[#E0CBA8] bg-white/60 p-8">
          <h2 className="text-2xl font-bold text-[#5B2A86]">Microsoft Access</h2>
          <p className="mt-3 text-[#5A4A4A] leading-relaxed">
            Our Access database gives the OAC a single place to track attorneys, clients, and case assignments. Its core feature is conflict resolution: staff can instantly check whether a client is already represented before assigning an attorney, eliminating the manual attorney-to-attorney deconfliction they rely on today. It also generates client contact and attorney case-volume reports — filterable by attorney, client, case status, date range, and reporting year — so leadership can monitor communication, balance workloads, and evaluate performance at a glance.
          </p>
          <a href={accessUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block px-6 py-2.5 rounded-lg bg-[#8A5A2B] text-white font-medium hover:bg-[#6F4720] transition-colors">Download Access Prototype</a>
        </article>

        <article className="rounded-2xl border border-[#E0CBA8] bg-white/60 p-8">
          <h2 className="text-2xl font-bold text-[#5B2A86]">Salesforce</h2>
          <p className="mt-3 text-[#5A4A4A] leading-relaxed">
            Our Salesforce app brings the same case-management concepts to the cloud. Attorney, client, and case records are linked in one system so staff can run deconfliction checks and see representation status without digging through paper files. Built-in reports and a workload dashboard surface each attorney&apos;s active caseload and office-wide performance in real time, giving management the centralized oversight the OAC currently lacks. Click below to explore the app. (Requires a login to our Salesforce org.)
          </p>
          <a href={salesforceUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block px-6 py-2.5 rounded-lg bg-[#5B2A86] text-white font-medium hover:bg-[#4A1D5E] transition-colors">Launch Salesforce App</a>
        </article>
      </div>
    </section>
  );
}