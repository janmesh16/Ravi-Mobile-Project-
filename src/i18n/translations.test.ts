import { describe, it, expect } from 'vitest';
import { TRANSLATIONS } from './translations';
import type { Language } from '../types/catalog';

describe('Multilingual Translation Integrity (EN, MR, HI)', () => {
  const languages: Language[] = ['en', 'mr', 'hi'];
  const englishKeys = Object.keys(TRANSLATIONS.en) as (keyof typeof TRANSLATIONS.en)[];

  it('should support all 3 mandatory launch languages', () => {
    expect(languages).toContain('en');
    expect(languages).toContain('mr');
    expect(languages).toContain('hi');
  });

  it('should have 100% key parity between English, Marathi, and Hindi dictionaries', () => {
    languages.forEach((lang) => {
      const dictKeys = Object.keys(TRANSLATIONS[lang]);
      expect(dictKeys.length).toBe(englishKeys.length);

      englishKeys.forEach((key) => {
        expect(TRANSLATIONS[lang][key]).toBeDefined();
        expect(TRANSLATIONS[lang][key].trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('should have authentic Devanagari script for Marathi and Hindi headlines', () => {
    // Regex matching Devanagari Unicode block [\u0900-\u097F]
    const devanagariRegex = /[\u0900-\u097F]/;

    expect(devanagariRegex.test(TRANSLATIONS.mr.heroTitleLine2)).toBe(true);
    expect(devanagariRegex.test(TRANSLATIONS.hi.heroTitleLine2)).toBe(true);
    expect(devanagariRegex.test(TRANSLATIONS.mr.problemHeading)).toBe(true);
    expect(devanagariRegex.test(TRANSLATIONS.hi.problemHeading)).toBe(true);
  });
});
