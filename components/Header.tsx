"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  currentPage?: "home" | "products" | "about" | "contact";
}

export default function Header({ currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2 border-gray-200 py-6 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="RHE Electronic - Ronghe Electronic"
              width={240}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className={`${
                currentPage === "home"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`${
                currentPage === "products"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`${
                currentPage === "about"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${
                currentPage === "contact"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={`${
                  currentPage === "home"
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-600 font-medium"
                } py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`${
                  currentPage === "products"
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-600 font-medium"
                } py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className={`${
                  currentPage === "about"
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-600 font-medium"
                } py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`${
                  currentPage === "contact"
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-600 font-medium"
                } py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
