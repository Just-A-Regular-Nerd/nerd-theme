/* This should be injected rather than made publicly available

window.aboutPageData = null;

fetch('https://justaregularnerd.online/ghost/api/content/pages/?key=enteryourcontentkeyhere&filter=slug:about&limit=1')
  .then(res => res.json())
  .then(data => {
    if (data.pages && data.pages.length > 0) {
      window.aboutPageData = data.pages[0];
    }
  })
  .catch(err => console.error('Error fetching about page:', err));
*/