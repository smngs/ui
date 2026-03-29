import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@smngs/ui";

export type SwatchDef = { token: string; hex: string; label: string; light: boolean; usages: string[] };

export function ColorSwatch({ token, hex, label, light, usages }: SwatchDef) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className="token-swatch token-swatch-clickable"
          onPointerEnter={(e) => { if (e.pointerType === "mouse") setOpen(true); }}
          onPointerLeave={(e) => { if (e.pointerType === "mouse") setOpen(false); }}
        >
          <div
            className="token-swatch-color"
            style={{ background: `var(${token})`, color: light ? "#2f2f2f" : "#f6f6f6" }}
          >
            {hex}
          </div>
          <div className="token-swatch-info">
            <div className="token-swatch-name">{label}</div>
            <div className="token-swatch-token">{token}</div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="token-swatch-popup">
        <div className="token-swatch-popup-header">
          <span className="token-swatch-popup-dot" style={{ background: `var(${token})` }} />
          <strong>{label}</strong>
          <code className="token-swatch-popup-code">{token}</code>
        </div>
        <div className="token-swatch-popup-usages">
          {usages.map((u) => (
            <div key={u} className="token-swatch-popup-item">{u}</div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
