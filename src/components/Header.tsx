import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { profile } from "../data/profile";

const navItems = [
  { label: "首页", to: "/" },
  { label: "项目", to: "/projects" },
  { label: "简历", to: "/resume" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" to="/" onClick={closeMenu} aria-label="施震作品集首页">
          <span className="wordmark-mark">SZ</span>
          <span className="wordmark-copy"><strong>施震</strong><small>ENGINEERING PORTFOLIO</small></span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" className={"primary-navigation" + (menuOpen ? " is-open" : "")}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => isActive ? "nav-link is-active" : "nav-link"}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="nav-link nav-link--external" href={profile.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
      <div className="header-rule" data-route={location.pathname} />
    </header>
  );
}
