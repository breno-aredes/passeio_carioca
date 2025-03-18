/**
 * Utility function for smooth scrolling to page sections
 * @param {string} selector - The CSS selector for the target element
 * @param {number} offset - Offset in pixels (default: 64px for navbar height)
 */
export const scrollToSection = (selector, offset = 64) => {
  const element = document.querySelector(selector);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: 'smooth'
    });
    return true;
  }
  return false;
};

/**
 * List of all available sections in the application
 * Used for navigation consistency
 */
export const appSections = [
  { id: 'hero', label: 'Home', path: '/' },
  { id: 'parcerias', label: 'Parcerias e Conquistas', path: '/parcerias-conquistas' },
  { id: 'anuncie-section', label: 'Anuncie', path: '/anuncie' },
  { id: 'comercialize', label: 'Comercialize seus passeios', path: '#comercialize', isModal: true }
]; 