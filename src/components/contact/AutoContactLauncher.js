"use client";
import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

export default function AutoContactLauncher({ delay = 3000 }) {
  const [visible, setVisible] = useState(false);
  const LOCAL_STORAGE_KEY = 'skylink_contact_shown';

  useEffect(() => {
    // Check if we've shown the form before
    const hasShownBefore = () => {
      try {
        const shown = localStorage.getItem(LOCAL_STORAGE_KEY);
        return shown ? JSON.parse(shown) : false;
      } catch (e) {
        return false;
      }
    };

    // If not shown before, show after delay
    if (!hasShownBefore()) {
      const timer = setTimeout(() => {
        setVisible(true);
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(true));
        } catch (e) {
          console.error('Error saving to localStorage:', e);
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  if (!visible) return null;

  return <ContactForm onClose={() => setVisible(false)} />;
}
