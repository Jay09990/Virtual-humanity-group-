import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy, experienceProof } from "@/lib/content";

export function WhyUs() {
  return (
    <section id="why" className="section-pad bg-linen-100" aria-labelledby="why-title">
      <Container className="why-grid">
        <Reveal>
          <SectionHeading
            id="why-title"
            eyebrow={copy.whyEyebrow}
            title={copy.whyTitle}
            tone="alt"
          />
          <blockquote className="why-quote">{copy.whyClaim}</blockquote>
          <ul className="proof-list">
            {experienceProof.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="placeholder-block">
          <p>{copy.clientPlaceholder}</p>
        </Reveal>
      </Container>
    </section>
  );
}
