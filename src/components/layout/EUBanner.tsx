"use client";

import { useState } from "react";

export default function EUBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-purple-dark text-white/85 text-xs text-center py-2.5 px-6 relative z-[1001]">
      <span>
        🇪🇺 Funded by the European Union. Views and opinions expressed are those
        of the author(s) only and do not necessarily reflect those of the
        European Union or the European Education and Culture Executive Agency
        (EACEA). Neither the European Union nor EACEA can be held responsible
        for them.
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors text-base"
        aria-label="Close EU disclaimer"
      >
        ✕
      </button>
    </div>
  );
}
