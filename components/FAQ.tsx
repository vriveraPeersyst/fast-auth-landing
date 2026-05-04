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
    a: "Auth0 is the identity layer. Because every FastAuth-integrated dApp on NEAR shares the same Auth0 tenant, a user who already has a NEAR account through one dApp can sign into yours with the same login and reach the same wallet. That shared pool is currently 9M+ accounts.",
  },
  {
    q: "Where is the user's key stored?",
    a: "Keys are split using threshold-MPC into three shares: one on the user's device, one held by a recovery service, one in the network. Two of three are required to sign — the full key is never reconstructed in plain memory.",
  },
  {
    q: "Is this custodial?",
    a: "No. The user can export their account at any time and migrate to any standard NEAR wallet. We can't sign on their behalf without their device share.",
  },
  {
    q: "How is gas paid?",
    a: "Through a meta-transaction relayer. Your dApp deposits NEAR into a relayer account; the relayer wraps user-signed actions and pays gas. You set spend caps, per-method allowlists, and rate limits in the dashboard.",
  },
  {
    q: "Can I self-host?",
    a: "Yes. The relayer, recovery service, and account-creation contract are all open source (MIT). Self-hosting docs are at docs.fastauth.near.org/self-host.",
  },
  {
    q: "Which sign-in methods are supported?",
    a: "Everything FastAuth inherits from Auth0: database (email/password), passwordless (email magic-link or SMS), passkeys, social login (Google, Apple, or custom OAuth2), and enterprise SSO via SAML, OIDC, LDAP, ADFS, Azure AD, Google Workspace, Okta, or PingFederate — with MFA factors layerable on top of any of them. All routed through Auth0, so the same identity resolves to the same NEAR account across every FastAuth-integrated dApp.",
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
