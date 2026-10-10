import { Container } from "@/components/ui/Container";
import { company, copy, navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-top">
        <div>
          <a className="wordmark" href="#home">
            {company.name}
          </a>
          <p className="footer-tagline">{copy.footerTagline}</p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="footer-nav-title">{copy.footerNavTitle}</p>
          <div className="footer-nav">
            {navItems.map((item) =>
              item.href ? (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ) : (
                <span aria-disabled="true" key={item.label}>
                  {item.label}
                </span>
              ),
            )}
          </div>
        </nav>
      </Container>
      <Container className="footer-bottom">
        <p>{copy.footerCopyright}</p>
        <p>{copy.footerNote}</p>
      </Container>
    </footer>
  );
}
