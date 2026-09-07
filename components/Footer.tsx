import Link from "next/link";
import Image from "next/image";

const footerNav = [
  { path: "/concept", label: "Concept" },
  { path: "/service", label: "Service" },
  { path: "/sovereignty", label: "Sovereignty" },
  { path: "/web3", label: "Web3/RWA" },
  { path: "/works", label: "Works" },
  { path: "/insights", label: "Insights" },
  { path: "/news", label: "News" },
  { path: "/company", label: "Company" },
  { path: "/privacy", label: "Privacy" },
  { path: "/contact", label: "Contact" },
];

export default function Footer({ locale = "ja" }: { locale?: "ja" | "en" }) {
  const prefix = locale === "en" ? "/en" : "";
  const tagline =
    locale === "en" ? "Pursue value. Protect value." : "価値を追求し、守る。";

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
            <p className="mt-3 text-sm text-neutral-600">{tagline}</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-neutral-600 sm:grid-cols-3">
            {footerNav.map((item) => (
              <Link key={item.path} href={`${prefix}${item.path}`} className="hover:text-neutral-900">
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
