import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export function useHomePageScroll() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const showMarkers =
      typeof window !== "undefined" &&
      window.location.search.includes("gsapMarkers=1");
    const useDefaultMarkers =
      showMarkers &&
      typeof window !== "undefined" &&
      window.location.search.includes("gsapMarkerDefault=1");

    const useShortScrollerLabels =
      showMarkers &&
      !useDefaultMarkers &&
      typeof window !== "undefined" &&
      window.location.search.includes("gsapMarkerShortScroller=1");

    let markerStyle = null;
    if (useShortScrollerLabels) {
      markerStyle = document.createElement("style");
      markerStyle.setAttribute("data-gsap-marker-style", "true");
      markerStyle.textContent = `
        .gsap-marker-scroller-start,
        .gsap-marker-scroller-end {
          color: transparent !important;
        }
        .gsap-marker-scroller-start::after,
        .gsap-marker-scroller-end::after {
          color: inherit;
          font: inherit;
          text-transform: none;
        }
        .gsap-marker-scroller-start::after {
          content: "start";
        }
        .gsap-marker-scroller-end::after {
          content: "end";
        }
      `;
      document.head.appendChild(markerStyle);
    }

    const homeRoot =
      document.querySelector(".main-wrapper") || document.documentElement;
    const backdropImage = document.querySelector(
      '[class*="homeBackdropImage"]'
    );

    const getDefaultBackground = () => {
      const rootStyles = getComputedStyle(homeRoot);
      return {
        color: rootStyles.getPropertyValue("--home-bg-color").trim(),
        image: rootStyles.getPropertyValue("--home-bg-image").trim(),
        blur: rootStyles.getPropertyValue("--home-bg-blur").trim(),
        fade: rootStyles.getPropertyValue("--home-bg-fade").trim(),
      };
    };

    let defaultBackground = getDefaultBackground();

    const normalizeImageValue = (value) => {
      if (!value || value === "none") {
        return "none";
      }

      if (value.startsWith("url(")) {
        return value;
      }

      return `url("${value}")`;
    };

    let currentImage = defaultBackground.image || "none";
    let currentColor = defaultBackground.color || "var(--ifm-background-color)";

    const applyBackground = (section) => {
      const color =
        section.getAttribute("data-bg-color") || "var(--ifm-background-color)";
      const image = normalizeImageValue(section.getAttribute("data-bg-image"));
      const blur = section.getAttribute("data-bg-blur") || "18px";
      const fade =
        section.getAttribute("data-bg-fade") ||
        defaultBackground.fade ||
        "0.95";

      if (image !== currentImage) {
        if (backdropImage) {
          gsap.killTweensOf(backdropImage);
          gsap.to(backdropImage, {
            autoAlpha: 0,
            duration: 0.35,
            ease: "power2.out",
            onComplete: () => {
              homeRoot.style.setProperty("--home-bg-image", image);
              gsap.to(backdropImage, {
                autoAlpha: 1,
                duration: 0.8,
                ease: "power2.out",
              });
            },
          });
        } else {
          homeRoot.style.setProperty("--home-bg-image", image);
        }
        currentImage = image;
      }
      if (color !== currentColor) {
        const colorTimeline = gsap.timeline({ overwrite: "auto" });
        colorTimeline.to(homeRoot, {
          "--home-bg-fade": 0,
          duration: 0.2,
          ease: "power2.out",
        });
        colorTimeline.add(() => {
          homeRoot.style.setProperty("--home-bg-color", color);
        });
        colorTimeline.to(homeRoot, {
          "--home-bg-fade": fade,
          duration: 0.6,
          ease: "power2.out",
        });
        currentColor = color;
      } else {
        homeRoot.style.setProperty("--home-bg-color", color);
        gsap.to(homeRoot, {
          duration: 0.5,
          ease: "power2.out",
          "--home-bg-fade": fade,
          overwrite: "auto",
        });
      }
      gsap.to(homeRoot, {
        duration: 0.8,
        ease: "power2.out",
        "--home-bg-blur": blur,
        overwrite: "auto",
      });
    };

    const resetBackground = () => {
      if (backdropImage) {
        gsap.to(backdropImage, {
          autoAlpha: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            homeRoot.style.setProperty(
              "--home-bg-image",
              defaultBackground.image || "none"
            );
          },
        });
        currentImage = defaultBackground.image || "none";
      } else {
        homeRoot.style.setProperty(
          "--home-bg-image",
          defaultBackground.image || "none"
        );
      }
      homeRoot.style.setProperty(
        "--home-bg-color",
        defaultBackground.color || "var(--ifm-background-color)"
      );
      gsap.to(homeRoot, {
        duration: 0.6,
        ease: "power2.out",
        "--home-bg-blur": defaultBackground.blur || "6px",
        "--home-bg-fade": defaultBackground.fade || "0.95",
        overwrite: "auto",
      });
      currentColor = defaultBackground.color || "var(--ifm-background-color)";
    };

    const revealTargets = gsap.utils.toArray("[data-scroll-reveal]");
    revealTargets.forEach((target, index) => {
      const revealId = target.getAttribute("data-scroll-reveal-id");
      const markerId = revealId || `reveal-${index + 1}`;
      gsap.fromTo(
        target,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: target,
            start: "top 85%",
            ...(useDefaultMarkers ? {} : { id: markerId }),
            markers: showMarkers,
          },
        }
      );
    });

    const handleScrollTo = (event) => {
      const trigger = event.target.closest("[data-scroll-to]");
      if (!trigger) {
        return;
      }

      const selector = trigger.getAttribute("data-scroll-to");
      if (!selector) {
        return;
      }

      const target = document.querySelector(selector);
      if (!target) {
        return;
      }

      event.preventDefault();
      gsap.to(window, {
        duration: 1,
        ease: "power2.out",
        scrollTo: { y: target, autoKill: true, offsetY: 20 },
      });
    };

    document.addEventListener("click", handleScrollTo);

    const sections = gsap.utils.toArray("[data-home-section]");
    sections.forEach((section, index) => {
      const sectionId =
        section.getAttribute("id") || `home-section-${index + 1}`;
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => applyBackground(section),
        onEnterBack: () => applyBackground(section),
        onLeaveBack: () => {
          if (index === 0) {
            resetBackground();
          }
        },
        onRefresh: (self) => {
          if (self.isActive) {
            applyBackground(section);
          }
        },
        ...(useDefaultMarkers ? {} : { id: sectionId }),
        markers: showMarkers,
      });

      if (trigger.isActive) {
        applyBackground(section);
      }
    });

    const handleThemeChange = () => {
      defaultBackground = getDefaultBackground();
    };

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      document.removeEventListener("click", handleScrollTo);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      themeObserver.disconnect();
      homeRoot.style.removeProperty("--home-bg-image");
      homeRoot.style.removeProperty("--home-bg-color");
      homeRoot.style.removeProperty("--home-bg-blur");
    };
  }, []);
}
