import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Ronghe Electronic | Our Story and Expertise",
  description:
    "Learn about Dongguan Ronghe Electronic Co., Ltd - 17 years of excellence in manufacturing USB data cables and wall chargers. 1000+ staff, 400,000 daily capacity.",
};

export default function AboutPage() {
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
              <Link href="/about" className="text-blue-600 font-bold">
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
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">About Us</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            17 Years of Excellence in Manufacturing USB Data Cables and Wall
            Chargers
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              About Dongguan Ronghe Electronic Co., Ltd
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Dongguan Ronghe Electronic Co., Ltd was established in 2009 in a
                25,000 sqm facility with 500 employees, mainly focusing on
                designing, developing and manufacturing of 3C Mobile
                Accessories, such as USB Data Cables and Wall Chargers.
              </p>
              <p>
                We have also set up branch factories in Jiangxi, Hunan and
                Hubei, with a total of around 1,000 staff members and a daily
                production capacity of 400,000 pieces.
              </p>
              <p>
                We have been adhering to customer satisfaction, continuous
                innovation and optimization. Our business philosophy of cost
                improvement is committed to creating a platform for co-creation,
                sharing and fun, so that more people can realize their
                self-worth.
              </p>
              <p>
                Dongguan Ronghe Electronic is an innovative design factory. We
                are committed to creating e-commerce popular products on the
                basis of product quality, and have established strategic
                partnerships with many brands.
              </p>
              <p>
                We advocate minimalism, and strive to produce products that are
                low-key and unique, simple to show the pursuit of quality. Every
                time we innovate, just to make your life easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">17</div>
              <div className="text-lg">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1,000+</div>
              <div className="text-lg">Staff Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">400,000</div>
              <div className="text-lg">Daily Production Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">166+</div>
              <div className="text-lg">Patents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Patents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Certifications & Innovation
            </h2>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Our company is a high-tech enterprise that has obtained BSCI
                  certification. All our products meet CE and ROHS requirements,
                  ensuring the highest quality and safety standards.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-4xl mb-3">🔬</div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      7+
                    </div>
                    <div className="text-gray-700 font-semibold">
                      Invention Patents
                    </div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-4xl mb-3">⚙️</div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      97
                    </div>
                    <div className="text-gray-700 font-semibold">
                      Utility Model Patents
                    </div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-4xl mb-3">🎨</div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      62
                    </div>
                    <div className="text-gray-700 font-semibold">
                      Appearance Design Patents
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Badges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Quality Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-blue-600 px-8 py-4 rounded-full shadow-md text-blue-600 font-bold text-lg">
              Qi2 Certified
            </div>
            <div className="bg-white border-2 border-green-600 px-8 py-4 rounded-full shadow-md text-green-600 font-bold text-lg">
              Global Recycled Standard
            </div>
            <div className="bg-white border-2 border-purple-600 px-8 py-4 rounded-full shadow-md text-purple-600 font-bold text-lg">
              ISO Certified
            </div>
            <div className="bg-white border-2 border-orange-600 px-8 py-4 rounded-full shadow-md text-orange-600 font-bold text-lg">
              BSCI
            </div>
            <div className="bg-white border-2 border-red-600 px-8 py-4 rounded-full shadow-md text-red-600 font-bold text-lg">
              CE Compliant
            </div>
            <div className="bg-white border-2 border-indigo-600 px-8 py-4 rounded-full shadow-md text-indigo-600 font-bold text-lg">
              ROHS Compliant
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Our Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-600">
                  We prioritize our customers' needs and deliver products that
                  exceed expectations
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Continuous Innovation
                </h3>
                <p className="text-gray-600">
                  We constantly improve and innovate to stay ahead in the
                  industry
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Strategic Partnerships
                </h3>
                <p className="text-gray-600">
                  We build long-term relationships with brands worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Product Range
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link
              href="/products#data-cables"
              className="group bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">🔌</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600">
                Data Cables
              </h3>
              <p className="text-gray-600">
                High-quality USB-C, Lightning, and Magnetic cables
              </p>
            </Link>
            <Link
              href="/products#wireless-chargers"
              className="group bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600">
                Wireless Chargers
              </h3>
              <p className="text-gray-600">
                Qi2 certified wireless charging solutions
              </p>
            </Link>
            <Link
              href="/products#wall-chargers"
              className="group bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">🔋</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600">
                Wall Chargers
              </h3>
              <p className="text-gray-600">
                Fast charging adapters from 20W to 140W
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Partner with a trusted manufacturer with 17 years of experience and
            cutting-edge technology
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg text-lg"
            >
              View Our Products
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg text-lg"
            >
              Contact Us
            </Link>
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
