// Script to validate the background image is correctly loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Validating background image...');
  
  // Check if the background element exists
  const bgEl = document.querySelector('.global-background');
  if (!bgEl) {
    console.error('Background element not found in DOM!');
    return;
  }
  
  console.log('Background element found:', bgEl);
  
  // Check computed style
  const style = window.getComputedStyle(bgEl);
  console.log('Background image:', style.backgroundImage);
  console.log('Background opacity:', style.opacity);
  console.log('Z-index:', style.zIndex);
  
  // Create a visual indicator
  const indicator = document.createElement('div');
  indicator.style.position = 'fixed';
  indicator.style.bottom = '10px';
  indicator.style.right = '10px';
  indicator.style.padding = '8px 12px';
  indicator.style.backgroundColor = style.backgroundImage.includes('rio-banner.jpg') ? 'green' : 'red';
  indicator.style.color = 'white';
  indicator.style.zIndex = '9999';
  indicator.style.borderRadius = '4px';
  indicator.textContent = style.backgroundImage.includes('rio-banner.jpg') ? 'Background OK' : 'Background Missing';
  document.body.appendChild(indicator);

  // Log success
  if (style.backgroundImage.includes('rio-banner.jpg')) {
    console.log('Background validation successful!');
  } else {
    console.error('Background image not applied correctly!');
  }
}); 