import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Ronghe Electronic | Get in Touch",
  description:
    "Contact Dongguan Ronghe Electronic Co., Ltd. Email: sales33@rong-he.cn | Located in Dongguan City, Guangdong Province, China.",
};

export default function ContactPage() {
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
              <Link href="/contact" className="text-blue-600 font-bold">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for inquiries and support
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  We are here to answer any questions you may have about our
                  products and services. Reach out to us and we will respond as
                  soon as we can.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        Email
                      </h3>
                      <p className="text-gray-600 mb-1">For sales inquiries:</p>
                      <a
                        href="mailto:sales33@rong-he.cn"
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        sales33@rong-he.cn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🌐</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        Website
                      </h3>
                      <a
                        href="http://www.rong-he.cn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        www.rong-he.cn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        Address
                      </h3>
                      <p className="text-gray-600">
                        No. 5, Lindong 3rd Road, Lincun
                        <br />
                        Tangxia Town, Dongguan City
                        <br />
                        Guangdong Province, China
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💬</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        WeChat
                      </h3>
                      <p className="text-gray-600 mb-2">Add us on WeChat:</p>
                      <p className="text-blue-600 font-semibold">Bennyzhou66</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Ronghe Electronic?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">17 Years</h3>
              <p className="text-gray-600">
                Of manufacturing excellence since 2009
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">1,000+</h3>
              <p className="text-gray-600">Skilled staff members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">400,000</h3>
              <p className="text-gray-600">Daily production capacity</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">166+</h3>
              <p className="text-gray-600">Patents and certifications</p>
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
