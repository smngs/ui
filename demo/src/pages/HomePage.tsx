import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faReact, faTypescript } from "@fortawesome/free-brands-svg-icons";
import { Avatar, Badge } from "@smngs/ui";
import { ColorPaletteSection } from "../sections/ColorPaletteSection";
import { TypographySection } from "../sections/TypographySection";
import { ComponentsOverviewSection } from "../sections/ComponentsOverviewSection";
import { DesignTokensSection } from "../sections/DesignTokensSection";

export function HomePage({ isDark }: { isDark: boolean }) {
  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div className="hero-text">
          <h1>@smngs/ui</h1>
          <p>A Radix UI-based design system — 36 components</p>
          <div className="row">
            <Badge asChild><a href="https://radix-ui.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCube} /> Radix UI</a></Badge>
            <Badge asChild><a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTypescript} /> TypeScript</a></Badge>
            <Badge asChild><a href="https://react.dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faReact} /> React 18</a></Badge>
          </div>
        </div>
        <Avatar src="https://github.com/smngs.png" fallback="SM" size="lg" />
      </div>

      <ColorPaletteSection isDark={isDark} />
      <DesignTokensSection />
      <ComponentsOverviewSection />
      <TypographySection />
    </>
  );
}
