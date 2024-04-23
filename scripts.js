window.addEventListener('DOMContentLoaded', (event) => {
    // 假设所有图片都包含 'lazy' 类
    const images = document.querySelectorAll('.lazy');
  
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '30px' });
  
      images.forEach(img => observer.observe(img));
    } else {
      // 较老的浏览器不支持 Intersection Observer
      images.forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      });
    }
  });