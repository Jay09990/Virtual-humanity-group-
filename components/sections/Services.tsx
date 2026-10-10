import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy, services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="section-pad bg-linen-50" aria-labelledby="services-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow={copy.servicesEyebrow}
            title={copy.servicesTitle}
          />
          <p className="section-intro">{copy.servicesIntro}</p>
        </Reveal>
        <div className="service-grid">
          {services.map(({ number, title, icon: Icon }) => (
            <Reveal className="section-card service-card" key={number}>
              <span className="service-number">{number}</span>
              <Icon className="service-icon" size={24} strokeWidth={1.5} aria-hidden="true" />
              <h3 className="service-title">{title}</h3>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
