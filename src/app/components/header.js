// Header
// Navlinks
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  // Display navbar links
  return (
    // write code for navbar

    <header className="bg-slate-900 p-4 flex justify-center items-center">
      <nav>
        <Link
          href="/"
          className={pathname === "/" ? "mr-4 font-bold" : "mr-4 text-blue-500"}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about" ? "mr-4 font-bold" : "mr-4 text-blue-500"
          }
        >
          About
        </Link>
        <Link
          href="/users-client"
          className={
            pathname === "/users-client"
              ? "mr-4 font-bold"
              : "mr-4 text-blue-500"
          }
        >
          Users Client
        </Link>
        <Link
          href="/users-server"
          className={
            pathname === "/users-server"
              ? "mr-4 font-bold"
              : "mr-4 text-blue-500"
          }
        >
          Users Server
        </Link>
        <Link
          href="/mock-users"
          className={
            pathname === "/mock-users" ? "mr-4 font-bold" : "mr-4 text-blue-500"
          }
        >
          Mock Users
        </Link>
        <Link
          href="/products"
          className={
            pathname === "/products" ? "mr-4 font-bold" : "mr-4 text-blue-500"
          }
        >
          Products
        </Link>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
