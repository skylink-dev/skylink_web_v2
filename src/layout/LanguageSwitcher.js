"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (lang) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex gap-2 p-3">
      {["en", "ta", "hi"].map((lang) => (
        <button
          key={lang}
          onClick={() => switchLang(lang)}
          className="px-3 py-1 bg-blue-600 text-white rounded-md"
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
