"use client";

import * as React from "react";

export function useActiveSection(sectionIds: string[], rootMargin = "-45% 0px -45% 0px") {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}




