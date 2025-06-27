
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // disappears when scrolled away
      }
    });
  });
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  }
  );
  // USer Dashboard Switching
    let hasImportantNotification = true; // Set to false to hide badge
    document.getElementById('notifBadge').style.display = hasImportantNotification ? 'flex' : 'none';

    // Tab switching (for demonstration, doesn't change content)
     // Tabs logic
     const tabs = document.querySelectorAll('.tab');
     const tabContents = document.querySelectorAll('.tab-content');
     tabs.forEach(tab => {
         tab.addEventListener('click', function() {
             // Remove active from all tabs and contents
             tabs.forEach(t => t.classList.remove('active'));
             tabContents.forEach(c => c.classList.remove('active'));
             // Add active to clicked tab and corresponding content
             this.classList.add('active');
             document.getElementById('tab-' + this.dataset.tab).classList.add('active');
         });
     });