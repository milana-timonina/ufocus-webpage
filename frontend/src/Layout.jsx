import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function Layout() {
  const loc = useLocation();

  // keep your scroll-to-top on route change
  useEffect(() => { window.scrollTo(0, 0); }, [loc.pathname]);

  // NEW: if a previous page set a scroll target, scroll to it after navigation
  useEffect(() => {
    const targetId = sessionStorage.getItem('scrollTarget');
    if (targetId) {
      sessionStorage.removeItem('scrollTarget');
      // wait for page content to mount
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }, [loc.pathname]);

  return (
    <>
      <Navbar />
      <div id="page" style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
    </>
  );
}
