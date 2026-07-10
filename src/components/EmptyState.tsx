export function EmptyState() {
    return (
        <div className="flex flex-col items-center py-8">
            <svg width="100%" viewBox="0 0 680 320" role="img" xmlns="http://www.w3.org/2000/svg">
                <title>No habits yet</title>
                <desc>Animated confetti illustration encouraging you to add your first habit</desc>

                <style>{`
          @keyframes drift1 { 0%,100%{transform:translateY(0) rotate(12deg)}  50%{transform:translateY(-10px) rotate(20deg)} }
          @keyframes drift2 { 0%,100%{transform:translateY(0) rotate(-20deg)} 50%{transform:translateY(-7px)  rotate(-8deg)} }
          @keyframes drift3 { 0%,100%{transform:translateY(0) rotate(35deg)}  50%{transform:translateY(-12px) rotate(50deg)} }
          @keyframes drift4 { 0%,100%{transform:translateY(0) rotate(-5deg)}  50%{transform:translateY(-6px)  rotate(5deg)} }
          @keyframes drift5 { 0%,100%{transform:translateY(0) rotate(60deg)}  50%{transform:translateY(-9px)  rotate(45deg)} }
          @keyframes drift6 { 0%,100%{transform:translateY(0) rotate(-40deg)} 50%{transform:translateY(-11px) rotate(-55deg)} }
          @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
          .p1  { transform-origin:170px 80px;   animation: drift1 2.8s ease-in-out infinite }
          .p2  { transform-origin:240px 50px;   animation: drift2 3.2s ease-in-out infinite }
          .p3  { transform-origin:340px 40px;   animation: drift3 2.5s ease-in-out infinite 0.3s }
          .p4  { transform-origin:430px 65px;   animation: drift4 3.0s ease-in-out infinite 0.6s }
          .p5  { transform-origin:500px 90px;   animation: drift5 2.7s ease-in-out infinite 0.2s }
          .p6  { transform-origin:150px 140px;  animation: drift6 3.4s ease-in-out infinite 0.4s }
          .p7  { transform-origin:520px 145px;  animation: drift1 2.9s ease-in-out infinite 0.7s }
          .p8  { transform-origin:200px 190px;  animation: drift3 3.1s ease-in-out infinite 0.1s }
          .p9  { transform-origin:470px 185px;  animation: drift2 2.6s ease-in-out infinite 0.5s }
          .p10 { transform-origin:300px 200px;  animation: drift5 3.3s ease-in-out infinite 0.3s }
          .p11 { transform-origin:380px 55px;   animation: drift4 2.8s ease-in-out infinite 0.8s }
          .p12 { transform-origin:110px 110px;  animation: drift6 3.0s ease-in-out infinite 0.2s }
          .c1  { transform-origin:270px 82px;   animation: drift2 3.2s ease-in-out infinite 0.1s }
          .c2  { transform-origin:460px 110px;  animation: drift4 3.0s ease-in-out infinite 0.4s }
          .c3  { transform-origin:175px 168px;  animation: drift6 3.4s ease-in-out infinite 0.6s }
          .c4  { transform-origin:490px 168px;  animation: drift1 2.9s ease-in-out infinite 0.2s }
          .c5  { transform-origin:350px 215px;  animation: drift5 3.3s ease-in-out infinite 0.5s }
          .circle-main { transform-origin:340px 140px; animation: float 3s ease-in-out infinite }
        `}</style>

                {/* Square confetti */}
                <rect className="p1" x="162" y="72" width="16" height="16" rx="3" fill="#3b82f6" opacity="0.85"/>
                <rect className="p2" x="232" y="44" width="12" height="12" rx="2" fill="#ec4899" opacity="0.85"/>
                <rect className="p3" x="334" y="34" width="14" height="14" rx="3" fill="#f59e0b" opacity="0.85"/>
                <rect className="p4" x="424" y="58" width="10" height="10" rx="2" fill="#10b981" opacity="0.85"/>
                <rect className="p5" x="493" y="82" width="16" height="16" rx="3" fill="#8b5cf6" opacity="0.85"/>
                <rect className="p6" x="143" y="132" width="12" height="12" rx="2" fill="#f97316" opacity="0.85"/>
                <rect className="p7" x="512" y="138" width="14" height="14" rx="3" fill="#ec4899" opacity="0.85"/>
                <rect className="p8" x="193" y="182" width="10" height="10" rx="2" fill="#10b981" opacity="0.85"/>
                <rect className="p9" x="463" y="178" width="12" height="12" rx="3" fill="#3b82f6" opacity="0.85"/>
                <rect className="p10" x="293" y="194" width="16" height="16" rx="3" fill="#f59e0b" opacity="0.85"/>
                <rect className="p11" x="373" y="48" width="10" height="10" rx="2" fill="#f97316" opacity="0.85"/>
                <rect className="p12" x="103" y="103" width="14" height="14" rx="3" fill="#8b5cf6" opacity="0.85"/>

                {/* Circle confetti */}
                <circle className="c1" cx="270" cy="82" r="7" fill="#10b981" opacity="0.7"/>
                <circle className="c2" cx="460" cy="110" r="5" fill="#f59e0b" opacity="0.7"/>
                <circle className="c3" cx="175" cy="168" r="6" fill="#3b82f6" opacity="0.7"/>
                <circle className="c4" cx="490" cy="168" r="8" fill="#ec4899" opacity="0.7"/>
                <circle className="c5" cx="350" cy="215" r="5" fill="#8b5cf6" opacity="0.7"/>

                {/* Center circle — light/dark aware */}
                <g className="circle-main">
                    <circle cx="340" cy="140" r="52" className="fill-blue-50 dark:fill-blue-950"/>
                    <circle cx="340" cy="140" r="52" fill="none" stroke="#3b82f6" strokeWidth="3" opacity="0.3"/>
                    <circle cx="340" cy="140" r="44" className="fill-blue-100 dark:fill-blue-900" opacity="0.6"/>
                    <path
                        d="M320 140 l14 14 l26 -26"
                        stroke="#3b82f6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </g>
            </svg>
            <h5 className="text-claude-text dark:text-claude-text-dark mb-2  text-2xl">No habits yet</h5>
            <span className="text-claude-mute-text text-sm">Add your first habit above to get started</span>
        </div>
    );
}