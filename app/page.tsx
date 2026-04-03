```tsx
export default function WebpageDesignMockup() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold tracking-tight">MoonSheng LLC</div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#service-area">Service Area</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="tel:+16263738772"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            Call Now
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-4xl font-bold lg:text-6xl">
              Reliable warehouse and lumper support for your daily operations.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Supporting warehouses, ports, and distribution centers with dependable
              crews for unloading, palletizing, and logistics operations.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="rounded-xl bg-slate-900 px-6 py-3 text-white">
                Request Quote
              </a>
              <a href="tel:+16263738772" className="rounded-xl border px-6 py-3">
                Call Now
              </a>
            </div>

            <div className="mt-6 text-lg font-semibold">
              📞 Call or Text: (626) 373-8772
            </div>

            <div className="mt-4 text-sm text-slate-500">
              Serving Los Angeles • Long Beach • Inland Empire
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow">
            <h3 className="text-lg font-semibold">Why Choose Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>✔ Next-day crew availability based on schedule</li>
              <li>✔ 24/7 response for fast communication</li>
              <li>✔ Fully insured for warehouse operations</li>
              <li>✔ Supervised crews for reliable performance</li>
            </ul>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">Warehouse Staffing</h3>
              <p className="mt-3 text-sm text-slate-600">
                Loading, unloading, picking, packing, and general warehouse labor support.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">Lumper Services</h3>
              <p className="mt-3 text-sm text-slate-600">
                Container unloading, pallet breakdown, restacking, and floor load handling.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">Logistics Support</h3>
              <p className="mt-3 text-sm text-slate-600">
                Cross-docking, freight handling, and flexible labor for peak operations.
              </p>
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold">Why Us</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                Experienced warehouse and unloading crews
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                Flexible daily, weekly, and long-term support
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                Fast communication and 24/7 response
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                Professional support for B2B operations
              </div>
            </div>
          </div>
        </section>

        <section id="service-area" className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">Service Area</h2>
          <p className="mt-4 text-slate-600">
            We support warehouse and port operations across Southern California.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>Los Angeles</li>
            <li>Long Beach</li>
            <li>Inland Empire</li>
          </ul>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold">Get a Quote</h2>
          <p className="mt-3 text-slate-600">
            Contact us for reliable warehouse and logistics support.
          </p>

          <div className="mt-6 text-lg font-semibold">📞 (626) 373-8772</div>
          <div className="mt-2 text-lg font-semibold">📧 futrueretirement@gmail.com</div>

          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="mt-8 grid gap-4"
          >
            <input name="name" className="rounded-xl border p-3" placeholder="Name" />
            <input name="company" className="rounded-xl border p-3" placeholder="Company" />
            <input name="email" className="rounded-xl border p-3" placeholder="Email" />
            <textarea
              name="message"
              className="rounded-xl border p-3"
              placeholder="Location, service needed, volume"
            />
            <button type="submit" className="rounded-xl bg-slate-900 py-3 text-white">
              Send Request
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
