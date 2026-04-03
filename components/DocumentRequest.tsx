const documents = [
  { title: "Technical Overview", desc: "Architecture, integration model, and API documentation." },
  { title: "Security Overview", desc: "Data protection controls, encryption, access management, and environment architecture." },
  { title: "Pilot Scope Document", desc: "Shadow pilot structure, timeline, data requirements, and evaluation criteria." },
  { title: "Sample Decision Report", desc: "Example of Alstro-generated decision artifacts, audit records, and comparison outputs." },
];

export default function DocumentRequest() {
  return (
    <section id="documents" className="py-20 md:py-28 border-t border-border" aria-labelledby="docs-heading">
      <div className="container-main">
        <p className="section-label reveal">Documentation</p>
        <h2 id="docs-heading" className="reveal max-w-[480px] mb-10">
          Request detailed documentation.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-[640px]">
          {documents.map((doc, i) => (
            <a
              key={i}
              href="#contact"
              className="reveal block p-5 border border-border rounded-lg hover:border-text transition-colors duration-150 group"
            >
              <h3 className="text-[15px] font-semibold mb-1 group-hover:text-text">{doc.title}</h3>
              <p className="text-[13px] text-text-3 leading-relaxed">{doc.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
