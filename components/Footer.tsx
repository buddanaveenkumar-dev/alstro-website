import { Shield } from "lucide-react";

const productLinks = [
  { label: "Adverse Action AI", href: "#product" },
  { label: "Fair Lending AI", href: "#product" },
  { label: "Model Governance AI", href: "#product" },
  { label: "Income Intelligence AI", href: "#product" },
];

const companyLinks = [
  { label: "About", href: "#investors" },
  { label: "Investors", href: "#investors" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-heading text-xl text-text-1 mb-2">Alstro</div>
            <p className="text-sm text-text-3 mb-4">
              Compliance infrastructure for credit decisions.
            </p>
            <p className="text-xs text-text-3">
              &copy; {new Date().getFullYear()} Alstro AI Inc.
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs font-mono text-text-3 uppercase tracking-widest mb-4">
              Product
            </div>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-2 hover:text-text-1 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-mono text-text-3 uppercase tracking-widest mb-4">
              Company
            </div>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-2 hover:text-text-1 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-3">
          <span className="flex items-center gap-1.5">
            <Shield size={12} />
            SOC 2 Type II (in progress)
          </span>
          <span>Built for ECOA · FCRA · SR 11-7</span>
        </div>
      </div>
    </footer>
  );
}
