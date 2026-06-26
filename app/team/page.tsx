const team = [
  { name: "Jonathan Lin", email: "jlin566@buffalo.edu", photo: "/team/jon.jpg" },
  { name: "Benn Neurock", email: "beneuroc@buffalo.edu", photo: "/team/benn.jpg" },
  { name: "Holden Putney", email: "holdenpu@buffalo.edu", photo: "/team/holden.jpg" },
];

export default function Team() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-semibold tracking-widest text-[#8A5A2B] uppercase">Get in Touch</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#4A1D5E]">Our Team</h1>
      <p className="mt-4 max-w-2xl text-[#5A4A4A]">Three University at Buffalo students turning classroom skills into real consulting deliverables.</p>
      <div className="mt-10 grid sm:grid-cols-3 gap-5">
        {team.map((m) => (
          <div key={m.email} className="rounded-xl border border-[#E0CBA8] bg-[#FBF6EC] p-6 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.photo} alt={m.name} className="mx-auto w-32 h-32 rounded-full object-cover border-4 border-[#E9DCF0]" />
            <h3 className="mt-4 font-bold text-[#2B1838]">{m.name}</h3>
            <a href={`mailto:${m.email}`} className="mt-1 inline-block text-sm text-[#7B3FA0] hover:underline break-all">{m.email}</a>
          </div>
        ))}
      </div>
    </section>
  );
}