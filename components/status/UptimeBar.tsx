type Props = {
  data: number[];
  label: string;
  coverage?: string;
};

export default function UptimeBar({ data, label, coverage }: Props) {
  return (
    <div className="uptimeBar">
      <div className="uptimeBarLabel">
        <span>{label}</span>
        {coverage ? <span className="metaHint">{coverage}</span> : null}
      </div>
      <div className="uptimeBarTrack">
        {data.map((v, i) => {
          const tone = v >= 99.5 ? "ok" : v >= 98 ? "warn" : "err";
          return <span key={i} className={`uptimeSeg uptimeSeg--${tone}`} title={`${v.toFixed(2)}%`} />;
        })}
      </div>
    </div>
  );
}
