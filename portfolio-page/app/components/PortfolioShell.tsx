"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { projects } from "@/app/data/projects";

export default function PortfolioShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pendingPath = useRef<string | null>(null);
  const isInitialRender = useRef(true);

  const navigate = useCallback(
    (path: string) => {
      if (path === pathname || isTransitioning) return;

      pendingPath.current = path;
      setIsTransitioning(true);

      setTimeout(() => {
        router.push(path);
      }, 300);
    },
    [pathname, isTransitioning, router],
  );

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (pendingPath.current === pathname) {
      pendingPath.current = null;
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }
  }, [pathname]);

  const isHome = pathname === "/";
  const currentSlug = pathname.slice(1);
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <div className="flex h-svh font-sans max-w-6xl mx-auto overflow-hidden">
      {/* Sidebar — full screen on mobile home, hidden on mobile project */}
      <aside
        className={`shrink-0 h-full px-8 py-8 lg:py-16 flex flex-col justify-between overflow-y-auto scroll-invisible ${
          isHome ? "flex w-full md:w-auto" : "hidden md:flex md:w-auto"
        }`}
      >
        <div>
          <button
            onClick={() => navigate("/")}
            className={`truncate text-xl leading-none font-medium tracking-tight mb-10 block cursor-pointer transition-colors duration-200 ${
              isHome ? "text-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            Matias Monzalvo
          </button>
          <nav>
            <ul className="space-y-1">
              {projects.map((project) => {
                const projectPath = `/${project.slug}`;
                const isActive = pathname === projectPath;

                return (
                  <li key={project.slug}>
                    <button
                      onClick={() => navigate(projectPath)}
                      className={`w-full text-left py-2 rounded-md text-sm transition-colors duration-200 cursor-pointer flex items-end justify-start gap-2 group ${
                        isActive
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      <span className="truncate text-xl leading-none">
                        {project.title}
                      </span>
                      <span
                        className={`text-xs leading-none font-semibold ${
                          isActive
                            ? "text-muted"
                            : "text-muted/60 group-hover:text-muted"
                        }`}
                      >
                        {project.year}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Content — hidden on mobile home, full screen on mobile project */}
      <main
        className={`flex-1 h-full min-h-0 p-8 lg:p-16 overflow-y-auto scroll-invisible ${
          isHome ? "hidden md:flex md:items-start" : "flex items-start"
        }`}
      >
        <div className="max-w-3xl w-full flex flex-col min-h-0 h-full">
          {/* Mobile back button */}
          {!isHome && (
            <button
              onClick={() => navigate("/")}
              className="md:hidden flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-8 cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Proyectos
            </button>
          )}

          {/* Page content with transition */}
          <div
            className="flex-1 transition-all duration-300 ease-in-out"
            style={{
              opacity: isTransitioning ? 0 : 1,
              filter: isTransitioning ? "blur(8px)" : "blur(0px)",
            }}
          >
            {children}
          </div>

          {/* Prev / Next navigation */}
          {!isHome && (prevProject || nextProject) && (
            <nav
              className="flex items-center justify-between pt-12 pb-4 mt-auto border-t border-border transition-all duration-300 ease-in-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                filter: isTransitioning ? "blur(8px)" : "blur(0px)",
              }}
            >
              {prevProject ? (
                <button
                  onClick={() => navigate(`/${prevProject.slug}`)}
                  className="flex flex-col items-start gap-1 text-muted hover:text-foreground transition-colors cursor-pointer group"
                >
                  <span className="text-xs flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5" />
                      <path d="M12 19l-7-7 7-7" />
                    </svg>
                    Anterior
                  </span>
                  <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    {prevProject.title}
                  </span>
                </button>
              ) : (
                <div />
              )}
              {nextProject ? (
                <button
                  onClick={() => navigate(`/${nextProject.slug}`)}
                  className="flex flex-col items-end gap-1 text-muted hover:text-foreground transition-colors cursor-pointer group"
                >
                  <span className="text-xs flex items-center gap-1">
                    Siguiente
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    {nextProject.title}
                  </span>
                </button>
              ) : (
                <div />
              )}
            </nav>
          )}
        </div>
      </main>
    </div>
  );
}
