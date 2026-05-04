export default function WhatIsFastAuth() {
  return (
    <section className="what">
      <div className="container">
        <div className="sectionHead">
          <div>
            <p className="sectionKicker"><span className="kn">01</span>  What is FastAuth</p>
            <h2 className="sectionTitle">A wallet that doesn't feel like one.</h2>
          </div>
          <p className="sectionLede">
            FastAuth is an account-abstraction layer for NEAR, powered by Auth0. Users sign in with the credentials they already have, and the same identity unlocks every dApp and wallet in the ecosystem that integrates FastAuth — over 10 million accounts and counting.
          </p>
        </div>

        <div className="valueGrid">
          <article className="valueCard">
            <span className="vNum">01 · ONBOARDING</span>
            <h3>Email, social, passkey, or enterprise SSO.</h3>
            <p>Every Auth0 sign-in method is supported — email/password, passwordless, passkeys, social (Google, Apple, custom OAuth2), or enterprise SSO. We provision a real NEAR account in the background — no seed phrase, no extension, no wallet popup. Whatever the user already trusts, that's how they sign in.</p>
            <div className="valueIllu">
              <ValueIllu1 />
            </div>
          </article>
          <article className="valueCard">
            <span className="vNum">02 · SHARED IDENTITY</span>
            <h3>One account. The whole NEAR ecosystem.</h3>
            <p>FastAuth is backed by Auth0, so a user who signs in to your dApp is the same user across every other wallet and dApp on NEAR that integrates FastAuth. Tap into the largest userbase on NEAR.</p>
            <div className="valueIllu">
              <ValueIllu2 />
            </div>
          </article>
          <article className="valueCard">
            <span className="vNum">03 · UX</span>
            <h3>Gasless. Silent. On-chain.</h3>
            <p>Your dApp pays gas through the meta-transaction relayer. Users authenticate with whichever method they chose. Transactions land on NEAR mainnet in under three seconds.</p>
            <div className="valueIllu">
              <ValueIllu3 />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ValueIllu1() {
  return (
    <svg viewBox="0 0 264 60" width="100%" height={60} fill="none">
      <rect x="0" y="18" width="104" height="24" rx="12" fill="#F5F4ED" stroke="#EBEBEB" />
      <text x="52" y="34" textAnchor="middle" fontFamily="SF Mono, monospace" fontSize="10" fill="#757571">user@email.com</text>
      <path d="M108 30 H144" stroke="#000" strokeDasharray="2 3" />
      <rect x="144" y="20" width="40" height="20" rx="6" fill="#000" />
      <text x="164" y="34" textAnchor="middle" fontFamily="SF Mono, monospace" fontSize="9" fontWeight="600" fill="#00F29B">FA</text>
      <path d="M188 30 H224" stroke="#000" strokeDasharray="2 3" />
      <rect x="224" y="20" width="40" height="20" rx="6" fill="#00F29B" />
      <text x="244" y="34" textAnchor="middle" fontFamily="SF Mono, monospace" fontSize="9" fontWeight="600" fill="#000">.near</text>
    </svg>
  );
}

function ValueIllu2() {
  return (
    <svg viewBox="0 0 240 60" width="100%" height={60} fill="none">
      <circle cx="40" cy="30" r="14" fill="#F5F4ED" stroke="#000" />
      <circle cx="120" cy="30" r="18" fill="#00F29B" />
      <circle cx="200" cy="30" r="14" fill="#F5F4ED" stroke="#000" />
      <path d="M54 30 H102 M138 30 H186" stroke="#000" />
      <text x="40" y="34" textAnchor="middle" fontFamily="SF Mono, monospace" fontSize="9" fontWeight="600">DEV</text>
      <text x="120" y="34" textAnchor="middle" fontFamily="SF Mono, monospace" fontSize="10" fontWeight="700">KEY</text>
      <text x="200" y="34" textAnchor="middle" fontFamily="SF Mono, monospace" fontSize="9" fontWeight="600">NET</text>
    </svg>
  );
}

function ValueIllu3() {
  return (
    <svg viewBox="0 0 240 60" width="100%" height={60} fill="none">
      <rect x="2" y="16" width="60" height="28" rx="6" fill="#000" />
      <text x="32" y="34" textAnchor="middle" fontFamily="SF Mono, monospace" fontSize="9" fontWeight="600" fill="#00F29B">SIGN</text>
      <path d="M64 30 H100" stroke="#000" />
      <rect x="100" y="16" width="68" height="28" rx="6" fill="#F5F4ED" stroke="#000" />
      <text x="134" y="34" textAnchor="middle" fontFamily="SF Mono, monospace" fontSize="9" fontWeight="600" fill="#000">RELAYER</text>
      <path d="M170 30 H206" stroke="#000" />
      <rect x="206" y="16" width="32" height="28" rx="6" fill="#00F29B" />
      <text x="222" y="34" textAnchor="middle" fontFamily="SF Mono, monospace" fontSize="9" fontWeight="700" fill="#000">⟁</text>
    </svg>
  );
}
