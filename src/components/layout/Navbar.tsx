"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "Research", href: "/research" },
  {
    label: "Library",
    href: "/library",
    children: [
      { label: "The Octopus E-book", href: "/library/ebook" },
      { label: "Handbooks & Tutorials", href: "/library/handbooks" },
      { label: "Success Stories", href: "/library/success-stories" },
    ],
  },
  { label: "Community", href: "/community" },
  { label: "News", href: "/news" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Rogers Foundation", href: "/about/rogers-foundation-for-person-centred-education" },
      { label: "Narratologies P.C.", href: "/about/narratologies" },
      { label: "Üsküdar MEM", href: "/about/uskudar-district-directorate-of-national-education" },
      { label: "Centre for Systems Solutions", href: "/about/centre-for-systems-solutions" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  const isActive = (href: string) => {
    if (href === "/library") return pathname.startsWith("/library");
    if (href === "/about") return pathname.startsWith("/about");
    return pathname === href;
  };
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 100) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape; manage focus on open/close
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    firstMobileLinkRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1280px] bg-off-white rounded-full px-5 py-2.5 flex items-center justify-between z-[1000] shadow-[0_4px_30px_rgba(68,59,94,0.1)] transition-all duration-300 ${visible ? "top-4 opacity-100" : "-top-20 opacity-0"}`}>
      <Link href="/" className="flex items-center shrink-0">
        <Image
          src="/images/logo.png"
          alt="OCTOPUS"
          width={160}
          height={38}
          className="h-[38px] w-auto"
          priority
        />
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-0.5 list-none">
        {navItems.map((item) => (
          <li key={item.href} className="relative group">
            <Link
              href={item.href}
              className={`flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full transition-all ${
                isActive(item.href)
                  ? "bg-green text-purple-dark font-semibold"
                  : "text-text-mid hover:bg-cream hover:text-purple-dark"
              }`}
            >
              {item.label}
              {item.children && (
                <span className="text-[0.6rem] opacity-50 ml-0.5">▾</span>
              )}
            </Link>
            {item.children && (
              <div className="absolute top-[calc(100%+8px)] left-0 min-w-[220px] bg-off-white rounded-2xl shadow-[0_12px_40px_rgba(68,59,94,0.12)] p-2 opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-text-mid hover:bg-cream hover:text-purple-dark transition-all"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <span className="hidden md:block text-sm text-text-light font-medium px-3">
        
      </span>

      {/* Mobile hamburger */}
      <button
        ref={hamburgerRef}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
      >
        <span aria-hidden="true" className="block w-[22px] h-[2px] bg-purple-dark mb-[5px] rounded-sm" />
        <span aria-hidden="true" className="block w-[22px] h-[2px] bg-purple-dark mb-[5px] rounded-sm" />
        <span aria-hidden="true" className="block w-[22px] h-[2px] bg-purple-dark rounded-sm" />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="absolute top-full left-0 right-0 mt-2 bg-off-white rounded-2xl shadow-xl p-4 md:hidden">
          {navItems.map((item, itemIndex) => (
            <div key={item.href}>
              <Link
                ref={itemIndex === 0 ? firstMobileLinkRef : undefined}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-green text-purple-dark"
                    : "text-text-mid"
                }`}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-8 py-2 text-sm text-text-light"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
