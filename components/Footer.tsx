import Link from "next/link";
import Image from "next/image";

const footerNav = [
  { href: "/concept", label: "Concept" },
  { href: "/service", label: "Service" },
  { href: "/web3", label: "Web3/RWA" },
  { href: "/works", label: "Works" },
  { href: "/insights", label: "Insights" },
  { href: "/news", label: "News" },
  { href: "/company", label: "Company" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src="/logo/pursuit_logo_horizontal_color.svg"
              alt="Pursuit inc."
              width={140}
              height={47}
              className="h-8 w-auto"
            />
            <p className="mt-3 text-sm text-neutral-600">価値を追求し、守る。</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-neutral-600 sm:grid-cols-3">
            {footerNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-neutral-900">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 text-xs text-neutral-500">
          © {new Date().getFullYear()} Pursuit inc.
        </p>
      </div>
    </footer>
  );
}
