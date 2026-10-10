import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  tone?: "light" | "alt" | "dark";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div>
      <p className={cn("eyebrow", tone === "alt" && "eyebrow-alt", tone === "dark" && "eyebrow-dark")}>
        {eyebrow}
      </p>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      <div className="double-rule" aria-hidden="true" />
    </div>
  );
}
