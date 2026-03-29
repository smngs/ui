import { DisplaySection } from "../sections/DisplaySection";
import { OverlaySection } from "../sections/OverlaySection";
import { NavigationSection } from "../sections/NavigationSection";
import { FormSection } from "../sections/FormSection";
import { FeedbackSection } from "../sections/FeedbackSection";
import { LayoutSection } from "../sections/LayoutSection";

export function ComponentsPage({ isDark }: { isDark: boolean }) {
  return (
    <>
      <div className="section" id="components">
        <h1>Components</h1>
      </div>
      <DisplaySection isDark={isDark} />
      <OverlaySection isDark={isDark} />
      <NavigationSection isDark={isDark} />
      <FormSection isDark={isDark} />
      <FeedbackSection isDark={isDark} />
      <LayoutSection isDark={isDark} />
    </>
  );
}
