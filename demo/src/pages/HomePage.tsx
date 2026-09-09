import { ColorPaletteSection } from "../sections/ColorPaletteSection";
import { TypographySection } from "../sections/TypographySection";
import { ComponentsOverviewSection } from "../sections/ComponentsOverviewSection";
import { DesignTokensSection } from "../sections/DesignTokensSection";

export function HomePage({ isDark }: { isDark: boolean }) {
  return (
    <>
      <ColorPaletteSection isDark={isDark} />
      <DesignTokensSection />
      <ComponentsOverviewSection />
      <TypographySection />
    </>
  );
}
