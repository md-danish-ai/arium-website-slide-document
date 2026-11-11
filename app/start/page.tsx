"use client";

import React, { useState, useMemo, useCallback } from "react";
import { PAGE_WIDGETS } from "@data/page.widget";
import { WIDGETS_LIST } from "@data/widget";
import {
  ChildWidget,
  PageWithWidgets,
  WidgetUsagePage,
} from "@/types/widget.types";
import { StartHeader, PageSidebar } from "@components/navigation";
import {
  WebsitePreviewCard,
  WidgetDescription,
  WidgetBlueprintCard,
  WidgetCodeCard,
} from "@components/presentation";

export default function StartPage() {
  const [selectedPageId, setSelectedPageId] = useState<string>("home");
  const [selectedWidgetId, setSelectedWidgetId] = useState<string>("w-home-0");
  const [resetKey, setResetKey] = useState<number>(0);

  const activePage: PageWithWidgets = useMemo(() => {
    return PAGE_WIDGETS.find((p) => p.id === selectedPageId) || PAGE_WIDGETS[0];
  }, [selectedPageId]);

  const activeWidget: ChildWidget = useMemo(() => {
    const foundInPage = activePage.child_widgets?.find(
      (w) => w.id === selectedWidgetId || w.widget_key === selectedWidgetId,
    );
    if (foundInPage) return foundInPage;

    for (const p of PAGE_WIDGETS) {
      const match = p.child_widgets?.find(
        (w) => w.id === selectedWidgetId || w.widget_key === selectedWidgetId,
      );
      if (match) return match;
    }

    return (
      activePage.child_widgets?.[0] || {
        id: "w-home-0",
        position: 0,
        widget_key: "shared.main-hero",
        widgets_title: "Home Main Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Full-bleed canvas hero displaying the primary value proposition, background video or image, and dual CTAs.",
        key_props: ["title", "description", "font_color", "background_color"],
      }
    );
  }, [activePage, selectedWidgetId]);

  const activeFlatWidget = useMemo(() => {
    return (
      WIDGETS_LIST.find((item) => item.id === activeWidget.id) ??
      WIDGETS_LIST.find(
        (item) =>
          item.page_id === activePage.id &&
          item.widget_key === activeWidget.widget_key &&
          item.position === activeWidget.position,
      ) ??
      WIDGETS_LIST.find((item) => item.widget_key === activeWidget.widget_key)
    );
  }, [
    activeWidget.id,
    activeWidget.widget_key,
    activeWidget.position,
    activePage.id,
  ]);

  const usedInPages = useMemo<WidgetUsagePage[]>(() => {
    const pages: WidgetUsagePage[] = [];
    const seenPageIds = new Set<string>();

    const matchesSlug = (
      pId: string,
      pSlug: string,
      pRoute: string,
      target: string,
    ) =>
      pId === target ||
      pSlug === target ||
      pRoute === target ||
      (target === "[slug]" && pId === "dynamic-slug");

    for (const p of PAGE_WIDGETS) {
      const matchingWidget = p.child_widgets.find(
        (cw) => cw.widget_key === activeWidget.widget_key,
      );
      if (matchingWidget && !seenPageIds.has(p.id)) {
        seenPageIds.add(p.id);
        pages.push({
          id: p.id,
          title: p.title,
          label: p.label,
          route: p.route,
          strapiSlug: p.strapi_slug,
          pageCategory: p.category,
          matchingWidgetId: matchingWidget.id,
          matchingWidgetLabel: matchingWidget.widgets_label,
          matchingPosition: matchingWidget.position,
        });
      }
    }

    if (activeFlatWidget) {
      for (const slug of activeFlatWidget.used_in_pages) {
        const matchedPage = PAGE_WIDGETS.find((p) =>
          matchesSlug(p.id, p.strapi_slug, p.route, slug),
        );
        if (matchedPage && !seenPageIds.has(matchedPage.id)) {
          seenPageIds.add(matchedPage.id);
          const matchingWidget = matchedPage.child_widgets.find(
            (cw) => cw.widget_key === activeWidget.widget_key,
          );
          pages.push({
            id: matchedPage.id,
            title: matchedPage.title,
            label: matchedPage.label,
            route: matchedPage.route,
            strapiSlug: matchedPage.strapi_slug,
            pageCategory: matchedPage.category,
            matchingWidgetId: matchingWidget?.id,
            matchingWidgetLabel: matchingWidget?.widgets_label,
            matchingPosition: matchingWidget?.position,
          });
        }
      }
    }

    if (!seenPageIds.has(activePage.id)) {
      pages.unshift({
        id: activePage.id,
        title: activePage.title,
        label: activePage.label,
        route: activePage.route,
        strapiSlug: activePage.strapi_slug,
        pageCategory: activePage.category,
        matchingWidgetId: activeWidget.id,
        matchingWidgetLabel: activeWidget.widgets_label,
        matchingPosition: activeWidget.position,
      });
    }

    return pages;
  }, [activeWidget, activePage, activeFlatWidget]);

  const handleSelectWidget = useCallback((pageId: string, widgetId: string) => {
    setSelectedPageId(pageId);
    setSelectedWidgetId(widgetId);
  }, []);

  const handleSelectPage = useCallback((pageId: string) => {
    setSelectedPageId(pageId);
    const targetPage = PAGE_WIDGETS.find((p) => p.id === pageId);
    if (targetPage?.child_widgets && targetPage.child_widgets.length > 0) {
      setSelectedWidgetId(targetPage.child_widgets[0].id);
    }
  }, []);

  const handleReset = useCallback(() => {
    setSelectedPageId("home");
    setSelectedWidgetId("w-home-0");
    setResetKey((prev) => prev + 1);
  }, []);

  const totalPages = PAGE_WIDGETS.length;
  const totalWidgets = WIDGETS_LIST.length;

  return (
    <main className="relative w-screen h-screen bg-slate-50 text-slate-900 flex flex-col overflow-hidden font-body select-none">
      {/* Subtle White-Light Frosted Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full bg-cyan-100/70 blur-3xl" />
        <div className="absolute top-1/3 right-[-8%] w-[440px] h-[440px] rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="absolute -bottom-36 left-1/3 w-[520px] h-[520px] rounded-full bg-teal-100/55 blur-3xl" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 shrink-0">
        <StartHeader
          totalPages={totalPages}
          totalWidgets={totalWidgets}
          activePageTitle={activePage.title}
          activeWidgetTitle={activeWidget.widgets_title}
          onReset={handleReset}
        />
      </div>

      {/* 3-COLUMN GRID — fills remaining viewport height */}
      <div className="relative z-10 flex-1 min-h-0 px-3 pb-3 md:px-4 md:pb-4 overflow-y-auto lg:overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* COL 1 — Sidebar (3 cols) */}
          <div className="lg:col-span-3 min-h-[350px] lg:min-h-0 overflow-hidden">
            <PageSidebar
              key={resetKey}
              pages={PAGE_WIDGETS}
              flatWidgets={WIDGETS_LIST}
              selectedPageId={selectedPageId}
              selectedWidgetId={selectedWidgetId}
              defaultOpenPageId="home"
              onSelectWidget={handleSelectWidget}
              onSelectPage={handleSelectPage}
            />
          </div>

          {/* COL 2 — Preview + Description (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 min-h-0 overflow-y-auto lg:overflow-hidden">
            <div className="shrink-0">
              <WebsitePreviewCard
                widget={activeWidget}
                page={activePage}
                heightClass="h-56 md:h-60"
              />
            </div>
            {/* Description — fills rest */}
            <div className="flex-1 min-h-0">
              <WidgetDescription
                widget={activeWidget}
                page={activePage}
                usedInPages={usedInPages}
                flatWidget={activeFlatWidget}
                onNavigateToPage={handleSelectPage}
                onSelectWidget={handleSelectWidget}
              />
            </div>
          </div>

          {/* COL 3 — Blueprint + Code (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3 min-h-0 overflow-hidden">
            {/* Blueprint — fixed/shrink height */}
            <div className="shrink-0">
              <WidgetBlueprintCard
                widget={activeWidget}
                page={activePage}
                heightClass="h-56 md:h-60"
              />
            </div>
            {/* Code — fills rest of column */}
            <div className="flex-1 min-h-0 flex flex-col">
              <WidgetCodeCard
                widget={activeWidget}
                widgetsResponse={activeFlatWidget?.widgets_response}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
