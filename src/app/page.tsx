import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const GameEmbed = dynamic(() => import("@/components/GameEmbed"), {
  ssr: false,
  loading: () => (
    <div className="w-full bg-[#1a1a1a] flex items-center justify-center" style={{ paddingBottom: "60%", position: "relative", minHeight: 320 }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#dc2626] border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  ),
});

const VOTES = 2847;

// SVG icon components (no emoji)
const KnifeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="10,54 36,28 44,36" fill="#e5e7eb"/>
    <rect x="40" y="12" width="10" height="18" rx="3" transform="rotate(45 45 21)" fill="#dc2626"/>
    <circle cx="16" cy="48" r="6" fill="none" stroke="#f59e0b" strokeWidth="2"/>
    <circle cx="16" cy="48" r="2" fill="#dc2626"/>
  </svg>
);

const StarIcon = ({ half = false }: { half?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={half ? "url(#half)" : "#f59e0b"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {half && (
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="#f59e0b"/>
          <stop offset="50%" stopColor="#374151"/>
        </linearGradient>
      </defs>
    )}
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const FullscreenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
    <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
  </svg>
);

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    text: "Precision knife throwing gameplay — every throw counts",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/></svg>
    ),
    text: "Huge weapon arsenal: knives, axes, swords, and fantasy blades",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/></svg>
    ),
    text: "Progressive level system with increasing difficulty",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
    text: "Combo system that rewards consistent throws with score multipliers",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
    text: "Fully mobile-optimized with touch controls",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    ),
    text: "Stunning 3D environments with crisp, clean visuals",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
    ),
    text: "Global-style high score tracking — beat your personal best",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
    text: "Completely free to play — no download, no registration required",
  },
];

const tags = ["Skill Games", "Arcade", "Casual", "Knife Games", "3D Games", "Free Online", "Unblocked"];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Header */}
      <header className="bg-[#1a1a1a] border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Knife Master home">
            <KnifeIcon />
            <span className="text-xl font-bold text-white tracking-tight">
              Knife<span className="text-[#dc2626]">Master</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm text-gray-400" aria-label="Main navigation">
            <a href="#how-to-play" className="hover:text-white transition-colors">How to Play</a>
            <a href="#tips" className="hover:text-white transition-colors">Tips</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* H1 */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Knife Master &ndash;{" "}
          <span className="text-[#dc2626]">Play Free Online</span> Knife Throwing Game
        </h1>
        <p className="text-center text-gray-400 text-sm mb-4">
          No download required &middot; Works on mobile &amp; desktop &middot; Free forever
        </p>

        {/* Game */}
        <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl mb-4">
          <GameEmbed />
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-3 mb-8 text-sm">
          <div className="flex gap-0.5 items-center" aria-label="Rating: 4.5 out of 5">
            {[0,1,2,3].map((s) => <StarIcon key={s} />)}
            <StarIcon half />
          </div>
          <span className="text-gray-300 font-semibold">4.5/5</span>
          <span className="text-gray-500">({VOTES.toLocaleString()} votes)</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-10" aria-label="Game categories">
          {tags.map((tag) => (
            <span key={tag} className="bg-[#1e1e1e] border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* SEO Content */}
        <div className="space-y-10 text-gray-300">

          {/* About */}
          <section id="about">
            <h2 className="text-xl font-bold text-white mb-3 border-l-4 border-[#dc2626] pl-3">About Knife Master</h2>
            <p>Knife Master is an intense, skill-based knife throwing game that challenges players to demonstrate perfect precision, timing, and control. In this captivating online game, your primary goal is to throw knives, axes, and legendary swords at various targets, ensuring each blade sticks cleanly into the surface. The game sounds simple at first glance &mdash; but mastering the knife throw requires patience, focus, and an extraordinary sense of timing that sets true knife masters apart from the rest.</p>
            <p className="mt-3">The gameplay in Knife Master revolves entirely around the concept of precision. Every single throw you make directly determines whether you advance or start over. Unlike other casual games that forgive mistakes easily, Knife Master demands accuracy. When your knife lands cleanly and sticks upright, you score points and unlock new challenges. When it does not stick or bounces back, your combo resets &mdash; forcing you to refocus and throw again with even greater care. This pure skill-based mechanic makes Knife Master one of the most rewarding arcade games available online today.</p>
            <p className="mt-3">Knife Master features stunning 3D visuals and clean environments that make every throw feel satisfying. The game combines pixel-art-styled characters with crisp 3D rendering, delivering a visual experience that is both attractive and performance-optimized. You can play Knife Master directly in your browser without downloading or installing anything, making it instantly accessible on both desktop computers and mobile devices. Whether you are at home or on the go, Knife Master is always ready to test your skills.</p>
            <p className="mt-3">As you progress through levels, Knife Master introduces new weapons &mdash; from standard kitchen knives to powerful battle axes and fantasy swords. Each weapon has its own weight distribution, rotation speed, and feel. Learning to master each unique blade is part of the long-term challenge and appeal of Knife Master. The deeper you dive into the game, the more rewarding every successful throw becomes.</p>
          </section>

          {/* How to Play */}
          <section id="how-to-play">
            <h2 className="text-xl font-bold text-white mb-3 border-l-4 border-[#dc2626] pl-3">How to Play Knife Master</h2>
            <p>Learning how to play Knife Master is straightforward, but mastering the knife throw takes considerable practice. The core control mechanism is intuitive: hold the left mouse button (or tap and hold on mobile) to prepare your throw, drag to set the desired power and angle, then release to send the knife flying through the air. The longer and farther you drag, the more power and rotation your throw generates.</p>
            <p className="mt-3">The angle of your throw is critically important in Knife Master. Small adjustments in the drag direction create significantly different knife trajectories. A knife thrown with a slight upward angle will rotate more slowly and gently, making it easier to judge its landing position. A steeper angle produces faster rotation, which can feel unpredictable until you have logged enough practice hours.</p>
            <p className="mt-3">One of the most exciting elements of Knife Master gameplay is the Combo system. Each consecutive successful throw adds to your combo multiplier, dramatically increasing your total score. The Combo system rewards consistency &mdash; players who maintain calm, controlled throws will rack up impressive scores. Conversely, a single missed throw resets the combo completely, creating genuine tension during every attempt.</p>
            <p className="mt-3">On mobile, Knife Master is fully touch-optimized. Simply hold your finger on the screen, drag to aim, and lift your finger to throw. The touch controls in Knife Master feel natural and responsive, making the game just as enjoyable on smartphones and tablets as on desktop. The game automatically adjusts the display for your screen size, ensuring a great experience regardless of the device you use.</p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-[#dc2626] pl-3">Game Features</h2>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0">{f.icon}</span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section id="tips">
            <h2 className="text-xl font-bold text-white mb-3 border-l-4 border-[#dc2626] pl-3">Tips &amp; Tricks for Knife Master</h2>
            <p>Becoming a true knife master requires more than just random throwing. The most important tip is to slow down and observe the rotation of your knife before releasing. Every knife in Knife Master has a predictable rotation pattern &mdash; once you recognize it, you can time your release to land the blade tip-first every single time.</p>
            <p className="mt-3">Focus on angle precision rather than raw throwing power. Many beginners in Knife Master make the mistake of throwing as hard as possible, hoping brute force will compensate for poor aim. In reality, a gentle, well-aimed throw almost always outperforms a powerful, uncontrolled one. Controlled knife throws build longer combos and earn more points.</p>
            <p className="mt-3">When starting a new level in Knife Master, take one or two test throws to calibrate your muscle memory for the current target distance and size. Each new environment behaves slightly differently. Adapting quickly to new targets separates casual players from true knife masters.</p>
            <p className="mt-3">If your combo breaks, reset mentally before your next throw. Frustration is the enemy of precision in Knife Master. Take a breath, refocus on the target, and approach the next throw with fresh confidence. The best knife masters stay calm under pressure, which is why the game rewards patience above all else.</p>
            <p className="mt-3">As you unlock new weapons in Knife Master, spend time experimenting with each blade. Axes rotate more slowly and require different timing than lighter knives. Fantasy swords have unique weight distributions that create surprising trajectories. Mastering each weapon type gives you the flexibility to excel across all of Knife Master&apos;s challenging stages.</p>
          </section>

          {/* Techniques */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-4 border-[#dc2626] pl-3">Advanced Knife Throwing Techniques</h2>
            <p>As you develop your skills in Knife Master, you will naturally begin to employ more advanced knife throwing techniques that help maintain long combos and maximize your score. Understanding these techniques deeply separates good players from exceptional knife masters.</p>
            <p className="mt-3">The Half-Spin technique involves releasing your knife precisely halfway through its rotation cycle, allowing the blade to complete exactly one full rotation before striking the target tip-first. This is the foundation of knife throwing in Knife Master and should be the first technique you master. Once the half-spin feels natural, all other throws become significantly easier to execute.</p>
            <p className="mt-3">The Power Throw is useful for specific stages in Knife Master where the target is farther away or moving rapidly. By dragging further before releasing, you add extra rotation and force to the throw. However, power throws require extra precision in angle control &mdash; the greater the power, the more sensitive the trajectory becomes to small aiming errors.</p>
            <p className="mt-3">Rhythm Throwing is an advanced technique where you maintain a consistent throwing cadence. Knife Master rewards players who develop a steady rhythm because it reduces overthinking and capitalizes on muscle memory. Players who achieve rhythm state in Knife Master often post their longest combos and highest scores during these focused sessions.</p>
          </section>

          {/* Why Play */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-4 border-[#dc2626] pl-3">Why Play Knife Master?</h2>
            <p>Knife Master stands out among online arcade games because it offers genuine skill progression. Unlike many games that rely heavily on luck or random elements, Knife Master is entirely deterministic &mdash; your performance is a direct reflection of your skill, focus, and practice. This makes every improvement feel genuinely earned and deeply satisfying.</p>
            <p className="mt-3">The game is also perfectly designed for both short sessions and extended play. You can jump into Knife Master for a few quick throws during a break, or settle in for an extended session chasing your personal high score. The addictive combo system always gives you one more reason to keep playing and improving your knife throwing skills. Knife Master is simply one of the best free skill games available online today.</p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-800 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <KnifeIcon />
            <span className="font-semibold text-gray-400">KnifeMaster.org</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy/" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service/" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
