export type Consent = "accepted" | "declined" | null;

const KEY = "octopus-cookie-consent";
const EVENT = "octopus-consent-change";

export function getConsent(): Consent {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(KEY);
  return v === "accepted" || v === "declined" ? v : null;
}

export function setConsent(value: Exclude<Consent, null>): void {
  window.localStorage.setItem(KEY, value);
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
}

export function clearConsent(): void {
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent(EVENT, { detail: null }));
}

export function onConsentChange(cb: (c: Consent) => void): () => void {
  const handler = () => cb(getConsent());
  const storageHandler = (e: StorageEvent) => {
    if (e.key === KEY) handler();
  };
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", storageHandler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", storageHandler);
  };
}
