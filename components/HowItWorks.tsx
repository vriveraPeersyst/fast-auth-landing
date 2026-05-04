export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="sectionHead">
          <div>
            <p className="sectionKicker"><span className="kn">02</span>  How it works</p>
            <h2 className="sectionTitle">Three steps. No seed phrases. Any login.</h2>
          </div>
          <p className="sectionLede">
            What the user sees, and what's happening on chain. The dance between the device, the relayer, and NEAR happens in less than three seconds.
          </p>
        </div>

        <div className="stepsGrid">
          <article className="stepCard">
            <div className="stepNum"><b>STEP 01</b> Authenticate</div>
            <h3>User signs in with their preferred method.</h3>
            <p>Any Auth0 method — email/password, passwordless, passkey, social, or enterprise SSO — all routed through Auth0. FastAuth verifies the identity and resolves it to the user's NEAR account, even if it was first created on a different dApp.</p>
            <div className="stepVis">
              <span style={{ color: "var(--color-ink-subtle)" }}>→ POST /auth/login</span>
              <span>
                <span style={{ color: "var(--color-status-ok)" }}>200</span> · token verified ·{" "}
                <span style={{ color: "var(--color-ink-subtle)" }}>43ms</span>
              </span>
            </div>
          </article>
          <article className="stepCard">
            <div className="stepNum"><b>STEP 02</b> Provision</div>
            <h3>An MPC key is split across three holders.</h3>
            <p>One share lives on the device, one with our recovery service, one in the network. The full key never exists in one place — not even momentarily.</p>
            <div className="stepVis">
              <span><span style={{ color: "var(--color-ink-subtle)" }}>device</span>   <span style={{ color: "var(--color-status-ok)" }}>✓</span></span>
              <span><span style={{ color: "var(--color-ink-subtle)" }}>recovery</span> <span style={{ color: "var(--color-status-ok)" }}>✓</span></span>
              <span><span style={{ color: "var(--color-ink-subtle)" }}>network</span>  <span style={{ color: "var(--color-status-ok)" }}>✓</span></span>
            </div>
          </article>
          <article className="stepCard">
            <div className="stepNum"><b>STEP 03</b> Transact</div>
            <h3>Gasless meta-transactions land on chain.</h3>
            <p>Users approve with their chosen method. The relayer wraps the signed action as a meta-transaction and pays gas. The call lands on NEAR mainnet in {"<"} 3s.</p>
            <div className="stepVis">
              <span style={{ color: "var(--color-ink-subtle)" }}>tx → relayer</span>
              <span><span style={{ color: "var(--color-status-ok)" }}>included</span> · block 210,481,902</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
