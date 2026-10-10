import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company, copy, engagementModels } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero-section dark-surface" id="home" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div>
          <p className="eyebrow eyebrow-dark">{copy.heroEyebrow}</p>
          <h1 className="hero-title" id="hero-title">
            {company.tagline}
          </h1>
          <p className="definition">{company.definition}</p>
          <p className="hero-copy">{copy.heroDescription}</p>
          <div className="hero-actions">
            <Button href="#contact" variant="dark">
              {copy.primaryCta}
            </Button>
            <Button href="#services" variant="outline-dark">
              {copy.secondaryCta}
            </Button>
          </div>
        </div>
        <div className="ledger-card">
          <p className="ledger-label">{copy.heroModelsLabel}</p>
          {engagementModels.map((model, index) => (
            <div className="ledger-row" key={model.title}>
              <span className="ledger-number tabular">
                0{index + 1}
              </span>
              <span>{model.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
