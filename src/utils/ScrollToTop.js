import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';  // ✅ useLocation instead of withRouter

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);  // 🔥 every time the route changes

  return null;
}

export default ScrollToTop;
