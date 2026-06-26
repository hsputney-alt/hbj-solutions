"use client";

import { useState } from "react";

const team = [
  {
    name: "Jonathan Lin",
    title: "SVP of Covers",
    email: "jlin566@buffalo.edu",
    photo: "/team/jon.jpg",
    bio: "Jonathan is a U.S. citizen who grew up in China, bringing an international perspective to the team. Outside of class he stays active with fitness, basketball, and video games. He has gained early professional experience through a summer internship and is pursuing a career in management information systems.",
  },
  {
    name: "Benn Neurock",
    title: "SVP of Prototypes",
    email: "beneuroc@buffalo.edu",
    photo: "/team/benn.jpg",
    bio: "Benn is a Texas-raised, nontraditional student finishing his undergraduate degree before launching a career in Human Resources. He spent 10.5 years as a counterintelligence officer in the U.S. Air Force and is about to begin an HR internship at Lactalis. He loves the outdoors — golfing, snowboarding, hiking, and camping.",
  },
  {
    name: "Holden Putney",
    title: "SVP of Website Development",
    email: "holdenpu@buffalo.edu",
    photo: "/team/holden.jpg",
    bio: "Holden just completed his first year at UB and plans to graduate in Spring 2027. He has worked at Wegmans for three years, rising from Front End Associate to Coordinator to Store Coordinator, and now serves as a Store Operations Management Intern over Produce. Outside school he enjoys friends, music, and basketball.",
  },
];

export default function Team() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm font-semibold tracking-widest text-[#8A5A2B] uppercase">Get in Touch</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#4A1D5E]">Our Team</h1>
      <p className="mt-4 max-w-2xl text-[#5A4A4A]">Three University at Buffalo students turning classroom skills into real consulting deliverables. Click any card to read more.</p>

      <div className="mt-10 grid sm:grid-cols-3 gap-5 items-start">
        {team.map((m, i) => {
          const open = openIndex === i;
          return (
            <button
              key={m.email}
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full text-left rounded-xl border border-[#E0CBA8] bg-[#FBF6EC] p-6 transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#7B3FA0]"
            >
              <div className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.photo} alt={m.name} className="mx-auto w-32 h-32 rounded-full object-cover border-4 border-[#E9DCF0]" />
                <h3 className="mt-4 font-bold text-[#2B1838]">{m.name}</h3>
                <p className="text-sm font-semibold text-[#8A5A2B]">{m.title}</p>
                
                  href={`mailto:${m.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="mt-1 inline-block text-sm text-[#7B3FA0] hover:underline break-all"
                >
                  {m.email}
                </a>
              </div>

              {open && (
                <p className="mt-4 pt-4 border-t border-[#E0CBA8] text-sm text-[#5A4A4A] leading-relaxed">
                  {m.bio}
                </p>
              )}

              <p className="mt-4 text-center text-xs font-medium text-[#8A5A2B]">
                {open ? "▲ Show less" : "▼ Read bio"}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}