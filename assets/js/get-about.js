window.aboutPageData = null;

fetch('https://justaregularnerd.online/ghost/api/content/pages/?key=977eb6425300982afd369c6339&filter=slug:about&limit=1')
  .then(res => res.json())
  .then(data => {
    if (data.pages && data.pages.length > 0) {
      window.aboutPageData = data.pages[0];
    }
  })
  .catch(err => console.error('Error fetching about page:', err));
