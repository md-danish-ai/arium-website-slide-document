"use client";

import React, { useState } from "react";
import { ChildWidget, WidgetResponseSchema } from "@/types/widget.types";
import { WIDGETS_LIST } from "@data/widget";
import { WIDGETS_RESPONSES } from "@data/widgets.response";
import { Card } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Copy, Check, Terminal } from "lucide-react";
import { cn } from "@lib/utils";

interface WidgetCodeCardProps {
  widget: ChildWidget;
  widgetsResponse?: WidgetResponseSchema;
}

function renderJsonValue(value: string) {
  const trimmed = value.trim();
  if (trimmed.startsWith('"')) {
    return (
      <span className="text-emerald-700 dark:text-emerald-300">{value}</span>
    );
  }
  if (
    trimmed === "true" ||
    trimmed === "false" ||
    trimmed === "true," ||
    trimmed === "false,"
  ) {
    return (
      <span className="text-violet-700 dark:text-secondary-purple font-medium">
        {value}
      </span>
    );
  }
  return <span className="text-slate-600 dark:text-amber-200">{value}</span>;
}

function renderJsonLine(line: string) {
  const match = line.match(/^(\s*)("[^"]+")(\s*:\s*)(.*)$/);
  if (!match) {
    return <span className="text-slate-500 dark:text-slate-400">{line}</span>;
  }

  const [, indent, keyToken, separator, valuePart] = match;
  return (
    <>
      <span>{indent}</span>
      <span className="text-cyan-700 dark:text-teal font-medium">
        {keyToken}
      </span>
      <span className="text-slate-400 dark:text-slate-500">{separator}</span>
      {renderJsonValue(valuePart)}
    </>
  );
}

export function WidgetCodeCard({
  widget,
  widgetsResponse,
}: WidgetCodeCardProps) {
  const [copied, setCopied] = useState(false);

  const resolvedResponse =
    widget.widgets_response ??
    widgetsResponse ??
    WIDGETS_LIST.find(
      (item) =>
        item.id === widget.id ||
        (item.widget_key === widget.widget_key &&
          item.position === widget.position),
    )?.widgets_response ??
    WIDGETS_RESPONSES[widget.widget_key as keyof typeof WIDGETS_RESPONSES];

  const strapiSchemaCode = resolvedResponse
    ? JSON.stringify(resolvedResponse, null, 2)
    : JSON.stringify(
        {
          collectionName: `components_${widget.widget_key.replace(/[^a-zA-Z0-9]+/g, "_")}`,
          info: {
            displayName: widget.widgets_label,
            icon: "layer",
            category: widget.category,
            description: widget.description,
          },
          options: { timestamps: true },
          attributes: {},
        },
        null,
        2,
      );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(strapiSchemaCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const lines = strapiSchemaCode.split("\n");

  return (
    <Card
      id="widget-code-viewer"
      variant="glass"
      className="w-full h-full flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 bg-white/90 dark:bg-midnight/90 backdrop-blur-md border-b border-slate-200/80 dark:border-midnight-lightest select-none transition-colors duration-200">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-slate-500 dark:text-teal" />
          <h3 className="text-xs font-bold text-slate-700 dark:text-slate-100 uppercase tracking-wide">
            Widgets Response
          </h3>
          <Badge
            variant="glass"
            className="text-[10px] font-mono px-1.5 py-0 rounded-md"
          >
            JSON
          </Badge>
        </div>

        <Button
          variant="glass"
          size="xs"
          onClick={handleCopy}
          className={cn(
            "h-7 px-2.5 text-xs font-medium",
            copied &&
              "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-400/40 dark:hover:bg-emerald-500/20",
          )}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>

      {/* Code Body — theme-aware surface with word-wrapped JSON */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-[#0f1738] font-mono text-[11px] leading-relaxed p-3 glass-scrollbar transition-colors duration-200">
        <pre className="w-full space-y-0.5 text-slate-700 dark:text-slate-300 m-0">
          {lines.map((line: string, i: number) => (
            <div key={i} className="flex items-start w-full min-w-0">
              <span className="select-none text-right w-7 pr-2.5 text-slate-400 dark:text-slate-500 border-r border-slate-200/80 dark:border-midnight-lightest shrink-0 leading-5 text-[10px] tabular-nums">
                {i + 1}
              </span>
              <code className="pl-3 flex-1 min-w-0 leading-5 whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
                {renderJsonLine(line)}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </Card>
  );
}
