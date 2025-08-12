export function clickOutside(event: MouseEvent, element: Element | undefined) {
	if (!element) return false;

	const rect = element.getBoundingClientRect();
	if (!rect) return false;

	const isClickOutside =
		event.clientX < rect.left ||
		event.clientX > rect.right ||
		event.clientY < rect.top ||
		event.clientY > rect.bottom;

	return isClickOutside ? true : false;
}
