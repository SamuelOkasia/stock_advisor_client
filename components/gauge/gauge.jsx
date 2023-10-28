import './gauge.css'

function Gauge({ value }) {
    const MAX_VALUE = 100; // Max value for your gauge
    const MIN_ANGLE = -90; // Start angle
    const MAX_ANGLE = 90; // End angle

    const angle = MIN_ANGLE + (value / MAX_VALUE) * (MAX_ANGLE - MIN_ANGLE);

    return (
        <svg width="220" height="120" viewBox="0 0 220 120">
            <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#881219", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "#FBAE10", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#19826C", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            {/* Base semicircle */}
            <path
                className="baseSemicircle"
                d="M 10 110 A 100 100 0 0 1 210 110"
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="10"
            />

            {/* Pointer or needle */}
            <line
                className="needle"
                x1="110"
                y1="110"
                x2={110 + 70 * Math.cos(Math.PI * angle / 180)}
                y2={110 + 70 * Math.sin(Math.PI * angle / 180)}
                stroke="#3498db"
                strokeWidth="5"
                strokeLinecap="round"
            />

            {/* Text value in the center */}
            {/*<text x="110" y="60" fontSize="20" fontWeight="bold" textAnchor="middle">*/}
            {/*    {value}%*/}
            {/*</text>*/}
        </svg>
    );
}

export default Gauge;
