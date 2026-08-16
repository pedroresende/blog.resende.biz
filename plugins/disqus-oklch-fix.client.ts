export default defineNuxtPlugin(() => {
  if (!import.meta.client) return;

  const originalGetComputedStyle = window.getComputedStyle;

  window.getComputedStyle = function (element: Element, pseudoElt?: string | null) {
    const styles = originalGetComputedStyle.call(window, element, pseudoElt);

    return new Proxy(styles, {
      get(target, prop) {
        if (prop === 'getPropertyValue') {
          return (property: string) => {
            const value = target.getPropertyValue(property);
            if (value.includes('oklch')) {
              if (document.documentElement.classList.contains('dark')) {
                return 'rgb(17, 24, 39)';
              }
              return 'rgb(255, 255, 255)';
            }
            return value;
          };
        }
        return target[prop];
      },
    });
  } as typeof window.getComputedStyle;
});
