"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";

const ITEMS = [
  {
    q: "What chain does FastAuth run on?",
    a: "NEAR Protocol mainnet. FastAuth is built and operated by Peersyst as a public-good account-abstraction layer for the NEAR ecosystem. Accounts are real NEAR named accounts you can inspect on nearblocks.io.",
  },
  {
    q: "How do users sign in?",
    a: "With anything Auth0 supports — email/password, passwordless email or SMS, passkeys, social login (Google, Apple, or any OAuth2 provider you wire up), and enterprise SSO. MFA factors can be layered on top. All identities flow through Auth0, which means the same login resolves to the same NEAR account no matter which dApp the user signs into.",
  },
  {
    q: "What does Auth0 have to do with it?",
    a: "Auth0 is the identity layer. Because every FastAuth-integrated dApp on NEAR shares the same Auth0 tenant, a user who already has a NEAR account through one dApp can sign into yours with the same login and reach the same wallet.",
  },
  {
    q: "Where is the user's key stored?",
    a: "User signs in. Auth0 issues a JWT. The MPC network derives the user's key from their JWT. The FastAuth contract routes the JWT to the matching guard (Auth0, Firebase, custom issuer) for cryptographic verification. On success it builds a deterministic path — {guard_id}#{sub} — and asks NEAR's MPC network to sign for it. The nodes derive the same key for the same identity every time, and produce the signature collaboratively. No single party ever holds the full key — and the user holds no key material at all.",
  },
  {
    q: "Is this custodial?",
    a: "No single party holds the user's signing key. The key is derived inside NEAR's MPC network from the user's Auth0-verified identity each time a signature is needed — no node ever reconstructs the full key. The gating credential is the user's Auth0 login: every transaction requires a fresh, verified JWT, and FastAuth cannot sign without it.",
  },
  {
    q: "How is gas paid?",
    a: "Through the FastAuth relayer. When your dApp calls signAndSendDelegateAction, the relayer wraps the user's signed delegate action as a NEP-366 meta-transaction, pays gas on chain, and returns the result — the user pays nothing. The relayer URL is configured per-network in the SDK. For a regular (non-delegate) transaction, the user's account pays gas directly.",
  },
  {
    q: "Can I self-host?",
    a: "Partially. The FastAuth contract, the JWT Guard Router, and NEAR's MPC network are shared infrastructure deployed on mainnet (fast-auth.near, jwt.fast-auth.near, v1.signer) — you integrate with them, you don't redeploy them. You can self-host the auth side: deploy your own guard contract that implements the JwtGuard trait, or run an off-chain issuer whose JWTs are verified by CustomIssuerGuard. Both extension points are documented.",
  },
  {
    q: "Has FastAuth been audited?",
    a: "Yes. The FastAuth smart contracts and signing infrastructure have been audited by Halborn, an independent security firm specializing in Web3. The full security report is publicly available.",
  },
  {
    q: "Which sign-in methods are supported?",
    a: "Four, all routed through Auth0: Google, Apple, email/password, and passkeys. Because every FastAuth-integrated dApp shares the same Auth0 tenant, the same login resolves to the same NEAR account everywhere. For providers Auth0 doesn't cover, you can deploy a custom guard contract or run a custom issuer service that issues JWTs verified on chain.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faqGrid">
          <div>
            <p className="sectionKicker"><span className="kn">05</span>  FAQ</p>
            <h2 className="sectionTitle">Questions, answered honestly.</h2>
            <p className="sectionLede" style={{ marginTop: 24 }}>
              If you don't see what you're looking for, the docs go deeper. Or open an issue — we read all of them.
            </p>
          </div>
          <div className="faqList">
            {ITEMS.map((it, i) => (
              <div key={i} className={"faqItem " + (open === i ? "open" : "")}>
                <button
                  className="faqQ"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  {it.q}
                  <span className="plus">
                    <PlusIcon />
                  </span>
                </button>
                <div className="faqA"><p>{it.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
