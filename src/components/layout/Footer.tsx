import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  project: [
    { label: "Research", href: "/research" },
    { label: "Library", href: "/library" },
    { label: "Community", href: "/community" },
    { label: "News", href: "/news" },
    { label: "About", href: "/about" },
  ],
  partners: [
    { label: "Rogers Foundation", href: "/about/rogers-foundation-for-person-centred-education" },
    { label: "Narratologies", href: "/about/narratologies" },
    { label: "Üsküdar MEM", href: "/about/uskudar-district-directorate-of-national-education" },
    { label: "CRS Poland", href: "/about/centre-for-systems-solutions" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "GDPR Compliance", href: "/gdpr" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-purple-dark text-white/70 pt-16 pb-8 px-12 rounded-t-[48px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-3">Octopus</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Offering Cross-disciplinary Training for Inclusive Preparation for
            School Exams. An Erasmus+ KA220-SCH partnership.
          </p>
          {/* Social links */}
          <div className="flex gap-3 mt-4">
            {["f", "ig", "in", "▶"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center text-white/70 text-sm hover:bg-green hover:text-purple-dark transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Project links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Project</h4>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.project.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-green transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Partners</h4>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.partners.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-green transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Legal</h4>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-green transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* EU Disclaimer Section */}
      <div className="max-w-[1200px] mx-auto border-t border-white/[0.08] pt-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <Image
            src="/images/eu-funded-white.png"
            alt="Funded by the European Union"
            width={240}
            height={53}
            className="h-14 w-auto shrink-0"
          />
          <p className="text-xs text-white/70/70 leading-relaxed">
            Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the Tempus Public Foundation. Neither the European Union nor the Tempus Public Foundation can be held responsible for them.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto border-t border-white/[0.08] pt-6 flex flex-wrap justify-between items-center gap-4">
        <p className="text-xs text-white/70">© 2025–2028 Octopus Project. All rights reserved.</p>
        <p className="text-xs text-white/70/50">Project No. KA220-SCH-063BB39C</p>
      </div>
    </footer>
  );
}