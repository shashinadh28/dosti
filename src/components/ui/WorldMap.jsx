import React from 'react';

/**
 * WorldMap — Lightweight version (no Framer Motion on paths)
 * Uses CSS animations + SVG animateMotion only.
 * Dramatically reduces CPU/GPU usage to prevent lag.
 */

const SVG_W = 1000;
const SVG_H = 500;

/* Mercator projection */
function project(lat, lng) {
    const x = ((lng + 180) / 360) * SVG_W;
    const latRad = (lat * Math.PI) / 180;
    const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = Math.min(SVG_H * 0.88, Math.max(SVG_H * 0.08,
        SVG_H / 2 - (SVG_W * mercN) / (2 * Math.PI)
    ));
    return { x, y };
}

function buildArc({ start, end }) {
    const s = project(start.lat, start.lng);
    const e = project(end.lat, end.lng);
    const cx = (s.x + e.x) / 2;
    const cy = (s.y + e.y) / 2 - Math.abs(e.x - s.x) * 0.25 - 18;
    return { path: `M ${s.x} ${s.y} Q ${cx} ${cy} ${e.x} ${e.y}`, s, e };
}

/* Inject one <style> block for all arc CSS animations */
const ARC_STYLE = `
  @keyframes arcDraw {
    0%   { stroke-dashoffset: 600; opacity: 0; }
    10%  { opacity: 0.85; }
    60%  { stroke-dashoffset: 0; opacity: 0.85; }
    85%  { stroke-dashoffset: 0; opacity: 0.85; }
    100% { stroke-dashoffset: 0; opacity: 0; }
  }
`;

function Arc({ dot, idx, lineColor }) {
    const { path, s, e } = buildArc(dot);
    const delay = idx * 1.2;
    const totalDur = 4 + delay;

    return (
        <g>
            {/* Faint static guide */}
            <path d={path} fill="none" stroke={lineColor} strokeWidth="0.7"
                strokeOpacity="0.18" strokeDasharray="4 5" />

            {/* Animated arc — CSS only, no JS */}
            <path
                d={path}
                fill="none"
                stroke={lineColor}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeDasharray="600"
                strokeDashoffset="600"
                style={{
                    animation: `arcDraw 3.5s ease-in-out ${delay}s infinite`,
                }}
            />

            {/* Moving dot — SVG-native animateMotion (no JS) */}
            <circle r="2.8" fill={lineColor} fillOpacity="0.9">
                <animateMotion
                    dur="3.5s"
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                    path={path}
                />
            </circle>

            {/* Static endpoint dots — no animation */}
            <circle cx={s.x} cy={s.y} r="3" fill={lineColor} fillOpacity="0.85" />
            <circle cx={e.x} cy={e.y} r="3" fill={lineColor} fillOpacity="0.85" />
        </g>
    );
}

/* Continent dots — static SVG, no animation */
const Continents = ({ color }) => (
    <g>
        <defs>
            <pattern id="cdp" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
                <circle cx="1.8" cy="1.8" r="1.5" fill={color} />
            </pattern>
        </defs>
        <ellipse cx="195" cy="195" rx="125" ry="115" fill="url(#cdp)" />
        <ellipse cx="310" cy="70" rx="46" ry="34" fill="url(#cdp)" />
        <ellipse cx="265" cy="358" rx="68" ry="108" fill="url(#cdp)" />
        <ellipse cx="490" cy="148" rx="68" ry="70" fill="url(#cdp)" />
        <ellipse cx="498" cy="88" rx="24" ry="36" fill="url(#cdp)" />
        <ellipse cx="450" cy="128" rx="16" ry="22" fill="url(#cdp)" />
        <ellipse cx="503" cy="310" rx="85" ry="118" fill="url(#cdp)" />
        <ellipse cx="565" cy="212" rx="38" ry="40" fill="url(#cdp)" />
        <ellipse cx="715" cy="168" rx="195" ry="125" fill="url(#cdp)" />
        <ellipse cx="648" cy="258" rx="38" ry="54" fill="url(#cdp)" />
        <ellipse cx="762" cy="298" rx="36" ry="24" fill="url(#cdp)" />
        <ellipse cx="828" cy="192" rx="18" ry="30" fill="url(#cdp)" />
        <ellipse cx="815" cy="378" rx="78" ry="56" fill="url(#cdp)" />
        <ellipse cx="874" cy="408" rx="14" ry="22" fill="url(#cdp)" />
    </g>
);

const WorldMap = ({ dots = [], lineColor = '#F5A023', opacity = 0.18 }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
        <style>{ARC_STYLE}</style>
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            preserveAspectRatio="xMidYMid meet"
        >
            <Continents color="rgba(255,255,255,0.7)" />
            {dots.map((dot, i) => (
                <Arc key={i} dot={dot} idx={i} lineColor={lineColor} />
            ))}
        </svg>
    </div>
);

export default WorldMap;
