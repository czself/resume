import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <section className="not-found section-wrap">
      <div className="section-index"><span>404</span><i /> LOST IN THE WORKSPACE</div>
      <h1>这个页面<br /><em>还不存在。</em></h1>
      <p>返回项目索引，继续浏览已经整理好的工程记录。</p>
      <Link className="button button-primary" to="/projects">返回项目 <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
