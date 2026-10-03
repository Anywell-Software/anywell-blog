export const SITE_TITLE = 'Anywell';
export const SITE_DESCRIPTION = 'Making civic education approachable for everyone — bite-size lessons on how Switzerland works.';

// Blog languages. Default-language posts live in src/content/blog/,
// translations in src/content/blog/<lang>/ with the same file name.
export const LANGUAGES = {
	en: 'English',
	de: 'Deutsch',
	fr: 'Français',
	it: 'Italiano',
	rm: 'Rumantsch',
} as const;
export type Lang = keyof typeof LANGUAGES;
export const DEFAULT_LANG: Lang = 'en';
