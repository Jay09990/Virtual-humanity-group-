import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy, engagementModels } from "@/lib/content";

export function Engagement() {
  return (
    <section id="engage" className="section-pad bg-linen-100" aria-labelledby="engage-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="engage-title"
            eyebrow={copy.engagementEyebrow}
            title={copy.engagementTitle}
            tone="alt"
          />
        </Reveal>
        <div className="engagement-grid">
          {engagementModels.map(({ title, description, icon: Icon }, index) => (
            <Reveal className="engagement-card" key={title}>
              <div className="engagement-meta">
                <span className="engagement-number tabular">0{index + 1}</span>
                <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="engagement-title">{title}</h3>
              <p className="engagement-copy">{description}</p>
            </Reveal>
          ))}
        </div>
        <p className="closing-copy">{copy.servicesIntro}</p>
      </Container>
    </section>
  );
}
