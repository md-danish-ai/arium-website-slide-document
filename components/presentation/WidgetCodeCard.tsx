"use client";

import React, { useState } from "react";
import { ChildWidget } from "@/types/widget.types";
import { generateWidgetCode } from "@lib/widget-helpers";
import { Card } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Copy, Check, Terminal } from "lucide-react";
import { cn } from "@lib/utils";

interface WidgetCodeCardProps {
  widget: ChildWidget;
}

function renderJsonValue(value: string) {
  const trimmed = value.trim();
  if (trimmed.startsWith('"')) {
    return <span className="text-emerald-700">{value}</span>;
  }
  if (
    trimmed === "true" ||
    trimmed === "false" ||
    trimmed === "true," ||
    trimmed === "false,"
  ) {
    return <span className="text-violet-700 font-medium">{value}</span>;
  }
  return <span className="text-slate-600">{value}</span>;
}

function renderJsonLine(line: string) {
  const match = line.match(/^(\s*)("[^"]+")(\s*:\s*)(.*)$/);
  if (!match) {
    return <span className="text-slate-500">{line}</span>;
  }

  const [, indent, keyToken, separator, valuePart] = match;
  return (
    <>
      <span>{indent}</span>
      <span className="text-cyan-700 font-medium">{keyToken}</span>
      <span className="text-slate-400">{separator}</span>
      {renderJsonValue(valuePart)}
    </>
  );
}

export function WidgetCodeCard({ widget }: WidgetCodeCardProps) {
  const [copied, setCopied] = useState(false);

  const { strapiSchemaCode } = generateWidgetCode(widget);

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
      <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 bg-white/90 backdrop-blur-md border-b border-slate-200/80 select-none">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-slate-500" />
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
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
              "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50",
          )}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" />
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

      {/* Code Body — clean white surface with word-wrapped JSON */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden bg-white font-mono text-[11px] leading-relaxed p-3 glass-scrollbar">
        <pre className="w-full space-y-0.5 text-slate-700 m-0">
          {lines.map((line: string, i: number) => (
            <div key={i} className="flex items-start w-full min-w-0">
              <span className="select-none text-right w-7 pr-2.5 text-slate-400 border-r border-slate-200/80 shrink-0 leading-5 text-[10px] tabular-nums">
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
