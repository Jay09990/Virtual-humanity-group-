import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy, sectors } from "@/lib/content";

export function Sectors() {
  return (
    <section id="sectors" className="section-pad bg-linen-50" aria-labelledby="sectors-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="sectors-title"
            eyebrow={copy.sectorsEyebrow}
            title={copy.sectorsTitle}
          />
          <p className="section-intro">{copy.sectorsIntro}</p>
        </Reveal>
        <div className="sector-grid">
          {sectors.map(({ title, icon: Icon }) => (
            <Reveal className="section-card sector-card" key={title}>
              <Icon className="sector-icon" size={24} strokeWidth={1.5} aria-hidden="true" />
              <h3 className="sector-title">{title}</h3>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
