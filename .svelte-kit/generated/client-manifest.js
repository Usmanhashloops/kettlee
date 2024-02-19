export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\Test.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\contact.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\locations\\[slug].svelte"),
	() => import("..\\..\\src\\routes\\menu.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"Test": [[0, 2], [1]],
	"about": [[0, 3], [1]],
	"contact": [[0, 4], [1]],
	"menu": [[0, 7], [1]],
	"locations/[slug]": [[0, 6], [1]]
};