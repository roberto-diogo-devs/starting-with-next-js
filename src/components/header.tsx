import Link from "next/link";

export function Header() {
  return (
    <nav className="w-full bg-gray-900 text-white p-4 flex gap-6">
      <Link href="/" className="hover:text-gray-400">
        Home
      </Link>
      <Link href="/contatos" className="hover:text-gray-400">
        Contatos
      </Link>
      <Link href="/dashboard" className="hover:text-gray-400">
        Dashboard
      </Link>
    </nav>
  )
}