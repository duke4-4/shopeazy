// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            🛍️ ShopEazy
          </Link>

          <nav className="flex gap-6 items-center">
            <Link
              href="/"
              className="hover:text-blue-200 transition font-medium"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="hover:text-blue-200 transition font-medium"
            >
              Cart
            </Link>
            <Link
              href="/register"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="hover:text-blue-200 transition font-medium"
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
