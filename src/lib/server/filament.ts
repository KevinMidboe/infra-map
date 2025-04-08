import type { Filament } from '$lib/interfaces/printer';

const filament: Filament[] = [
	{
		Hex: '#DD4344',
		Color: 'Scarlet Red',
		Material: 'PLA Matte',
		Weight: '1kg',
		Count: 2,
		Link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742848731'
	},
	{
		Hex: '#61C57F',
		Color: 'Grass Green',
		Material: 'PLA Matte',
		Weight: '1kg',
		Count: 2,
		Link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742783195'
	},
	{
		Hex: '#F7DA5A',
		Color: 'Lemon Yellow',
		Material: 'PLA Matte',
		Weight: '1kg',
		Count: 2,
		Link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742717659'
	},
	{
		Hex: '#E8DBB7',
		Color: 'Desert Tan',
		Material: 'PLA Matte',
		Weight: '1kg',
		Count: 1,
		Link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=48612736401756'
	},
	{
		Hex: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png'",
		Color: 'White Marble',
		Material: 'PLA Marble',
		Weight: '1kg',
		Count: 1,
		Link: 'https://eu.store.bambulab.com/en-no/products/pla-marble?variant=43964050964699'
	},
	{
		Hex: '#0078C0',
		Color: 'Marine Blue',
		Material: 'PLA Matte',
		Weight: '1kg',
		Count: 1,
		Link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996751073499'
	},
	{
		Hex: '#000000',
		Color: 'Charcoal',
		Material: 'PLA Matte',
		Weight: '1kg',
		Count: 2,
		Link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742750427'
	},
	{
		Hex: '#ffffff',
		Color: 'Ivory White',
		Material: 'PLA Matte',
		Weight: '1kg',
		Count: 2,
		Link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742586587'
	},
	{
		Hex: '#E8AFCE',
		Color: 'Sakura Pink',
		Material: 'PLA Matte',
		Weight: '1kg',
		Count: 1,
		Link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742684891'
	},
	{
		Hex: '#AE96D5',
		Color: 'Lilac Purple',
		Material: 'PLA Matte',
		Weight: '1kg',
		Count: 1,
		Link: 'https://eu.store.bambulab.com/en-no/collections/pla/products/pla-matte?variant=42996742914267'
	}
];

export function filamentByColor(name: string) {
	return filament.find((f) => f.Color?.toLowerCase() === name?.toLowerCase());
}

export function currentFilament(): Filament[] {
	return filament;
}
