import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Products - Ronghe Electronic | Data Cables, Wireless Chargers & Wall Chargers",
  description:
    "Browse our complete catalog of USB data cables, wireless chargers, and wall chargers. 180+ products including Qi2 certified chargers, USB-C cables, and fast charging adapters.",
};

export default function ProductsPage() {
  const dataCables = products.filter((p) => p.category === "data-cables");
  const wirelessChargers = products.filter(
    (p) => p.category === "wireless-chargers"
  );
  const wallChargers = products.filter((p) => p.category === "wall-chargers");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link href="/products" className="text-blue-600 font-bold">
                Products
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Our Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover our complete range of charging solutions
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#data-cables"
              className="bg-white px-6 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition font-semibold shadow-sm"
            >
              Data Cables ({dataCables.length})
            </a>
            <a
              href="#wireless-chargers"
              className="bg-white px-6 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition font-semibold shadow-sm"
            >
              Wireless Chargers ({wirelessChargers.length})
            </a>
            <a
              href="#wall-chargers"
              className="bg-white px-6 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition font-semibold shadow-sm"
            >
              Wall Chargers ({wallChargers.length})
            </a>
          </div>
        </div>
      </section>

      {/* Data Cables */}
      <section id="data-cables" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Data Cables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dataCables.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition"
              >
                {product.image && (
                  <div className="mb-4 relative h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">
                  {product.id}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">Material:</span>{" "}
                    {product.material}
                  </p>
                  <p>
                    <span className="font-semibold">Function:</span>{" "}
                    {product.function}
                  </p>
                  <p>
                    <span className="font-semibold">Max Power:</span>{" "}
                    {product.maxPower}
                  </p>
                  {product.colors && product.colors.length > 0 && (
                    <div>
                      <span className="font-semibold">Colors:</span>
                      <div className="flex gap-1 mt-1 flex-wrap">
                        {product.colors.map((color, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wireless Chargers */}
      <section id="wireless-chargers" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">
            Wireless Chargers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wirelessChargers.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">
                  {product.id}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">Material:</span>{" "}
                    {product.material}
                  </p>
                  <p>
                    <span className="font-semibold">Function:</span>{" "}
                    {product.function}
                  </p>
                  <p>
                    <span className="font-semibold">Max Power:</span>{" "}
                    {product.maxPower}
                  </p>
                  {product.colors && product.colors.length > 0 && (
                    <div>
                      <span className="font-semibold">Colors:</span>
                      <div className="flex gap-1 mt-1 flex-wrap">
                        {product.colors.map((color, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wall Chargers */}
      <section id="wall-chargers" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">
            Wall Chargers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wallChargers.map((product, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">
                  {product.id}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">Material:</span>{" "}
                    {product.material}
                  </p>
                  <p>
                    <span className="font-semibold">Function:</span>{" "}
                    {product.function}
                  </p>
                  <p>
                    <span className="font-semibold">Max Power:</span>{" "}
                    {product.maxPower}
                  </p>
                  {product.colors && product.colors.length > 0 && (
                    <div>
                      <span className="font-semibold">Colors:</span>
                      <div className="flex gap-1 mt-1 flex-wrap">
                        {product.colors.map((color, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo.png"
                alt="RHE Electronic"
                width={200}
                height={50}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Professional manufacturer of USB Data Cables and Wall Chargers
                since 2009
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Email: sales33@rong-he.cn</p>
              <p className="text-gray-400">Web: www.rong-he.cn</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <p className="text-gray-400">
                No. 5, Lindong 3rd Road, Lincun, Tangxia Town, Dongguan City,
                Guangdong Province
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">WeChat</h3>
              <p className="text-gray-400 mb-3">Scan to add: Bennyzhou66</p>
              <div className="bg-white p-3 rounded-lg inline-block">
                {/* Replace with actual QR code image */}
                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-xs text-center">
                  QR Code
                  <br />
                  Placeholder
                  <br />
                  <span className="text-[10px]">
                    Add wechat-qr.png to
                    <br />
                    /public/images/
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Dongguan Ronghe Electronic Co., Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
