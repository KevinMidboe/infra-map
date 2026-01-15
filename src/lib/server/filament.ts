import type { Filament } from '$lib/interfaces/printer';

const filament: Filament[] = [
	{
		hex: '#DD4344',
		color: 'Scarlet Red',
		material: 'PLA Matte',
		weight: 1,
		count: 2,
		link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742848731'
	},
	{
		hex: '#61C57F',
		color: 'Grass Green',
		material: 'PLA Matte',
		weight: 1,
		count: 2,
		link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742783195'
	},
	{
		hex: '#F7DA5A',
		color: 'Lemon Yellow',
		material: 'PLA Matte',
		weight: 1,
		count: 2,
		link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742717659'
	},
	{
		hex: '#E8DBB7',
		color: 'Desert Tan',
		material: 'PLA Matte',
		weight: 1,
		count: 1,
		link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=48612736401756'
	},
	{
		hex: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png'",
		color: 'White Marble',
		material: 'PLA Marble',
		weight: 1,
		count: 1,
		link: 'https://eu.store.bambulab.com/en-no/products/pla-marble?variant=43964050964699'
	},
	{
		hex: '#0078C0',
		color: 'Marine Blue',
		material: 'PLA Matte',
		weight: 1,
		count: 1,
		link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996751073499'
	},
	{
		hex: '#000000',
		color: 'Charcoal',
		material: 'PLA Matte',
		weight: 1,
		count: 2,
		link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742750427'
	},
	{
		hex: '#ffffff',
		color: 'Ivory White',
		material: 'PLA Matte',
		weight: 1,
		count: 2,
		link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742586587'
	},
	{
		hex: '#E8AFCE',
		color: 'Sakura Pink',
		material: 'PLA Matte',
		weight: 1,
		count: 1,
		link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742684891'
	},
	{
		hex: '#AE96D5',
		color: 'Lilac Purple',
		material: 'PLA Matte',
		weight: 1,
		count: 1,
		link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742914267'
	}
];

export function filamentByColor(name: string) {
	return filament.find((f) => f.Color?.toLowerCase() === name?.toLowerCase());
}

export function currentFilament(): Filament[] {
	return filament;
}
