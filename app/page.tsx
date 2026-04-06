export default function StableWarehouseWebsite() {
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#0f172a',
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
    header: {
      position: 'sticky' as const,
      top: 0,
      zIndex: 20,
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
    },
    container: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '0 24px',
    },
    headerInner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      padding: '18px 0',
      flexWrap: 'wrap' as const,
    },
    brand: {
      fontSize: '28px',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    nav: {
      display: 'flex',
      gap: '22px',
      fontSize: '14px',
      color: '#475569',
      flexWrap: 'wrap' as const,
    },
    navLink: {
      color: '#475569',
      textDecoration: 'none',
    },
    callBtn: {
      backgroundColor: '#0f172a',
      color: '#ffffff',
      textDecoration: 'none',
      padding: '12px 18px',
      borderRadius: '12px',
      fontWeight: 700,
      display: 'inline-block',
    },
    hero: {
      padding: '72px 0 56px',
    },
    heroGrid: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: '32px',
      alignItems: 'start',
    },
    heroTitle: {
      fontSize: '54px',
      lineHeight: 1.05,
      margin: '0 0 18px',
      letterSpacing: '-0.03em',
    },
    heroText: {
      fontSize: '18px',
      lineHeight: 1.7,
      color: '#475569',
      margin: '0 0 24px',
    },
    buttonRow: {
      display: 'flex',
      gap: '14px',
      flexWrap: 'wrap' as const,
      marginBottom: '18px',
    },
    primaryBtn: {
      backgroundColor: '#0f172a',
      color: '#ffffff',
      textDecoration: 'none',
      padding: '14px 22px',
      borderRadius: '12px',
      fontWeight: 700,
      display: 'inline-block',
    },
    secondaryBtn: {
      backgroundColor: '#ffffff',
      color: '#0f172a',
      textDecoration: 'none',
      padding: '14px 22px',
      borderRadius: '12px',
      fontWeight: 700,
      display: 'inline-block',
      border: '1px solid #cbd5e1',
    },
    contactLine: {
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '10px',
    },
    serviceArea: {
      fontSize: '14px',
      color: '#64748b',
    },
    card: {
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      padding: '28px',
      boxShadow: '0 10px 30px rgba(15,23,42,0.06)',
      backgroundColor: '#ffffff',
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: 700,
      marginBottom: '16px',
    },
    featureList: {
      margin: 0,
      paddingLeft: '20px',
      color: '#334155',
      lineHeight: 1.9,
    },
    section: {
      padding: '56px 0',
    },
    sectionLight: {
      padding: '56px 0',
      backgroundColor: '#f8fafc',
    },
    sectionTitle: {
      fontSize: '38px',
      margin: '0 0 12px',
      letterSpacing: '-0.02em',
    },
    sectionText: {
      color: '#475569',
      lineHeight: 1.8,
      margin: '0 0 28px',
    },
    grid3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
    },
    grid4: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '18px',
    },
    miniCard: {
      border: '1px solid #e2e8f0',
      borderRadius: '18px',
      padding: '22px',
      backgroundColor: '#ffffff',
    },
    miniTitle: {
      fontSize: '22px',
      fontWeight: 700,
      margin: '0 0 10px',
    },
    miniText: {
      color: '#475569',
      lineHeight: 1.8,
      margin: 0,
    },
    contactWrap: {
      display: 'grid',
      gridTemplateColumns: '0.95fr 1.05fr',
      gap: '28px',
      alignItems: 'start',
    },
    infoBox: {
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      padding: '28px',
    },
    infoLine: {
      fontSize: '18px',
      fontWeight: 700,
      marginBottom: '12px',
    },
    form: {
      display: 'grid',
      gap: '14px',
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      borderRadius: '12px',
      border: '1px solid #cbd5e1',
      fontSize: '16px',
      boxSizing: 'border-box' as const,
    },
    textarea: {
      width: '100%',
      minHeight: '140px',
      padding: '14px 16px',
      borderRadius: '12px',
      border: '1px solid #cbd5e1',
      fontSize: '16px',
      boxSizing: 'border-box' as const,
      resize: 'vertical' as const,
    },
    submitBtn: {
      backgroundColor: '#0f172a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '12px',
      padding: '14px 20px',
      fontSize: '16px',
      fontWeight: 700,
      cursor: 'pointer',
    },
    footer: {
      borderTop: '1px solid #e2e8f0',
      padding: '24px 0 40px',
      color: '#64748b',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={{ ...styles.container, ...styles.headerInner }}>
          <div style={styles.brand}>MoonSheng LLC</div>

          <nav style={styles.nav}>
            <a href="#services" style={styles.navLink}>Services</a>
            <a href="#why-us" style={styles.navLink}>Why Us</a>
            <a href="#service-area" style={styles.navLink}>Service Area</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </nav>

          <a href="tel:+16263738772" style={styles.callBtn}>Call Now</a>
        </div>
      </header>

      <main>
        <section style={styles.hero}>
          <div style={{ ...styles.container, ...styles.heroGrid }}>
            <div>
              <h1 style={styles.heroTitle}>
                Reliable warehouse and lumper support for your daily operations.
              </h1>
              <p style={styles.heroText}>
                Supporting warehouses, ports, and distribution centers with dependable crews
                for unloading, palletizing, and logistics operations.
              </p>

              <div style={styles.buttonRow}>
                <a href="#contact" style={styles.primaryBtn}>Request Quote</a>
                <a href="tel:+16263738772" style={styles.secondaryBtn}>Call Now</a>
              </div>

              <div style={styles.contactLine}>Call or Text: (626) 373-8772</div>
              <div style={styles.serviceArea}>Serving Los Angeles • Long Beach • Inland Empire</div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Why Choose Us</div>
              <ul style={styles.featureList}>
                <li>Next-day crew availability based on schedule</li>
                <li>24/7 response for fast communication</li>
                <li>Fully insured for warehouse operations</li>
                <li>Supervised crews for reliable performance</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Our Services</h2>
            <p style={styles.sectionText}>
              Practical labor support for warehouses, unloading operations, freight flow,
              and daily logistics needs.
            </p>

            <div style={styles.grid3}>
              <div style={styles.miniCard}>
                <h3 style={styles.miniTitle}>Warehouse Staffing</h3>
                <p style={styles.miniText}>
                  Loading, unloading, picking, packing, and general warehouse labor support.
                </p>
              </div>

              <div style={styles.miniCard}>
                <h3 style={styles.miniTitle}>Lumper Services</h3>
                <p style={styles.miniText}>
                  Container unloading, pallet breakdown, restacking, and floor load handling.
                </p>
              </div>

              <div style={styles.miniCard}>
                <h3 style={styles.miniTitle}>Logistics Support</h3>
                <p style={styles.miniText}>
                  Cross-docking, freight handling, and flexible labor for peak operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" style={styles.sectionLight}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Why Us</h2>
            <div style={styles.grid4}>
              <div style={styles.miniCard}>Experienced warehouse and unloading crews</div>
              <div style={styles.miniCard}>Flexible daily, weekly, and long-term support</div>
              <div style={styles.miniCard}>Fast communication and 24/7 response</div>
              <div style={styles.miniCard}>Professional support for B2B operations</div>
            </div>
          </div>
        </section>

        <section id="service-area" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Service Area</h2>
            <p style={styles.sectionText}>
              We support warehouse and port operations across Southern California.
            </p>
            <ul style={styles.featureList}>
              <li>Los Angeles</li>
              <li>Long Beach</li>
              <li>Inland Empire</li>
            </ul>
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <div style={{ ...styles.container, ...styles.contactWrap }}>
            <div style={styles.infoBox}>
              <h2 style={styles.sectionTitle}>Get a Quote</h2>
              <p style={styles.sectionText}>
                Contact us for reliable warehouse and logistics support.
              </p>
              <div style={styles.infoLine}>Phone: (626) 373-8772</div>
              <div style={styles.infoLine}>Email: futrueretirement@gmail.com</div>
            </div>

            <form action="https://formspree.io/f/maqlaorw" method="POST" style={styles.form}>
              <input name="name" placeholder="Name" style={styles.input} />
              <input name="company" placeholder="Company" style={styles.input} />
              <input name="email" placeholder="Email" style={styles.input} />
              <textarea
                name="message"
                placeholder="Location, service needed, volume"
                style={styles.textarea}
              ></textarea>
              <button type="submit" style={styles.submitBtn}>Send Request</button>
            </form>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.container}>
          MoonSheng LLC • Warehouse Staffing • Lumper Services • Logistics Support
        </div>
      </footer>
    </div>
  );
}
