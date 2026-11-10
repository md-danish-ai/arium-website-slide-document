"use client";

import React, { useState, useMemo } from "react";
import { PageWithWidgets, FlatWidget } from "@/types/widget.types";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { cn } from "@lib/utils";

interface PageSidebarProps {
  pages: PageWithWidgets[];
  flatWidgets: FlatWidget[];
  selectedPageId: string;
  selectedWidgetId: string;
  onSelectWidget: (pageId: string, widgetId: string) => void;
  onSelectPage: (pageId: string) => void;
}

export function PageSidebar({
  pages,
  flatWidgets,
  selectedPageId,
  selectedWidgetId,
  onSelectWidget,
  onSelectPage,
}: PageSidebarProps) {
  const [activeTab, setActiveTab] = useState<"by-page" | "all-widgets">("by-page");
  const [searchQuery, setSearchQuery] = useState("");

  const [expandedPages, setExpandedPages] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    pages.forEach((p, idx) => {
      initial[p.id] = idx < 3 || p.id === selectedPageId;
    });
    return initial;
  });

  const togglePageAccordion = (pageId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedPages((prev) => ({ ...prev, [pageId]: !prev[pageId] }));
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
            w.component_name.toLowerCase().includes(query) ||
            w.category.toLowerCase().includes(query)
        );
        if (pageMatches || matchingWidgets.length > 0) {
          return { ...p, child_widgets: pageMatches ? p.child_widgets : matchingWidgets };
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
        w.component_name.toLowerCase().includes(query) ||
        w.category.toLowerCase().includes(query) ||
        w.page_label.toLowerCase().includes(query)
    );
  }, [flatWidgets, searchQuery]);

  // Category color map (light theme)
  const categoryColor: Record<string, string> = {
    hero: "bg-cyan-50 text-cyan-700 border-cyan-200",
    feature: "bg-purple-50 text-purple-700 border-purple-200",
    stats: "bg-emerald-50 text-emerald-700 border-emerald-200",
    flow: "bg-violet-50 text-violet-700 border-violet-200",
    cta: "bg-amber-50 text-amber-700 border-amber-200",
  };

  return (
    <aside className="h-full flex flex-col bg-white border border-slate-200 rounded-xl p-3 shadow-sm overflow-hidden">
      {/* Tab Switcher */}
      <div className="flex items-center gap-1 pb-3 border-b border-slate-100">
        <div className="inline-flex rounded-lg bg-slate-100 p-0.5 w-full">
          <button
            type="button"
            onClick={() => setActiveTab("by-page")}
            className={cn(
              "flex-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all",
              activeTab === "by-page"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            )}
          >
            BY PAGE
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("all-widgets")}
            className={cn(
              "flex-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all",
              activeTab === "all-widgets"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            )}
          >
            ALL WIDGETS
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative my-2.5">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter pages or widgets..."
          className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
          >
            ×
          </button>
        )}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto space-y-1.5 pr-0.5">
        {activeTab === "by-page" ? (
          filteredPages.length === 0 ? (
            <div className="p-6 text-center text-slate-400 text-xs">
              No results for &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredPages.map((page, index) => {
              const isPageSelected = page.id === selectedPageId;
              const isExpanded = !!expandedPages[page.id] || searchQuery.length > 0;

              return (
                <div
                  key={page.id}
                  className={cn(
                    "rounded-lg border transition-all duration-150 overflow-hidden",
                    isPageSelected
                      ? "border-cyan-300 bg-cyan-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  )}
                >
                  {/* Page Header */}
                  <div
                    onClick={() => {
                      onSelectPage(page.id);
                      togglePageAccordion(page.id);
                      if (page.child_widgets?.length > 0) {
                        onSelectWidget(page.id, page.child_widgets[0].id);
                      }
                    }}
                    className="flex items-center justify-between px-3 py-2 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-bold text-slate-400 shrink-0 font-mono">
                        {index + 1}.
                      </span>
                      <span
                        className={cn(
                          "text-xs font-semibold truncate",
                          isPageSelected ? "text-cyan-700" : "text-slate-700"
                        )}
                      >
                        {page.label} Page
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200 shrink-0">
                        {page.child_widgets?.length ?? 0}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => togglePageAccordion(page.id, e)}
                      aria-label="Toggle"
                      className="p-0.5 rounded text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Child Widgets */}
                  {isExpanded && (
                    <div className="px-2 pb-1.5 space-y-0.5 border-t border-slate-100">
                      {page.child_widgets?.length > 0 ? (
                        page.child_widgets.map((widget) => {
                          const isActive =
                            widget.id === selectedWidgetId && page.id === selectedPageId;
                          return (
                            <button
                              key={widget.id}
                              type="button"
                              onClick={() => onSelectWidget(page.id, widget.id)}
                              className={cn(
                                "w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left text-xs transition-all",
                                isActive
                                  ? "bg-cyan-500 text-white"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                              )}
                            >
                              <span className="truncate font-medium">
                                {widget.widgets_label || widget.component_name}
                              </span>
                              <span
                                className={cn(
                                  "text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border shrink-0 ml-1.5",
                                  isActive
                                    ? "bg-white/20 text-white border-white/30"
                                    : (categoryColor[widget.category] ??
                                      "bg-slate-100 text-slate-500 border-slate-200")
                                )}
                              >
                                {widget.category}
                              </span>
                            </button>
                          );
                        })
                      ) : (
                        <div className="text-[11px] text-slate-400 italic p-2 text-center">
                          No widgets.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )
        ) : (
          /* ALL WIDGETS flat list */
          <div className="space-y-1">
            {filteredFlatWidgets.map((flat) => {
              const isSelected =
                flat.id === selectedWidgetId ||
                (flat.widget_key && flat.widget_key === selectedWidgetId);
              return (
                <button
                  key={flat.id}
                  type="button"
                  onClick={() => onSelectWidget(flat.page_id, flat.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-2.5 rounded-lg text-left text-xs transition-all border",
                    isSelected
                      ? "bg-cyan-500 text-white border-cyan-500"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  )}
                >
                  <div className="truncate pr-2">
                    <span className="font-semibold truncate block">
                      {flat.widgets_label || flat.component_name}
                    </span>
                    <span className={cn("text-[10px] truncate block mt-0.5", isSelected ? "text-white/70" : "text-slate-400")}>
                      {flat.page_label}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border shrink-0",
                      isSelected
                        ? "bg-white/20 text-white border-white/30"
                        : (categoryColor[flat.category] ?? "bg-slate-100 text-slate-500 border-slate-200")
                    )}
                  >
                    {flat.category}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-2 mt-1.5 border-t border-slate-100 text-[10px] font-mono text-slate-400 flex items-center justify-between">
        <span>Canonical Architecture</span>
        <span className="text-cyan-600 font-semibold">Strapi v5</span>
      </div>
    </aside>
  );
}
