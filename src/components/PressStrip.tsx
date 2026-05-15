export default function PressStrip() {
  const pressNames = ['TOP GEAR', 'ROBB REPORT', 'AUTOCAR', 'EVO MAGAZINE', 'FINANCIAL TIMES WEEKEND'];

  return (
    <section style={{ borderTop: '1px solid rgba(240,240,240,0.06)', borderBottom: '1px solid rgba(240,240,240,0.06)', padding: 'clamp(28px,4vw,40px) clamp(24px,6vw,96px)' }}>
      <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(240,240,240,0.25)', marginBottom: '20px', textAlign: 'center' }}>AS FEATURED IN</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '16px 32px' }}>
        {pressNames.map((name, i) => (
          <span key={i} style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(240,240,240,0.28)' }}>
            {name}
            {i < pressNames.length - 1 && <span style={{ color: 'rgba(240,240,240,0.15)', marginLeft: '32px' }}>·</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
