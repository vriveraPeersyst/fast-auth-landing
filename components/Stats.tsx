"use client";

import { useEffect, useState } from "react";

import type { LiveMetrics } from "@/lib/metrics";
import { ArrowRight } from "./icons";

type Props = { metrics: LiveMetrics | null; statusHref: string };

const NUMBER_FMT = new Intl.NumberFormat("en-US");

export default function Stats({ metrics, statusHref }: Props) {
  const updatedLabel = useFreshnessLabel(metrics?.fetchedAt ?? null);

  return (
    <section className="stats" id="stats">
      <div className="container">
        <div className="statsHead">
          <div>
            <p className="sectionKicker"><span className="kn">04</span>  Live network</p>
            <h2 className="sectionTitle">Numbers, not promises.</h2>
          </div>
          <span className="liveBadge">
            <span className="ld" />
            {metrics ? (
              <>
                Updated <span className="lt">{updatedLabel}</span>
              </>
            ) : (
              <span className="lt">Live data unavailable</span>
            )}
          </span>
        </div>

        <div className="statsGrid">
          <article className="statCard">
            <h3>Total accounts</h3>
            <p className="v">{formatNumber(metrics?.accounts.total)}</p>
            <span className="delta">
              {metrics ? (
                <>
                  {formatCompact(metrics.accounts.migrated)} migrated +{" "}
                  {NUMBER_FMT.format(metrics.accounts.indexed)} indexed
                </>
              ) : (
                "—"
              )}
            </span>
          </article>

          <article className="statCard">
            <h3>Active (24h)</h3>
            <p className="v">{formatNumber(metrics?.accounts.active24h)}</p>
            <span className="delta">
              {metrics ? (
                <>{NUMBER_FMT.format(metrics.accounts.active7d)} active in 7d</>
              ) : (
                "—"
              )}
            </span>
          </article>

          <article className="statCard">
            <h3>Sign events (7d)</h3>
            <p className="v">{formatNumber(metrics?.signEvents.last7d)}</p>
            <span className="delta">
              {metrics ? (
                <>across {NUMBER_FMT.format(metrics.relayers.total)} relayers</>
              ) : (
                "—"
              )}
            </span>
          </article>

          <article className="statCard statCard--mint">
            <h3>FastAuth uptime</h3>
            <p className="v">{formatUptime(metrics?.health24h.uptimePct ?? null)}</p>
            <span className="delta">
              {metrics ? (
                <>{NUMBER_FMT.format(metrics.health24h.classified)} tx classified · 24h</>
              ) : (
                "—"
              )}
            </span>
          </article>
        </div>

        <a href={statusHref} className="statsLink">
          View full status dashboard <ArrowRight />
        </a>
      </div>
    </section>
  );
}

function formatNumber(value: number | undefined | null): string {
  if (typeof value !== "number" || !Number.isFinite(value)) return "—";
  return NUMBER_FMT.format(value);
}

const COMPACT_FMT = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 2,
});

function formatCompact(value: number | undefined | null): string {
  if (typeof value !== "number" || !Number.isFinite(value)) return "—";
  return COMPACT_FMT.format(value);
}

function formatUptime(pct: number | null): string {
  if (pct === null) return "—";
  return `${pct.toFixed(1)}%`;
}

function useFreshnessLabel(iso: string | null): string {
  const [label, setLabel] = useState<string>(() => fmtAge(iso));

  useEffect(() => {
    if (!iso) return;
    setLabel(fmtAge(iso));
    const i = setInterval(() => setLabel(fmtAge(iso)), 15_000);
    return () => clearInterval(i);
  }, [iso]);

  return label;
}

function fmtAge(iso: string | null): string {
  if (!iso) return "—";
  const ms = Date.now() - new Date(iso).getTime();
  if (!Number.isFinite(ms) || ms < 0) return "just now";
  const sec = Math.floor(ms / 1000);
  if (sec < 60) return `${sec}s ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  return `${hr}h ago`;
}
