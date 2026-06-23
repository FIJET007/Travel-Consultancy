"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", page: "home" },
  { href: "/about", label: "About", page: "about" },
  { href: "/services", label: "Services", page: "services" },
  { href: "/study-abroad", label: "Study Abroad", page: "study" },
  { href: "/travel-packages", label: "Travel Packages", page: "packages" },
  { href: "/contact", label: "Contact", page: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const toggleNav = () => setOpen((v) => !v);
  const closeNav = () => setOpen(false);

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="GlobeTrek Solutions home">
        <img src="/globetrek-logo.jpeg" alt="GlobeTrek Solutions logo" />
        <span>
          <strong>GlobeTrek Solutions</strong>
          <small>Travels, tours and more</small>
        </span>
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`site-nav${open ? " open" : ""}`} aria-label="Main navigation">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "active" : ""}
            aria-current={isActive(item.href) ? "page" : undefined}
            onClick={closeNav}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}