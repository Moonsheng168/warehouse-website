export default function HomePage() {
  return (
    <div>
      <header className="header">
        <div className="container header-inner">
          <div>
            <div className="brand-title">WarehousePro Logistics</div>
            <div className="brand-subtitle">Warehousing • Lumper • Logistics Support</div>
          </div>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#service-area">Service Area</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="tel:1234567890" className="call-btn">Call Now</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <h1>Reliable Warehouse &amp; Lumper Services in Los Angeles</h1>
              <p>
                Fast turnaround. Flexible crews. Same-day support available for warehouses,
                ports, and distribution centers across Southern California.
              </p>

              <div className="hero-actions">
                <a href="tel:1234567890" className="primary-btn">Call Now</a>
                <a href="#contact" className="secondary-btn">Request Quote</a>
              </div>

              <div className="badge-row">
                <span className="badge">Warehouse Staffing</span>
                <span className="badge">Container Unloading</span>
                <span className="badge">Cross-Docking</span>
                <span className="badge">Peak Season Support</span>
              </div>

              <div className="service-area-text">
                Serving Los Angeles • Long Beach Port • Inland Empire
              </div>
            </div>

            <div className="card">
              <h3>Core Services</h3>
              <ul className="check-list">
                <li>Container unloading &amp; floor load handling</li>
                <li>Palletizing, sorting, wrapping, and restacking</li>
                <li>Warehouse staffing and on-site daily support</li>
                <li>Cross-docking and freight handling support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="container trust-grid">
            <div className="trust-item">Experienced warehouse crews</div>
            <div className="trust-item">Same-day deployment available</div>
            <div className="trust-item">Flexible short and long-term support</div>
            <div className="trust-item">Reliable, supervised teams</div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>Our Services</h2>
            <p className="section-lead">
              We support warehouse operators, importers, trucking partners, and distribution
              centers with dependable labor and operational assistance.
            </p>

            <div className="services-grid">
              <div className="service-card">
                <h3>Warehouse Staffing</h3>
                <p>
                  Reliable crews for picking, packing, loading, unloading, sorting,
                  palletizing, and daily warehouse operations.
                </p>
              </div>

              <div className="service-card">
                <h3>Lumper Services</h3>
                <p>
                  Fast container unloading, pallet breakdown, floor load handling,
                  restacking, shrink wrapping, and dock support.
                </p>
              </div>

              <div className="service-card">
                <h3>Logistics Support</h3>
                <p>
                  Flexible labor for cross-docking, freight handling, overflow work,
                  and peak season operational coverage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="service-area" className="section dark-section">
          <div className="container">
            <h2>Service Area</h2>
            <p className="section-lead">
              We support warehouses, ports, and distribution facilities across key logistics
              corridors in Southern California.
            </p>

            <ul className="area-list">
              <li>Los Angeles</li>
              <li>Long Beach Port</li>
              <li>Inland Empire</li>
              <li>Warehouse and distribution centers throughout Southern California</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-wrap">
            <div className="contact-box">
              <h2>Get a Quote</h2>
              <p className="section-lead">
                Need immediate support? Call us directly or send your job details below.
              </p>
              <div className="contact-phone">123-456-7890</div>
              <p className="section-lead">
                Replace this phone number, service area, and company details before launch.
              </p>
            </div>

            <form>
              <input placeholder="Name" />
              <input placeholder="Company" />
              <input placeholder="Email" />
              <textarea placeholder="Warehouse location, service needed, volume, and timeline" />
              <button type="button" className="submit-btn">Send Request</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          WarehousePro Logistics • Warehousing • Lumper • Logistics Support
        </div>
      </footer>
    </div>
  )
}