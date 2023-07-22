
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // Toggle the 'active' class for the clicked card
    panel.classList.toggle('active');

    // Remove 'active' class from all other cards
    panels.forEach(p => {
      if (p !== panel && p.classList.contains('active')) {
        p.classList.remove('active');
      }
    });
  });
});