import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { stats } from "@/lib/content";

export function StatsStrip() {
  return (
    <section className="stats-section dark-surface" aria-label="Experience in numbers">
      <Container className="stats-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <CountUp to={stat.value} suffix={stat.suffix} />
            <span className="sr-only">
              {stat.value}
              {stat.suffix}
            </span>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
