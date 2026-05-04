type Props = { docsHref: string; statusHref: string };

export default function SiteFooter({ docsHref, statusHref }: Props) {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="footerGrid">
          <div className="footerCol">
            <a href="/" className="brand" style={{ marginBottom: 12 }}>
              <img src="/brand/fastauth-mark.svg" alt="FastAuth" />
              <span className="wordmark">FastAuth</span>
            </a>
            <p>An account-abstraction layer for NEAR. Built and operated by Peersyst.</p>
          </div>
          <div className="footerCol">
            <h4>Product</h4>
            <ul>
              <li><a href={docsHref}>Documentation</a></li>
              <li><a href="#developers">SDK</a></li>
              <li><a href={statusHref}>Status</a></li>
              <li><a href="#stats">Metrics</a></li>
            </ul>
          </div>
          <div className="footerCol">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Self-hosting</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
          <div className="footerCol">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Peersyst</a></li>
              <li><a href="#">NEAR Protocol</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Twitter / X</a></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <span>© 2026 Peersyst Technology · MIT License</span>
          <span className="pill"><span className="pd" /> All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
