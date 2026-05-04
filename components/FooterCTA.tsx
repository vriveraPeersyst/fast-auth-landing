import { ArrowRight } from "./icons";

type Props = { docsHref: string; statusHref: string };

export default function FooterCTA({ docsHref, statusHref }: Props) {
  return (
    <section className="footerCTA">
      <div className="container">
        <h2>
          Ship the wallet your users<br />won't realize they're using.
        </h2>
        <p>
          Five minutes from clone to first signed transaction. Plug into 10M+ accounts already on NEAR through one shared, Auth0-backed identity.
        </p>
        <div className="footerCTAButtons">
          <a href={docsHref} className="btn btn--primary">
            Get started <ArrowRight />
          </a>
          <a href={statusHref} className="btn btn--ghost">
            <span className="heroDot" />
            FastAuth status
          </a>
        </div>
      </div>
    </section>
  );
}
