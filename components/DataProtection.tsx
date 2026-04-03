const items = [
  { title: "Customer-approved data scope", desc: "Only data explicitly approved by the institution is processed. Data scope is defined and documented before pilot initiation." },
  { title: "Encryption in transit and at rest", desc: "All data is encrypted using industry-standard protocols during transmission and while stored." },
  { title: "Access controls", desc: "Role-based access controls govern internal access to customer data and system configurations." },
  { title: "Environment separation", desc: "Customer environments are logically separated. Pilot and production environments are isolated." },
  { title: "Retention controls", desc: "Data retention periods are configurable and documented. Deletion procedures are available on request." },
  { title: "Documentation available", desc: "Security architecture documentation, data flow diagrams, and control descriptions are available to qualified institutions under NDA." },
];

export default function DataProtection() {
  return (
    <section id="data-protection" className="py-20 md:py-28 border-t border-border" aria-labelledby="data-heading">
      <div className="container-main">
        <p className="section-label reveal">Data protection</p>
        <h2 id="data-heading" className="reveal max-w-[480px] mb-12">
          Built for institutional data requirements.
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-[720px]">
          {items.map((item, i) => (
            <div key={i} className="reveal">
              <h3 className="text-[15px] font-semibold mb-1">{item.title}</h3>
              <p className="text-[14px] text-text-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
