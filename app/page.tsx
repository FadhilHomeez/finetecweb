import Image from "next/image";
import { BrandLogo } from "@/components/BrandLogo";
import { QuoteForm } from "@/components/QuoteForm";

const assets = {
  hero:
    "https://static.wixstatic.com/media/d4a37c_aed2b735461943a2b174ec0aebb9d62c~mv2.jpg/v1/fill/w_1800,h_1180,al_c,q_90,enc_avif,quality_auto/d4a37c_aed2b735461943a2b174ec0aebb9d62c~mv2.jpg",
  product:
    "https://static.wixstatic.com/media/d4a37c_f681384fdc9a4569a8cdcd715fc14c17~mv2.jpg/v1/fill/w_978,h_652,q_90,enc_avif,quality_auto/d4a37c_f681384fdc9a4569a8cdcd715fc14c17~mv2.jpg",
  machinery:
    "https://static.wixstatic.com/media/d4a37c_de53ebe06b8543368b7d5e1c9cf4bb5a~mv2.jpg/v1/fill/w_890,h_500,q_90,enc_avif,quality_auto/d4a37c_de53ebe06b8543368b7d5e1c9cf4bb5a~mv2.jpg",
  production:
    "https://static.wixstatic.com/media/d4a37c_63878ff72ef545eaa659e121631ee146~mv2.jpg/v1/fill/w_842,h_1262,q_90,enc_avif,quality_auto/d4a37c_63878ff72ef545eaa659e121631ee146~mv2.jpg",
  design:
    "https://static.wixstatic.com/media/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg/v1/fill/w_600,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg",
  laser:
    "https://static.wixstatic.com/media/4cfe2d80f9454338abcdce1924fe05c8.jpg/v1/fill/w_600,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Laser%20Cutting%20Steel.jpg",
  welding:
    "https://static.wixstatic.com/media/d4a37c_ffb0e2f761564fb3a7e0620b77c5be24~mv2.jpg/v1/crop/x_0,y_69,w_2461,h_1862/fill/w_600,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC4091_edited.jpg",
  bending:
    "https://static.wixstatic.com/media/d4a37c_c8793e2920ff4dda9863fa676d0f9c88~mv2.jpg/v1/fill/w_600,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC4032.jpg",
  shearing:
    "https://static.wixstatic.com/media/d4a37c_b0289a4946004d3caf47c62ad02152f5~mv2.jpg/v1/fill/w_600,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC3552.jpg",
  engineering:
    "https://static.wixstatic.com/media/d4a37c_9ad0b1098d7b4202abde7fbc39d2b154~mv2.jpg/v1/fill/w_600,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC3775_edited.jpg",
  laserMachine:
    "https://static.wixstatic.com/media/d4a37c_8b91a8a1110d40ea9e19b92198937dd6~mv2.png/v1/fill/w_770,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d4a37c_8b91a8a1110d40ea9e19b92198937dd6~mv2.png",
  bendingMachine:
    "https://static.wixstatic.com/media/d4a37c_de53ebe06b8543368b7d5e1c9cf4bb5a~mv2.jpg/v1/fill/w_780,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d4a37c_de53ebe06b8543368b7d5e1c9cf4bb5a~mv2.jpg",
};

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Machines", "#machines"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
] as const;

const services = [
  {
    title: "Design & Consultation",
    image: assets.design,
    copy: "Practical fabrication guidance from drawing review through manufacturable detail.",
  },
  {
    title: "Laser Cutting",
    image: assets.laser,
    copy: "Fiber laser cutting for clean edges, repeatable profiles, and tight production flow.",
  },
  {
    title: "Welding",
    image: assets.welding,
    copy: "Welded assemblies handled with attention to strength, finish, and consistency.",
  },
  {
    title: "Bending",
    image: assets.bending,
    copy: "CNC bending for precise angles, formed parts, panels, brackets, and enclosures.",
  },
  {
    title: "Shearing",
    image: assets.shearing,
    copy: "Fast, accurate sheet preparation for downstream forming and fabrication.",
  },
  {
    title: "Other Engineering Services",
    image: assets.engineering,
    copy: "Support for custom metal work, production runs, and project-specific requirements.",
  },
];

const machines = [
  {
    name: "Bystronic BySmart Fiber 3015; Fiber 3000",
    type: "Fiber Laser Cutting System",
    image: assets.bendingMachine,
    specs: [
      "3,000 x 1,500 mm nominal sheet size; 3,106 x 1,582 mm cutting area",
      "3,000 W fiber laser source with 300-3,000 W adjustment range",
      "Cuts up to 20 mm steel, 12 mm stainless steel or aluminium, and 6 mm copper or brass",
      "140 m/min max simultaneous positioning speed",
      "+/- 0.05 mm repeatability and +/- 0.1 mm positioning accuracy",
      "1,100 kg maximum workpiece weight with 27 s table changeover",
    ],
  },
  {
    name: "Bystronic Xpress 160/3100",
    type: "Bending Machine",
    image: assets.laserMachine,
    specs: [
      "1,600 kN tonnage",
      "3,100 mm bending length",
      "550 mm open height",
      "250 mm standard stroke",
      "150 mm/s Y-approach speed and 10 mm/s Y-working speed",
    ],
  },
];

const galleryItems = [
  {
    title: "Products",
    image: assets.product,
    copy: "Finished metal components, enclosures, fixtures, and fabricated parts.",
  },
  {
    title: "Machinery",
    image: assets.machinery,
    copy: "Production equipment selected for accurate, repeatable fabrication work.",
  },
  {
    title: "Production",
    image: assets.production,
    copy: "Workshop operations across cutting, forming, assembly, and finishing.",
  },
];

const stats = [
  ["20+", "years of team experience"],
  ["6", "core fabrication services"],
  ["3,106 x 1,582", "mm laser cutting area"],
  ["SG", "based in North Link Building"],
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="header-shell">
        <div className="utility-bar" aria-label="Utility navigation">
          <a href="mailto:rick@finetec.com.sg">Sales enquiries</a>
          <a href="https://maps.google.com/?q=10%20Admiralty%20Street%20%2304-34%20North%20Link%20Building%20Singapore%20757695">
            Singapore facility
          </a>
          <span>EN</span>
        </div>

        <div className="site-header">
          <a className="brand" href="#top" aria-label="Finetec Engineering home">
            <BrandLogo priority />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a className="header-call" href="tel:+6569084345">
            +65 6908 4345
          </a>

          <details className="mobile-nav">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
              <span />
            </summary>
            <div>
              {navItems.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
              <a href="tel:+6569084345">Call +65 6908 4345</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">Precision sheet metal fabrication in Singapore</p>
          <div className="hero-rule" />
          <h1 id="hero-title">Industrial sheet metal fabrication for precise, repeatable work</h1>
          <p>
            Reliable fabrication support for companies that need laser cutting, bending,
            welding, shearing, and custom metal work handled with care from drawing to delivery.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Request a quote
              <span aria-hidden="true"> &gt;</span>
            </a>
            <a className="button button-secondary" href="#machines">
              View machines
            </a>
          </div>
        </div>

        <div className="hero-media">
          <Image
            src={assets.hero}
            alt="Finetec Engineering welding work in progress"
            fill
            priority
            sizes="(min-width: 980px) 42vw, 100vw"
            className="hero-image"
          />
          <div className="hero-media-caption">
            <span>20+ years</span>
            <p>Experienced sheet metal fabrication support from design review to finished parts.</p>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Company highlights">
        <div className="stats-grid">
          {stats.map(([value, label]) => (
            <div className="stat" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-grid">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A trusted partner for sheet metal fabrication"
              copy="Finetec Engineering is established by a dynamic team of professionals, equipped with skills built upon experience of more than 20 years."
            />
            <p className="body-large">
              Commitment, excellence and reliability are the values we embody: our beacon
              to provide the best of our services. We hold our customers' best interests
              at heart as their trusted partner in sheet metal fabrication.
            </p>
          </div>

          <div className="values-grid">
            <article className="value-card">
              <span>Vision</span>
              <p>
                To be truly recognised as a reliable provider of top notch goods and
                services in sheet metal fabrication.
              </p>
            </article>
            <article className="value-card value-card-accent">
              <span>Mission</span>
              <p>
                To establish and retain customer support by creating an intimate rapport
                with every single one of them and to always deliver excellent quality
                goods and services to the best of our capabilities.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <SectionHeading
          eyebrow="Services"
          title="Fabrication capabilities under one roof"
          copy="From early consultation to formed, welded, and production-ready components, Finetec supports practical fabrication needs across the production journey."
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-media">
                <Image src={service.image} alt="" fill sizes="(min-width: 960px) 33vw, 100vw" />
              </div>
              <div className="service-content">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="machine-band" id="machines">
        <div className="section machine-inner">
          <SectionHeading
            eyebrow="Machines"
            title="Industrial capacity with Bystronic equipment"
            copy="Procurement teams can quickly confirm core capacity, machine type, and fabrication fit before starting a quotation."
          />

          <div className="machine-grid">
            {machines.map((machine) => (
              <article className="machine-card" key={machine.name}>
                <div className="machine-media">
                  <Image src={machine.image} alt="" fill sizes="(min-width: 960px) 50vw, 100vw" />
                </div>
                <div className="machine-content">
                  <p>{machine.type}</p>
                  <h3>{machine.name}</h3>
                  <ul>
                    {machine.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <SectionHeading
          eyebrow="Gallery"
          title="A clearer view of products, machinery, and production"
          copy="Representative visuals from the shop floor, machinery line, and finished sheet metal work."
        />

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.title}>
              <Image src={item.image} alt="" fill sizes="(min-width: 960px) 33vw, 100vw" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-band" aria-labelledby="process-title">
        <div className="section process-grid">
          <div>
            <p className="eyebrow">Workflow</p>
            <h2 id="process-title">From drawings to finished parts</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <strong>Review</strong>
              <p>Confirm drawings, material, quantities, tolerances, and production goals.</p>
            </li>
            <li>
              <span>02</span>
              <strong>Fabricate</strong>
              <p>Cut, shear, bend, weld, and finish components using the right process path.</p>
            </li>
            <li>
              <span>03</span>
              <strong>Inspect</strong>
              <p>Check fit, edges, angles, and workmanship before handoff.</p>
            </li>
            <li>
              <span>04</span>
              <strong>Deliver</strong>
              <p>Coordinate completion details with sales and operations for a clean closeout.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section contact-grid">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-on-dark">Contact</p>
            <h2>Start a fabrication enquiry</h2>
            <p>
              Send drawings, project details, or an early idea. Finetec's sales team can
              help clarify process fit, timing, and next steps.
            </p>

            <div className="contact-list">
              <a
                className="contact-card contact-card-wide"
                href="https://maps.google.com/?q=10%20Admiralty%20Street%20%2304-34%20North%20Link%20Building%20Singapore%20757695"
              >
                <span>Head office</span>
                <strong>10 Admiralty Street, #04-34</strong>
                <em>North Link Building, Singapore 757695</em>
              </a>
              <a className="contact-card" href="tel:+6569084345">
                <span>Main line</span>
                <strong>+65 6908 4345</strong>
                <em>General enquiries</em>
              </a>
              <a className="contact-card" href="tel:+6569084347">
                <span>Office line</span>
                <strong>+65 6908 4347</strong>
                <em>Fabrication support</em>
              </a>
              <a className="contact-card" href="https://wa.me/6591801061">
                <span>WhatsApp/Viber</span>
                <strong>+65 9180 1061</strong>
                <em>Quick project follow-up</em>
              </a>
              <a className="contact-card" href="mailto:rick@finetec.com.sg">
                <span>Sales</span>
                <strong>rick@finetec.com.sg</strong>
                <em>Quotation requests</em>
              </a>
              <a className="contact-card" href="mailto:anne@finetec.com.sg">
                <span>Sales support</span>
                <strong>anne@finetec.com.sg</strong>
                <em>Documentation and coordination</em>
              </a>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      <footer className="site-footer">
        <BrandLogo className="brand-logo-footer" />
        <p>Finetec Engineering Pte Ltd - Precision sheet metal fabrication in Singapore.</p>
      </footer>
    </main>
  );
}
