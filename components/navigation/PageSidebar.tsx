"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { PageWithWidgets, FlatWidget } from "@/types/widget.types";
import { Card } from "@components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@components/ui/tabs";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import { SidebarCollapsibleGroup } from "./SidebarCollapsibleGroup";
import { SidebarWidgetItem } from "./SidebarWidgetItem";
import { Layers, LayoutGrid, Search, X } from "lucide-react";
import { cn } from "@lib/utils";

export type SidebarMode = "by-page" | "all-widgets";

export interface PageSidebarProps {
  pages: PageWithWidgets[];
  flatWidgets: FlatWidget[];
  selectedPageId: string;
  selectedWidgetId: string;
  selectedWidgetKey?: string;
  onSelectWidget: (pageId: string, widgetId: string) => void;
  onSelectPage: (pageId: string) => void;
  mode?: SidebarMode;
  defaultMode?: SidebarMode;
  onModeChange?: (mode: SidebarMode) => void;
  showModeTabs?: boolean;
  defaultOpenPageId?: string;
  className?: string;
}

/**
 * Reusable White Frosted Glass Sidebar supporting both By Page (animated tree)
 * and All Widgets (independent numbered list) via shared Shadcn UI primitives.
 */
export function PageSidebar({
  pages,
  flatWidgets,
  selectedPageId,
  selectedWidgetId,
  selectedWidgetKey,
  onSelectWidget,
  onSelectPage,
  mode,
  defaultMode = "by-page",
  onModeChange,
  showModeTabs = true,
  defaultOpenPageId = "home",
  className,
}: PageSidebarProps) {
  const [internalMode, setInternalMode] = useState<SidebarMode>(defaultMode);
  const activeMode = mode ?? internalMode;

  const [searchQuery, setSearchQuery] = useState("");
  const [allWidgetsSelectedId, setAllWidgetsSelectedId] = useState<
    string | null
  >(null);
  const [prevSelectedPageId, setPrevSelectedPageId] = useState(selectedPageId);
  const [prevMode, setPrevMode] = useState<SidebarMode>(activeMode);

  // Default: ONLY Home (defaultOpenPageId) is open; all other pages are closed
  const buildSingleOpenMap = (openPageId: string) => {
    const map: Record<string, boolean> = {};
    pages.forEach((p) => {
      map[p.id] = p.id === openPageId;
    });
    return map;
  };

  const [expandedPages, setExpandedPages] = useState<Record<string, boolean>>(
    () => buildSingleOpenMap(defaultOpenPageId),
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Buttery-smooth wheel scroll interpolation with hidden scrollbar
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let targetScroll = el.scrollTop;
    let currentScroll = el.scrollTop;
    let rafId: number | null = null;

    const animateScroll = () => {
      const diff = targetScroll - currentScroll;
      if (Math.abs(diff) < 0.5) {
        el.scrollTop = targetScroll;
        rafId = null;
        return;
      }
      currentScroll += diff * 0.18;
      el.scrollTop = currentScroll;
      rafId = requestAnimationFrame(animateScroll);
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || el.scrollHeight <= el.clientHeight) return;
      e.preventDefault();

      if (rafId === null) {
        currentScroll = el.scrollTop;
        targetScroll = el.scrollTop;
      }

      const delta =
        e.deltaMode === 1
          ? e.deltaY * 32
          : e.deltaMode === 2
            ? e.deltaY * el.clientHeight
            : e.deltaY;

      const maxScroll = el.scrollHeight - el.clientHeight;
      targetScroll = Math.max(0, Math.min(maxScroll, targetScroll + delta));

      if (rafId === null) {
        rafId = requestAnimationFrame(animateScroll);
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Keep ONLY the newly selected page open when navigated externally (e.g. Usage chips)
  if (selectedPageId !== prevSelectedPageId || activeMode !== prevMode) {
    setPrevSelectedPageId(selectedPageId);
    setPrevMode(activeMode);
    if (activeMode === "by-page" && selectedPageId) {
      setExpandedPages(buildSingleOpenMap(selectedPageId));
    }
  }

  const handleModeChange = (nextMode: string) => {
    const typed = nextMode as SidebarMode;
    if (mode === undefined) setInternalMode(typed);
    setSearchQuery("");
    if (typed === "all-widgets") {
      setAllWidgetsSelectedId(null);
    } else if (selectedPageId) {
      setExpandedPages(buildSingleOpenMap(selectedPageId));
    }
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    onModeChange?.(typed);
  };

  const handlePageHeaderClick = (page: PageWithWidgets) => {
    const isCurrentlyOpen = Boolean(expandedPages[page.id]);
    if (isCurrentlyOpen) {
      setExpandedPages((prev) => ({ ...prev, [page.id]: false }));
      return;
    }

    setPrevSelectedPageId(page.id);
    setExpandedPages(buildSingleOpenMap(page.id));
    onSelectPage(page.id);
  };

  const filteredPages = useMemo(() => {
    if (!searchQuery.trim()) return pages;
    const query = searchQuery.toLowerCase();
    return pages
      .map((p) => {
        const pageMatches =
          p.title.toLowerCase().includes(query) ||
          p.label.toLowerCase().includes(query) ||
          p.route.toLowerCase().includes(query);
        const matchingWidgets = p.child_widgets.filter(
          (w) =>
            w.widgets_title.toLowerCase().includes(query) ||
            w.widgets_label.toLowerCase().includes(query) ||
            w.widget_key.toLowerCase().includes(query) ||
            w.category.toLowerCase().includes(query),
        );
        if (pageMatches || matchingWidgets.length > 0) {
          return {
            ...p,
            child_widgets: pageMatches ? p.child_widgets : matchingWidgets,
          };
        }
        return null;
      })
      .filter(Boolean) as PageWithWidgets[];
  }, [pages, searchQuery]);

  const filteredFlatWidgets = useMemo(() => {
    if (!searchQuery.trim()) return flatWidgets;
    const query = searchQuery.toLowerCase();
    return flatWidgets.filter(
      (w) =>
        w.widgets_title.toLowerCase().includes(query) ||
        w.widgets_label.toLowerCase().includes(query) ||
        w.widget_key.toLowerCase().includes(query) ||
        w.category.toLowerCase().includes(query),
    );
  }, [flatWidgets, searchQuery]);

  return (
    <Card
      variant="glass"
      className={cn(
        "h-full flex flex-col p-2.5 rounded-xl overflow-hidden",
        className,
      )}
    >
      {/* Reusable Mode Tabs with Icons & Smooth Sliding Indicator */}
      {showModeTabs && (
        <div className="pt-1 pb-3">
          <Tabs value={activeMode} onValueChange={handleModeChange}>
            <TabsList
              variant="glass"
              className="relative w-full grid grid-cols-2 h-auto p-1 rounded-lg overflow-hidden"
            >
              {/* Animated sliding Midnight-Teal pill */}
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-md bg-gradient-to-r from-[#162047] via-[#1c2a55] to-[#134e6f] shadow-sm ring-1 ring-cyan-400/30 dark:ring-cyan-400/45 transition-transform duration-200 ease-out",
                  activeMode === "all-widgets"
                    ? "translate-x-full"
                    : "translate-x-0",
                )}
              />
              {[
                { value: "by-page", label: "BY PAGE", Icon: Layers },
                { value: "all-widgets", label: "BY WIDGETS", Icon: LayoutGrid },
              ].map(({ value, label, Icon }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="relative z-10 gap-1.5 py-2 rounded-md text-xs font-semibold tracking-wide cursor-pointer transition-all duration-200 ease-out transform-gpu hover:scale-[1.02] active:scale-[0.98] dark:text-slate-300 dark:hover:text-white data-[state=active]:bg-transparent data-[state=active]:text-white dark:data-[state=active]:bg-transparent dark:data-[state=active]:text-white data-[state=active]:shadow-none"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}

      {/* Search Filter */}
      <div className="relative mb-2">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none z-10" />
        <Input
          type="text"
          variant="glass"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            activeMode === "by-page"
              ? "Filter pages or widgets..."
              : "Filter widgets..."
          }
          className="pl-8 pr-7 rounded-md"
        />
        {searchQuery && (
          <Button
            type="button"
            variant="ghost"
            size="xs"
            aria-label="Clear filter"
            onClick={() => setSearchQuery("")}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-transparent"
          >
            <X className="w-3.5 h-3.5" />
          </Button>
        )}
      </div>

      <Separator className="mb-2 bg-slate-200/70 dark:bg-midnight-lightest" />

      {/* Reusable List Container */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto space-y-2 px-1 py-0.5 no-scrollbar"
      >
        {activeMode === "by-page" ? (
          filteredPages.length === 0 ? (
            <div className="p-6 text-center text-slate-400 text-xs">
              No results for &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredPages.map((page, index) => {
              const isPageSelected = page.id === selectedPageId;
              const isExpanded =
                Boolean(expandedPages[page.id]) ||
                searchQuery.trim().length > 0;

              return (
                <SidebarCollapsibleGroup
                  key={page.id}
                  index={index}
                  title={`${page.label} Page`}
                  count={page.child_widgets?.length ?? 0}
                  isSelected={isPageSelected}
                  isOpen={isExpanded}
                  onHeaderClick={() => handlePageHeaderClick(page)}
                >
                  {page.child_widgets?.length > 0 ? (
                    page.child_widgets.map((widget) => {
                      const isActive =
                        widget.id === selectedWidgetId &&
                        page.id === selectedPageId;
                      return (
                        <SidebarWidgetItem
                          key={widget.id}
                          label={widget.widgets_label || widget.widget_key}
                          category={widget.category}
                          isActive={isActive}
                          onClick={() => onSelectWidget(page.id, widget.id)}
                        />
                      );
                    })
                  ) : (
                    <div className="text-[11px] text-slate-400 italic p-2 text-center">
                      No widgets.
                    </div>
                  )}
                </SidebarCollapsibleGroup>
              );
            })
          )
        ) : filteredFlatWidgets.length === 0 ? (
          <div className="p-6 text-center text-slate-400 text-xs">
            No widgets match &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          <div className="space-y-2">
            {filteredFlatWidgets.map((flat, index) => {
              const isSelected = selectedWidgetKey
                ? flat.widget_key === selectedWidgetKey
                : allWidgetsSelectedId === flat.id;

              return (
                <SidebarWidgetItem
                  key={flat.id}
                  index={index}
                  label={flat.widgets_label || flat.widget_key}
                  category={flat.category}
                  isActive={isSelected}
                  onClick={() => {
                    setAllWidgetsSelectedId(flat.id);
                    onSelectWidget(flat.page_id, flat.widget_key);
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}
