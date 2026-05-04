import type { LiveMetrics } from "@/lib/metrics";
import { ArrowRight } from "./icons";
import PhoneHero from "./PhoneHero";

type Props = {
  docsHref: string;
  statusHref: string;
  metrics: LiveMetrics | null;
};

const COMPACT = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 2,
});

export default function Hero({ docsHref, statusHref, metrics }: Props) {
  const accountsLabel =
    metrics && Number.isFinite(metrics.accounts.total) && metrics.accounts.total > 0
      ? `${COMPACT.format(metrics.accounts.total)}+ ACCOUNTS`
      : "9M+ ACCOUNTS";

  return (
    <section className="hero">
      <div className="container heroGrid">
        <div className="heroCopy">
          <span className="heroKicker">
            <span className="kdot" />
            FASTAUTH · LIVE ON NEAR MAINNET · {accountsLabel}
          </span>
          <h1 className="heroTitle">
            Onboard users with an <span className="accent">email</span>.{" "}
            Give them a <span className="accent">real wallet</span>.
          </h1>
          <p className="heroLede">
            FastAuth onboards users in seconds with any Auth0 method — email, social, passkey, or enterprise SSO — no seed phrases, no extensions, no wallet popups.
            One Auth0-backed identity, shared across every wallet and dApp in the NEAR ecosystem that integrates FastAuth.
          </p>

          <div className="heroCTAs">
            <a href={docsHref} className="btn btn--primary">
              Get started <ArrowRight />
            </a>
            <a href={statusHref} className="btn btn--dark">
              <span className="heroDot" />
              FastAuth status
              <ArrowRight />
            </a>
          </div>

          <div className="heroMeta">
            <span><span className="check">✓</span> Email · Social · Passkey · SSO</span>
            <span><span className="check">✓</span> Shared identity across NEAR</span>
            <span><span className="check">✓</span> Open source · MIT</span>
          </div>
        </div>

        <div className="heroVisual">
          <PhoneHero />
        </div>
      </div>
    </section>
  );
}
