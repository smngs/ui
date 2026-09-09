import React, { useEffect, useRef } from "react";
import { Navbar } from "./Navbar";

interface NavbarHeaderProps {
  /** The brand mark, shown in the bar and blown up in the hero. */
  avatar: { src: string; alt?: string; href?: string };
  /**
   * Element to render the two avatar links as, so a router keeps its
   * client-side navigation: `brandLink={<Link href="/" />}`. Falls back to a
   * plain anchor at `avatar.href`.
   */
  brandLink?: React.ReactElement;
  /** Hero content — a name, a tagline, whatever sits beside the avatar. */
  hero: React.ReactNode;
  /** Navbar contents that follow the brand: title, links, right-hand controls. */
  children: React.ReactNode;
  className?: string;
}

/**
 * A Navbar with a hero attached beneath it that collapses as the page scrolls.
 *
 * The collapse is driven by the CSS variable `--p` (0 = expanded, 1 = collapsed)
 * set on the wrapper, which the stylesheet uses to scale the hero's height and
 * padding. The avatar is handled differently per device:
 *   - Desktop: one fixed avatar "flies" and shrinks from the hero slot into the
 *     bar slot, positioned each frame; the two in-flow avatars only reserve the
 *     slots it moves between.
 *   - Mobile: no fixed avatar (it drifts as the address bar resizes the
 *     viewport), so the in-flow avatars cross-fade via opacity instead.
 *
 * Pages without a hero use Navbar directly and none of this runs.
 */
export function NavbarHeader({
  avatar,
  brandLink,
  hero,
  children,
  className = "",
}: NavbarHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const heroBlock = useRef<HTMLDivElement>(null);
  const barAvatar = useRef<HTMLImageElement>(null); // bar slot + mobile avatar
  const heroAvatar = useRef<HTMLImageElement>(null); // hero slot + mobile avatar
  const morph = useRef<HTMLAnchorElement>(null); // desktop fly avatar

  useEffect(() => {
    const header = headerRef.current;
    const m = morph.current;
    const ba = barAvatar.current;
    if (!header || !m || !ba) return;

    const isDesktop = () => window.matchMedia("(min-width: 769px)").matches;
    const placeMorph = (
      p: number,
      heroRect: { left: number; top: number; width: number },
      nav: DOMRect
    ) => {
      const lerp = (f: number, t: number) => f + (t - f) * p;
      const size = lerp(heroRect.width, nav.width);
      m.style.width = `${size}px`;
      m.style.height = `${size}px`;
      m.style.transform = `translate(${lerp(heroRect.left, nav.left)}px, ${lerp(heroRect.top, nav.top)}px)`;
    };

    const setHeroMax = () => {
      if (heroBlock.current) {
        header.style.setProperty(
          "--smngs-hero-max",
          `${heroBlock.current.scrollHeight}px`
        );
      }
    };
    // The hero avatar's expanded position in document coordinates, so the fly
    // avatar keeps a stable target even once the hero has collapsed.
    let anchor = { left: 0, topDoc: 0, width: 0 };
    const measureAnchor = () => {
      const h = (heroAvatar.current ?? ba).getBoundingClientRect();
      anchor = { left: h.left, topDoc: h.top + window.scrollY, width: h.width };
    };
    const heroViewport = () => ({
      left: anchor.left,
      top: anchor.topDoc - window.scrollY,
      width: anchor.width,
    });
    // Both measurements are bogus while the hero is collapsed: scrollHeight
    // under-reports (the vertically-centred content overflows above the padding
    // box and isn't counted, and the vertical padding has collapsed) and the
    // avatar slot sits in the wrong place. Force the fully-expanded layout for
    // the measurement, then restore, so resizing while scrolled down still
    // yields the right values.
    const remeasure = () => {
      const block = heroBlock.current;
      const prevP = header.style.getPropertyValue("--p");
      const prevMax = block?.style.maxHeight;
      header.style.setProperty("--p", "0");
      if (block) block.style.maxHeight = "none";
      setHeroMax();
      measureAnchor();
      if (block) block.style.maxHeight = prevMax ?? "";
      if (prevP) header.style.setProperty("--p", prevP);
      else header.style.removeProperty("--p");
    };

    remeasure();

    const COLLAPSE_AT = 24;
    const EXPAND_AT = 4;
    let target = window.scrollY > COLLAPSE_AT ? 1 : 0;
    let cur = target;
    let raf = 0;

    // `--p` drives the collapse continuously; the attribute is the discrete
    // form of it, for rules that can't be interpolated (pointer-events).
    let collapsed: boolean | null = null;
    const render = () => {
      header.style.setProperty("--p", `${cur}`);
      const isCollapsed = cur > 0.5;
      if (isCollapsed !== collapsed) {
        collapsed = isCollapsed;
        header.dataset.collapsed = String(isCollapsed);
      }
      if (isDesktop()) placeMorph(cur, heroViewport(), ba.getBoundingClientRect());
    };
    const frame = () => {
      cur += (target - cur) * 0.2;
      if (Math.abs(target - cur) < 0.003) cur = target;
      render();
      if (cur !== target) raf = requestAnimationFrame(frame);
    };
    const onScroll = () => {
      const y = window.scrollY;
      const t = y > COLLAPSE_AT ? 1 : y < EXPAND_AT ? 0 : target;
      if (t === target) return;
      target = t;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(frame);
    };
    const onResize = () => {
      remeasure();
      render();
    };

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const alt = avatar.alt ?? "";
  const href = avatar.href ?? "/";
  const link = (className: string, content: React.ReactNode) =>
    brandLink
      ? React.cloneElement(brandLink, { className }, content)
      : <a href={href} className={className}>{content}</a>;

  return (
    <div className={`smngs-navbar-header ${className}`.trim()} ref={headerRef}>
      <Navbar>
        {link(
          "smngs-navbar-brand",
          <img
            className="smngs-navbar-avatar"
            src={avatar.src}
            alt={alt}
            ref={barAvatar}
          />
        )}
        {children}
      </Navbar>

      <div className="smngs-navbar-hero" ref={heroBlock}>
        <div className="smngs-navbar-hero-text">{hero}</div>
        <img
          className="smngs-navbar-hero-avatar"
          src={avatar.src}
          alt={alt}
          ref={heroAvatar}
        />
      </div>

      {/* Desktop only: the single avatar that flies between the two slots. */}
      {React.cloneElement(
        link("smngs-navbar-morph-avatar", <img src={avatar.src} alt={alt} />),
        { ref: morph }
      )}
    </div>
  );
}
