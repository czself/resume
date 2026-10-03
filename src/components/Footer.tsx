import { Link } from "react-router";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <span className="eyebrow">LET'S BUILD SOMETHING REAL</span>
          <h2>期待和机器人<br />一起工作。</h2>
        </div>
        <a className="footer-contact" href={"tel:" + profile.phone}>
          <span>联系施震</span><strong>{profile.phone}</strong><i aria-hidden="true">↗</i>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.education}</span>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.gitee} target="_blank" rel="noreferrer">Gitee ↗</a>
          <Link to="/resume">简历 ↗</Link>
        </div>
          <button
            className="back-top"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="返回页面顶部"
          >
            BACK TO TOP ↑
          </button>
      </div>
    </footer>
  );
}
