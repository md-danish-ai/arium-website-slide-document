"use client";

import React, { useState } from "react";
import { ChildWidget } from "@/types/widget.types";
import { generateWidgetCode } from "@lib/widget-helpers";
import { Button } from "@components/ui/button";
import { Copy, Check, Terminal } from "lucide-react";
import { cn } from "@lib/utils";

interface WidgetCodeCardProps {
  widget: ChildWidget;
}

type CodeTab = "component" | "interface" | "schema";


export function WidgetCodeCard({ widget }: WidgetCodeCardProps) {
  const [activeTab, setActiveTab] = useState<CodeTab>("schema");
  const [copied, setCopied] = useState(false);

  const codes = generateWidgetCode(widget);

  const getActiveCode = () => {
    switch (activeTab) {
      case "component": return codes.reactComponentCode;
      case "interface": return codes.tsInterfaceCode;
      case "schema":    return codes.strapiSchemaCode;
    }
  };

  const getActiveLanguage = () => {
    switch (activeTab) {
      case "component": return "TSX";
      case "interface": return "TS";
      case "schema":    return "JSON";
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getActiveCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const lines = getActiveCode().split("\n");

  const TABS: { key: CodeTab; label: string }[] = [
    { key: "component", label: "React TSX" },
    { key: "interface", label: "Props" },
    { key: "schema",    label: "Strapi Schema" },
  ];

  return (
    <div
      id="widget-code-viewer"
      className="w-full h-full flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 bg-slate-50 border-b border-slate-200 select-none">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-slate-500" />
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
            Widget Code
          </h3>
          <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500">
            {getActiveLanguage()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Tabs */}
          <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200">
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={cn(
                  "px-2.5 py-1 text-[11px] font-medium rounded-md transition-all",
                  activeTab === key
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                    : "text-slate-500 hover:text-slate-700"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Copy */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className={cn(
              "h-7 px-2.5 text-xs font-medium border transition-all",
              copied
                ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
            )}
          >
            {copied ? (
              <><Check className="w-3.5 h-3.5 mr-1 text-emerald-500" />Copied</>
            ) : (
              <><Copy className="w-3.5 h-3.5 mr-1" />Copy</>
            )}
          </Button>
        </div>
      </div>

      {/* Code Body — keep dark for readability */}
      <div className="flex-1 overflow-auto bg-[#0f1117] font-mono text-[11px] leading-relaxed p-3">
        <div className="flex min-w-full">
          {/* Line numbers */}
          <div className="select-none text-right pr-3.5 text-slate-600 space-y-0.5 border-r border-slate-700/50 shrink-0">
            {lines.map((_: string, i: number) => (
              <div key={i} className="leading-5 text-[10px]">{i + 1}</div>
            ))}
          </div>

          {/* Syntax */}
          <pre className="pl-3.5 flex-1 overflow-x-auto space-y-0.5 text-slate-100">
            {lines.map((line: string, i: number) => {
              const isComment = line.trim().startsWith("//") || line.trim().startsWith("/*") || line.trim().startsWith("*");
              const isImport  = line.trim().startsWith("import") || line.trim().startsWith("export");
              const isTag     = line.includes("<") && line.includes(">");
              const isJsonKey = line.trim().startsWith('"') && line.includes('":');

              return (
                <div key={i} className="leading-5 whitespace-pre">
                  {isComment ? (
                    <span className="text-slate-500 italic">{line}</span>
                  ) : isImport ? (
                    <span className="text-purple-300">{line}</span>
                  ) : isTag ? (
                    <span className="text-cyan-300">{line}</span>
                  ) : isJsonKey ? (
                    <span className="text-amber-200">{line}</span>
                  ) : (
                    line
                  )}
                </div>
              );
            })}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3.5 py-2 bg-slate-50 border-t border-slate-200 text-[10px] font-mono text-slate-500 flex items-center justify-between">
        <span>Component: <strong className="text-slate-700">{widget.component_tag}</strong></span>
        <span className="text-cyan-600 font-semibold">Canonical Layer 3</span>
      </div>
    </div>
  );
}
