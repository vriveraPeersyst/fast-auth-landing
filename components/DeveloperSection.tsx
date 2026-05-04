"use client";

import { useState } from "react";
import { ArrowRight, CheckIcon, GithubIcon } from "./icons";

type Tab = "react" | "browser" | "install";

const SNIPPETS: Record<Tab, string> = {
  react: `import {
  FastAuthProvider,
  useFastAuth,
  useIsLoggedIn,
  useSigner,
} from "@fast-auth-near/react-sdk";
import { JavascriptProvider } from "@fast-auth-near/javascript-provider";
import { Connection } from "near-api-js";

const connection = new Connection({
  networkId: "mainnet",
  provider: {
    type: "JsonRpcProvider",
    args: { url: "https://rpc.mainnet.near.org" },
  },
});

const providerConfig = {
  provider: new JavascriptProvider({
    domain: "your-tenant.auth0.com",
    clientId: "your-client-id",
    audience: "https://your-api.example.com",
  }),
};

export default function App() {
  return (
    <FastAuthProvider
      providerConfig={providerConfig}
      connection={connection}
      network="mainnet"
    >
      <Wallet />
    </FastAuthProvider>
  );
}

function Wallet() {
  const { client, isReady } = useFastAuth();
  const { isLoggedIn } = useIsLoggedIn();
  const { signer } = useSigner();

  if (!isReady || !client) return <p>Initializing…</p>;
  if (!isLoggedIn) return <button onClick={() => client.login()}>Sign in</button>;

  return (
    <button onClick={() => signer?.signAndSendTransaction({ transaction })}>
      Send transaction
    </button>
  );
}`,
  browser: `import { FastAuthClient } from "@fast-auth-near/browser-sdk";
import { JavascriptProvider } from "@fast-auth-near/javascript-provider";
import { connect } from "near-api-js";

// 1. Auth0-backed FastAuth provider
const provider = new JavascriptProvider({
  domain: "your-tenant.auth0.com",
  clientId: "your-client-id",
  audience: "https://your-api.example.com",
});

// 2. NEAR connection
const { connection } = await connect({
  networkId: "mainnet",
  nodeUrl: "https://rpc.mainnet.near.org",
});

// 3. FastAuth client
const client = new FastAuthClient(provider, connection, {
  mpcContractId:      "v1.signer-prod.testnet",
  fastAuthContractId: "fast-auth-beta-001.testnet",
});

// Sign in (popup by default; pass redirectUri for redirect flow)
await client.login();

if (await client.isLoggedIn()) {
  const signer    = await client.getSigner();
  const publicKey = await signer.getPublicKey();

  // Gasless meta-transaction via the FastAuth relayer
  await signer.signAndSendDelegateAction({
    receiverId: "guest-book.near",
    name:       "My dApp",
    imageUrl:   "https://my-dapp.com/logo.png",
  });
}`,
  install: `# React SDK (Auth0 + NEAR)
pnpm add \\
  @fast-auth-near/react-sdk \\
  @fast-auth-near/javascript-provider \\
  near-api-js

# Or vanilla JS / TS
pnpm add \\
  @fast-auth-near/browser-sdk \\
  @fast-auth-near/javascript-provider \\
  near-api-js

# Sign in:
#   await client.login()
#
# Sign + relay (gasless):
#   const signer = await client.getSigner()
#   await signer.signAndSendDelegateAction({ receiverId, name, imageUrl })
#
# Docs:    https://peersyst.github.io/fast-auth/
# GitHub:  https://github.com/peersyst/fast-auth`,
};

const TAB_FILE: Record<Tab, string> = {
  react: "App.tsx",
  browser: "main.ts",
  install: "shell",
};

const TAB_LABEL: Record<Tab, string> = {
  react: "React",
  browser: "Browser",
  install: "Install",
};

export default function DeveloperSection({ docsHref }: { docsHref: string }) {
  const [tab, setTab] = useState<Tab>("react");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(SNIPPETS[tab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section className="dev" id="developers">
      <div className="container">
        <div className="sectionHead">
          <div>
            <p className="sectionKicker"><span className="kn">03</span>  For developers</p>
            <h2 className="sectionTitle">Drop it in.<br />Ship today.</h2>
          </div>
          <p className="sectionLede">
            React SDK or vanilla JS — pick your stack. The Auth0-backed JavaScript provider handles login; the FastAuth relayer pays gas. You write the dApp.
          </p>
        </div>

        <div className="devGrid">
          <div className="devCopy">
            <ul className="devList">
              <li>
                <span className="checkbox"><CheckIcon /></span>
                <div>
                  <strong>One provider, three React hooks.</strong>
                  <span>
                    <code>useFastAuth</code>, <code>useIsLoggedIn</code>, and{" "}
                    <code>useSigner</code> cover login state, session checks, and signing.
                  </span>
                </div>
              </li>
              <li>
                <span className="checkbox"><CheckIcon /></span>
                <div>
                  <strong>Every Auth0 sign-in method, one identity.</strong>
                  <span>Email/password, passwordless, passkeys, social (Google, Apple, custom OAuth2), and enterprise SSO — all routed through Auth0. The same identity resolves to the same NEAR account across every FastAuth-integrated dApp.</span>
                </div>
              </li>
              <li>
                <span className="checkbox"><CheckIcon /></span>
                <div>
                  <strong>Gasless via the relayer.</strong>
                  <span>
                    <code>signAndSendDelegateAction</code> wraps user-signed actions as
                    meta-transactions and pays gas through the FastAuth relayer.
                  </span>
                </div>
              </li>
              <li>
                <span className="checkbox"><CheckIcon /></span>
                <div>
                  <strong>Open source. Self-hostable.</strong>
                  <span>MIT-licensed. Run the relayer, recovery service, and account-creation contract on your own infra.</span>
                </div>
              </li>
            </ul>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
              <a href={docsHref} className="btn btn--primary">
                Read the docs <ArrowRight />
              </a>
              <a href="https://github.com/peersyst/fast-auth" className="btn devGhostBtn">
                <GithubIcon /> View on GitHub
              </a>
            </div>
          </div>

          <div className="codeCard">
            <div className="codeBar">
              <div className="dots"><span /><span /><span /></div>
              <span className="file">{TAB_FILE[tab]}</span>
              <button className={"copy " + (copied ? "copied" : "")} onClick={handleCopy}>
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <div className="codeTabs">
              {(["react", "browser", "install"] as Tab[]).map((t) => (
                <button
                  key={t}
                  className={"codeTab " + (tab === t ? "active" : "")}
                  onClick={() => setTab(t)}
                >
                  {TAB_LABEL[t]}
                </button>
              ))}
            </div>
            <pre className="code">
              <code dangerouslySetInnerHTML={{ __html: highlight(SNIPPETS[tab], tab) }} />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function highlight(src: string, lang: Tab): string {
  let s = src.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  if (lang === "install") {
    s = s.replace(/^(#.*)$/gm, '<span class="tk-c">$1</span>');
    s = s.replace(/\b(pnpm|npm|npx|yarn|fastauth)\b/g, '<span class="tk-f">$1</span>');
    s = s.replace(/(--[\w-]+)/g, '<span class="tk-k">$1</span>');
    s = s.replace(/\b(\d+)\b/g, '<span class="tk-n">$1</span>');
    return s;
  }

  // react / browser — JS/TS/JSX
  s = s.replace(/(\/\/[^\n]*)/g, '<span class="tk-c">$1</span>');
  s = s.replace(/(&quot;[^&]*?&quot;)/g, '<span class="tk-s">$1</span>');
  s = s.replace(
    /\b(import|from|export|default|function|return|const|let|if|else|new|await|async)\b/g,
    '<span class="tk-k">$1</span>'
  );
  s = s.replace(/\b(\d+)\b/g, '<span class="tk-n">$1</span>');
  return s;
}
