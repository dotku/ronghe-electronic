import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            Welcome to RHE Electronic
          </h1>
          <p className="text-2xl mb-8 text-gray-600">
            Focus on R & D, Manufacturing USB Data Cable & Wall Charger for 17
            Years
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-2 rounded-full shadow-md border border-gray-200 text-gray-700">
              Qi2 Certified
            </div>
            <div className="bg-white px-6 py-2 rounded-full shadow-md border border-gray-200 text-gray-700">
              Global Recycled Standard
            </div>
            <div className="bg-white px-6 py-2 rounded-full shadow-md border border-gray-200 text-gray-700">
              ISO Certified
            </div>
            <div className="bg-white px-6 py-2 rounded-full shadow-md border border-gray-200 text-gray-700">
              BSCI
            </div>
          </div>
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            View Our Products
          </Link>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            About Dongguan Ronghe Electronic
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p>
              Dongguan Ronghe Electronic Co., Ltd was established in 2009 in a
              25,000 sqm facility with 500 employees, mainly focus on designing,
              developing and manufacturing of 3C Mobile Accessories, Such as USB
              Data Cables and Wall Chargers. We have also set up branch
              factories in Jiangxi, Hunan and Hubei, total around 1,000 staff
              and daily production capacity of 400,000 pieces.
            </p>
            <p>
              We have been adhering to customer satisfaction, continuous
              innovation and optimization The business philosophy of cost and
              improvement, is committed to creating a platform for co-creation,
              sharing and fun, so that more people can realize their self-worth.
            </p>
            <p>
              Dongguan Ronghe Electronic is an innovative design factory, we
              committed to creating e-commerce popular products on the basis of
              product quality, and has established strategic partnerships with
              many brands.
            </p>
            <p>
              We advocate minimalism, and strive to produce products that are
              low-key and unique, and simple to show the pursuit of quality.
              Every time we innovate, just to make your life easier.
            </p>
            <p>
              Our company is a high-tech enterprise, has obtained BSCI
              certification, products meet CE, ROHS requirements, has a number
              of invention patents, more than 7 invention patents, 97 utility
              model patents, and 62 appearance design patents.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/products/data-cables" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition transform group-hover:-translate-y-2">
                <div className="text-5xl mb-4">🔌</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600">
                  Data Cables
                </h3>
                <p className="text-gray-600">
                  USB-C, Lightning, Magnetic cables with charging up to 480Mbps
                  data transfer
                </p>
              </div>
            </Link>
            <Link href="/products/wireless-chargers" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition transform group-hover:-translate-y-2">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600">
                  Wireless Chargers
                </h3>
                <p className="text-gray-600">
                  Qi2.2/Qi2.1 wireless charging solutions up to 25W for phones
                  and watches
                </p>
              </div>
            </Link>
            <Link href="/products/wall-chargers" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition transform group-hover:-translate-y-2">
                <div className="text-5xl mb-4">🔋</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600">
                  Wall Chargers
                </h3>
                <p className="text-gray-600">
                  Fast charging adapters from 20W to 140W with multiple port
                  options
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">17</div>
              <div className="text-lg">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-lg">Staff Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">400,000</div>
              <div className="text-lg">Daily Production Capacity</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">166+</div>
              <div className="text-lg">Patents</div>
            </div>
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
                <Image
                  src="/images/wechat-qrcode.png"
                  alt="WeChat QR Code"
                  width={100}
                  height={100}
                />
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
