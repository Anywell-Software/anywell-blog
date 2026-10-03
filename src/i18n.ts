import type { CollectionEntry } from 'astro:content';
import { DEFAULT_LANG, LANGUAGES, type Lang } from './consts';

/** Language of a post, derived from its folder (`de/foo` → `de`). */
export function getLang(post: CollectionEntry<'blog'>): Lang {
	const prefix = post.id.split('/')[0];
	return prefix in LANGUAGES && post.id.includes('/') ? (prefix as Lang) : DEFAULT_LANG;
}

/** Id shared by all translations of the same article. */
export function getTranslationKey(post: CollectionEntry<'blog'>): string {
	const lang = getLang(post);
	return lang === DEFAULT_LANG ? post.id : post.id.slice(lang.length + 1);
}

export function isDefaultLang(post: CollectionEntry<'blog'>): boolean {
	return getLang(post) === DEFAULT_LANG;
}
