import { motion, type Variants } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  Clock, ArrowRight, ExternalLink, BookOpen, Star, Play, Users,
  ChevronLeft, ChevronRight,
} from 'lucide-react';

/* ============================================================
   SVG THUMBNAILS — one unique illustration per course
   ============================================================ */

const CssThumbnail = () => (
  <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="cssBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ECFEFF" />
        <stop offset="100%" stopColor="#EFF6FF" />
      </linearGradient>
      <linearGradient id="cssBar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    <rect width="340" height="180" fill="url(#cssBg)" />
    {/* Dot grid */}
    <pattern id="cssDot" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="#06B6D4" fillOpacity="0.2" />
    </pattern>
    <rect width="340" height="180" fill="url(#cssDot)" />
    {/* Browser window */}
    <rect x="24" y="20" width="185" height="140" rx="10" fill="white" filter="drop-shadow(0 4px 16px rgba(6,182,212,0.18))" />
    <rect x="24" y="20" width="185" height="28" rx="10" fill="#0E7490" />
    <rect x="24" y="36" width="185" height="12" fill="#0E7490" />
    <circle cx="40" cy="34" r="5" fill="rgba(255,255,255,0.3)" />
    <circle cx="56" cy="34" r="5" fill="rgba(255,255,255,0.3)" />
    <circle cx="72" cy="34" r="5" fill="rgba(255,255,255,0.3)" />
    <rect x="92" y="28" width="80" height="12" rx="6" fill="rgba(255,255,255,0.2)" />
    {/* Code lines in browser */}
    <rect x="34" y="58" width="60" height="7" rx="3" fill="#06B6D4" fillOpacity="0.6" />
    <rect x="34" y="72" width="120" height="5" rx="2.5" fill="#94A3B8" fillOpacity="0.5" />
    <rect x="34" y="84" width="90" height="5" rx="2.5" fill="#94A3B8" fillOpacity="0.5" />
    <rect x="34" y="96" width="140" height="5" rx="2.5" fill="#94A3B8" fillOpacity="0.5" />
    <rect x="34" y="108" width="70" height="5" rx="2.5" fill="#06B6D4" fillOpacity="0.4" />
    <rect x="34" y="120" width="110" height="5" rx="2.5" fill="#94A3B8" fillOpacity="0.5" />
    <rect x="34" y="132" width="80" height="5" rx="2.5" fill="#94A3B8" fillOpacity="0.5" />
    {/* UI preview card on right */}
    <rect x="225" y="24" width="100" height="130" rx="10" fill="white" filter="drop-shadow(0 4px 12px rgba(6,182,212,0.15))" />
    <rect x="225" y="24" width="100" height="32" rx="10" fill="url(#cssBar)" />
    <rect x="225" y="44" width="100" height="12" fill="url(#cssBar)" />
    <rect x="233" y="30" width="40" height="10" rx="5" fill="rgba(255,255,255,0.4)" />
    <rect x="233" y="66" width="84" height="8" rx="4" fill="#E0F2FE" />
    <rect x="233" y="82" width="60" height="8" rx="4" fill="#BAE6FD" />
    <rect x="233" y="98" width="84" height="28" rx="6" fill="#EFF6FF" />
    <rect x="241" y="106" width="68" height="6" rx="3" fill="#BFDBFE" />
    <rect x="241" y="116" width="50" height="5" rx="2.5" fill="#BFDBFE" />
    <rect x="233" y="132" width="84" height="14" rx="7" fill="url(#cssBar)" />
    <text x="275" y="143" fontFamily="Inter,sans-serif" fontSize="8" fill="white" textAnchor="middle" fontWeight="700">Watch Now</text>
    {/* Tailwind badge */}
    <rect x="35" y="150" width="55" height="18" rx="9" fill="#06B6D4" />
    <text x="62" y="163" fontFamily="Inter,sans-serif" fontSize="9" fill="white" textAnchor="middle" fontWeight="700">Tailwind</text>
    <rect x="98" y="150" width="40" height="18" rx="9" fill="#2563EB" />
    <text x="118" y="163" fontFamily="Inter,sans-serif" fontSize="9" fill="white" textAnchor="middle" fontWeight="700">CSS</text>
  </svg>
);

const HtmlThumbnail = () => (
  <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="htmlBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF7ED" />
        <stop offset="100%" stopColor="#FFF1F2" />
      </linearGradient>
    </defs>
    <rect width="340" height="180" fill="url(#htmlBg)" />
    <pattern id="htmlDot" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="#f97316" fillOpacity="0.2" />
    </pattern>
    <rect width="340" height="180" fill="url(#htmlDot)" />
    {/* Main code editor */}
    <rect x="20" y="16" width="200" height="150" rx="12" fill="#1e293b" filter="drop-shadow(0 4px 20px rgba(249,115,22,0.2))" />
    <rect x="20" y="16" width="200" height="30" rx="12" fill="#0F172A" />
    <rect x="20" y="34" width="200" height="12" fill="#0F172A" />
    <circle cx="38" cy="31" r="5" fill="#ef4444" />
    <circle cx="54" cy="31" r="5" fill="#f59e0b" />
    <circle cx="70" cy="31" r="5" fill="#22c55e" />
    <text x="120" y="35" fontFamily="Inter,sans-serif" fontSize="9" fill="#64748b" textAnchor="middle">index.html</text>
    {/* HTML code lines */}
    <text x="32" y="64" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#f97316">&lt;!DOCTYPE html&gt;</text>
    <text x="32" y="78" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#f97316">&lt;html&gt;</text>
    <text x="42" y="92" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#60a5fa">&lt;head&gt;</text>
    <text x="52" y="106" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#84cc16">  &lt;title&gt;</text>
    <text x="42" y="120" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#60a5fa">&lt;/head&gt;</text>
    <text x="42" y="134" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#60a5fa">&lt;body&gt;</text>
    <rect x="32" y="138" width="2" height="12" rx="1" fill="#f97316">
      <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
    </rect>
    {/* Right side — web page preview */}
    <rect x="232" y="20" width="96" height="144" rx="10" fill="white" filter="drop-shadow(0 2px 12px rgba(249,115,22,0.15))" />
    <rect x="232" y="20" width="96" height="22" rx="10" fill="#f97316" />
    <rect x="232" y="34" width="96" height="8" fill="#f97316" />
    <text x="280" y="34" fontFamily="Inter,sans-serif" fontSize="8" fill="white" textAnchor="middle" fontWeight="700">My Website</text>
    <rect x="240" y="52" width="80" height="20" rx="4" fill="#FFF7ED" />
    <rect x="244" y="58" width="50" height="6" rx="3" fill="#f97316" fillOpacity="0.5" />
    <rect x="240" y="78" width="80" height="6" rx="3" fill="#E2E8F0" />
    <rect x="240" y="88" width="65" height="6" rx="3" fill="#E2E8F0" />
    <rect x="240" y="98" width="75" height="6" rx="3" fill="#E2E8F0" />
    <rect x="240" y="114" width="80" height="8" rx="4" fill="#FFF7ED" />
    <rect x="240" y="126" width="48" height="6" rx="3" fill="#f97316" fillOpacity="0.4" />
    <rect x="248" y="138" width="64" height="18" rx="9" fill="#f97316" />
    <text x="280" y="151" fontFamily="Inter,sans-serif" fontSize="8" fill="white" textAnchor="middle" fontWeight="700">Explore →</text>
    {/* HTML5 badge */}
    <rect x="26" y="155" width="50" height="20" rx="10" fill="#f97316" />
    <text x="51" y="169" fontFamily="Inter,sans-serif" fontSize="10" fill="white" textAnchor="middle" fontWeight="800">HTML5</text>
  </svg>
);

const FullStackThumbnail = () => (
  <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="fsBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAF5FF" />
        <stop offset="100%" stopColor="#FDF2F8" />
      </linearGradient>
      <linearGradient id="fsBar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <rect width="340" height="180" fill="url(#fsBg)" />
    <pattern id="fsDot" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="#a855f7" fillOpacity="0.18" />
    </pattern>
    <rect width="340" height="180" fill="url(#fsDot)" />
    {/* Arch diagram: Frontend → API → Backend → DB */}
    {/* Frontend box */}
    <rect x="16" y="52" width="72" height="76" rx="12" fill="white" filter="drop-shadow(0 2px 10px rgba(168,85,247,0.15))" />
    <rect x="16" y="52" width="72" height="24" rx="12" fill="url(#fsBar)" />
    <rect x="16" y="64" width="72" height="12" fill="url(#fsBar)" />
    <text x="52" y="67" fontFamily="Inter,sans-serif" fontSize="8" fill="white" textAnchor="middle" fontWeight="700">Frontend</text>
    <rect x="24" y="84" width="56" height="6" rx="3" fill="#F3E8FF" />
    <rect x="24" y="96" width="42" height="6" rx="3" fill="#F3E8FF" />
    <rect x="24" y="108" width="50" height="6" rx="3" fill="#F3E8FF" />
    <text x="52" y="125" fontFamily="Inter,sans-serif" fontSize="8" fill="#a855f7" textAnchor="middle" fontWeight="600">React.js</text>
    {/* Arrow */}
    <line x1="92" y1="90" x2="118" y2="90" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,2" />
    <polygon points="116,86 124,90 116,94" fill="#a855f7" />
    {/* API box */}
    <rect x="128" y="62" width="68" height="56" rx="12" fill="white" filter="drop-shadow(0 2px 10px rgba(168,85,247,0.15))" />
    <rect x="128" y="62" width="68" height="20" rx="12" fill="#7c3aed" />
    <rect x="128" y="74" width="68" height="8" fill="#7c3aed" />
    <text x="162" y="75" fontFamily="Inter,sans-serif" fontSize="8" fill="white" textAnchor="middle" fontWeight="700">REST API</text>
    <rect x="136" y="90" width="52" height="5" rx="2.5" fill="#EDE9FE" />
    <rect x="136" y="100" width="40" height="5" rx="2.5" fill="#EDE9FE" />
    <text x="162" y="115" fontFamily="Inter,sans-serif" fontSize="8" fill="#7c3aed" textAnchor="middle" fontWeight="600">Node.js</text>
    {/* Arrow */}
    <line x1="200" y1="90" x2="224" y2="90" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,2" />
    <polygon points="222,86 230,90 222,94" fill="#a855f7" />
    {/* Backend/DB box */}
    <rect x="234" y="52" width="88" height="76" rx="12" fill="white" filter="drop-shadow(0 2px 10px rgba(168,85,247,0.15))" />
    <rect x="234" y="52" width="88" height="24" rx="12" fill="url(#fsBar)" />
    <rect x="234" y="64" width="88" height="12" fill="url(#fsBar)" />
    <text x="278" y="67" fontFamily="Inter,sans-serif" fontSize="8" fill="white" textAnchor="middle" fontWeight="700">Database</text>
    {/* DB cylinders */}
    <ellipse cx="278" cy="92" rx="22" ry="7" fill="#F3E8FF" stroke="#a855f7" strokeWidth="1.5" />
    <rect x="256" y="92" width="44" height="20" fill="#F3E8FF" />
    <ellipse cx="278" cy="112" rx="22" ry="7" fill="#F3E8FF" stroke="#a855f7" strokeWidth="1.5" />
    <rect x="257" y="93" width="1.5" height="19" fill="#a855f7" fillOpacity="0.3" />
    <rect x="298" y="93" width="1.5" height="19" fill="#a855f7" fillOpacity="0.3" />
    <text x="278" y="125" fontFamily="Inter,sans-serif" fontSize="8" fill="#a855f7" textAnchor="middle" fontWeight="600">MongoDB</text>
    {/* Bottom deploy badge */}
    <rect x="110" y="148" width="120" height="22" rx="11" fill="url(#fsBar)" filter="drop-shadow(0 2px 6px rgba(168,85,247,0.35))" />
    <text x="170" y="163" fontFamily="Inter,sans-serif" fontSize="9" fill="white" textAnchor="middle" fontWeight="700">Full Stack Deploy 🚀</text>
  </svg>
);

const JavaThumbnail = () => (
  <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="javaBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFBEB" />
        <stop offset="100%" stopColor="#FFF7ED" />
      </linearGradient>
    </defs>
    <rect width="340" height="180" fill="url(#javaBg)" />
    <pattern id="javaDot" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="#f59e0b" fillOpacity="0.2" />
    </pattern>
    <rect width="340" height="180" fill="url(#javaDot)" />
    {/* IDE editor */}
    <rect x="16" y="14" width="210" height="152" rx="12" fill="#1C2333" filter="drop-shadow(0 4px 20px rgba(245,158,11,0.2))" />
    <rect x="16" y="14" width="210" height="30" rx="12" fill="#161D2E" />
    <rect x="16" y="34" width="210" height="10" fill="#161D2E" />
    <circle cx="34" cy="29" r="5" fill="#ef4444" />
    <circle cx="50" cy="29" r="5" fill="#f59e0b" />
    <circle cx="66" cy="29" r="5" fill="#22c55e" />
    <text x="121" y="33" fontFamily="Inter,sans-serif" fontSize="9" fill="#475569" textAnchor="middle">Main.java</text>
    {/* Java code */}
    <text x="28" y="58" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#60a5fa">public class</text>
    <text x="106" y="58" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#fbbf24"> Main </text>
    <text x="130" y="58" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="white">{"{"}</text>
    <text x="36" y="74" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#60a5fa">  public static</text>
    <text x="110" y="74" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#a78bfa"> void</text>
    <text x="36" y="90" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#fbbf24">    main(String[]</text>
    <text x="148" y="90" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="white"> args)</text>
    <text x="44" y="106" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#4ade80">    System.out</text>
    <text x="44" y="120" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#f97316">    .println(</text>
    <text x="44" y="134" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#86efac">    "Hello Java!"</text>
    <text x="28" y="150" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="white">{"}"}</text>
    <rect x="178" y="143" width="2" height="11" rx="1" fill="#f59e0b">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>
    {/* Right side concepts */}
    <rect x="238" y="18" width="90" height="148" rx="10" fill="white" filter="drop-shadow(0 2px 12px rgba(245,158,11,0.12))" />
    {[
      { y: 28, label: 'OOP', color: '#f59e0b' },
      { y: 56, label: 'Collections', color: '#f97316' },
      { y: 84, label: 'Streams', color: '#ef4444' },
      { y: 112, label: 'Threads', color: '#f59e0b' },
      { y: 140, label: 'Java 21+', color: '#f97316' },
    ].map((item) => (
      <g key={item.y}>
        <rect x="246" y={item.y} width="74" height="22" rx="8" fill={`${item.color}15`} stroke={item.color} strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="260" cy={item.y + 11} r="4" fill={item.color} fillOpacity="0.8" />
        <text x="268" y={item.y + 15} fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600" fill={item.color}>{item.label}</text>
      </g>
    ))}
    {/* Java logo area */}
    <text x="28" y="172" fontFamily="Inter,sans-serif" fontSize="20">☕</text>
    <rect x="52" y="160" width="46" height="18" rx="9" fill="#f59e0b" />
    <text x="75" y="173" fontFamily="Inter,sans-serif" fontSize="9" fill="white" textAnchor="middle" fontWeight="700">Java 21+</text>
  </svg>
);

const CThumbnail = () => (
  <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="cBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EFF6FF" />
        <stop offset="100%" stopColor="#EEF2FF" />
      </linearGradient>
    </defs>
    <rect width="340" height="180" fill="url(#cBg)" />
    <pattern id="cDot" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="#2563EB" fillOpacity="0.18" />
    </pattern>
    <rect width="340" height="180" fill="url(#cDot)" />
    {/* Terminal */}
    <rect x="14" y="14" width="200" height="152" rx="12" fill="#0F172A" filter="drop-shadow(0 4px 20px rgba(37,99,235,0.25))" />
    <rect x="14" y="14" width="200" height="30" rx="12" fill="#1e293b" />
    <rect x="14" y="34" width="200" height="10" fill="#1e293b" />
    <circle cx="32" cy="29" r="5" fill="#ef4444" />
    <circle cx="48" cy="29" r="5" fill="#f59e0b" />
    <circle cx="64" cy="29" r="5" fill="#22c55e" />
    <text x="114" y="33" fontFamily="Inter,sans-serif" fontSize="9" fill="#475569" textAnchor="middle">terminal</text>
    {/* C code */}
    <text x="24" y="58" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#a78bfa">#include</text>
    <text x="78" y="58" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#86efac"> &lt;stdio.h&gt;</text>
    <text x="24" y="74" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#60a5fa">int main() {"{"}</text>
    <text x="32" y="90" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#fbbf24">  int *ptr</text>
    <text x="100" y="90" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="white"> = &amp;x;</text>
    <text x="32" y="106" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#4ade80">  printf(</text>
    <text x="82" y="106" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#f97316">"%d"</text>
    <text x="32" y="118" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#e2e8f0">  , *ptr);</text>
    <text x="24" y="132" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#60a5fa">{"}"}</text>
    {/* Output */}
    <rect x="22" y="140" width="180" height="20" rx="6" fill="#064e3b" />
    <text x="30" y="154" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#4ade80">$ ./prog → 42</text>
    <rect x="168" y="143" width="2" height="14" rx="1" fill="#4ade80">
      <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite" />
    </rect>
    {/* Right — memory diagram */}
    <rect x="224" y="18" width="104" height="148" rx="10" fill="white" filter="drop-shadow(0 2px 12px rgba(37,99,235,0.1))" />
    <text x="276" y="38" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#1e3a8a" textAnchor="middle">Memory Layout</text>
    {[
      { y: 46, label: '0xFF10', val: 'x=42', color: '#2563EB' },
      { y: 72, label: '0xFF08', val: '*ptr', color: '#06B6D4' },
      { y: 98, label: '0xFF00', val: 'arr[]', color: '#a855f7' },
      { y: 124, label: 'Stack', val: '↓', color: '#f59e0b' },
    ].map((m) => (
      <g key={m.y}>
        <rect x="232" y={m.y} width="88" height="22" rx="6" fill={`${m.color}10`} stroke={m.color} strokeWidth="1" strokeOpacity="0.3" />
        <text x="240" y={m.y + 15} fontFamily="JetBrains Mono,monospace" fontSize="8" fill={m.color}>{m.label}</text>
        <text x="294" y={m.y + 15} fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#1e293b" textAnchor="end">{m.val}</text>
      </g>
    ))}
    <text x="276" y="160" fontFamily="Inter,sans-serif" fontSize="8" fill="#64748b" textAnchor="middle">Heap ↑ · Stack ↓</text>
  </svg>
);

const TcsThumbnail = () => (
  <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="tcsBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0FDFA" />
        <stop offset="100%" stopColor="#ECFDF5" />
      </linearGradient>
      <linearGradient id="tcsBar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <rect width="340" height="180" fill="url(#tcsBg)" />
    <pattern id="tcsDot" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="#14b8a6" fillOpacity="0.2" />
    </pattern>
    <rect width="340" height="180" fill="url(#tcsDot)" />
    {/* Exam result card */}
    <rect x="14" y="12" width="180" height="156" rx="14" fill="white" filter="drop-shadow(0 4px 20px rgba(20,184,166,0.2))" />
    <rect x="14" y="12" width="180" height="38" rx="14" fill="url(#tcsBar)" />
    <rect x="14" y="38" width="180" height="12" fill="url(#tcsBar)" />
    <text x="104" y="30" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="800" fill="white" textAnchor="middle">TCS NQT Prep</text>
    <text x="104" y="44" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.8)" textAnchor="middle">Placement Series 2026</text>
    {/* Sections */}
    {[
      { y: 62, label: 'Verbal Ability', pct: 88, color: '#14b8a6' },
      { y: 86, label: 'Reasoning', pct: 76, color: '#06B6D4' },
      { y: 110, label: 'Quantitative', pct: 82, color: '#2563EB' },
      { y: 134, label: 'Coding', pct: 92, color: '#a855f7' },
    ].map((s) => (
      <g key={s.y}>
        <text x="24" y={s.y + 10} fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="600" fill="#374151">{s.label}</text>
        <text x="176" y={s.y + 10} fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="700" fill={s.color} textAnchor="end">{s.pct}%</text>
        <rect x="24" y={s.y + 14} width="148" height="6" rx="3" fill="#F0FDFA" />
        <rect x="24" y={s.y + 14} width={148 * s.pct / 100} height="6" rx="3" fill={s.color} />
      </g>
    ))}
    {/* Score badge */}
    <rect x="30" y="158" width="148" height="6" rx="3" fill="#CCFBF1" />
    {/* Right side */}
    <rect x="206" y="16" width="122" height="148" rx="12" fill="white" filter="drop-shadow(0 2px 12px rgba(20,184,166,0.1))" />
    {/* Trophy */}
    <text x="267" y="52" fontFamily="Inter,sans-serif" fontSize="36" textAnchor="middle">🏆</text>
    <text x="267" y="76" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="800" fill="#14b8a6" textAnchor="middle">98%</text>
    <text x="267" y="90" fontFamily="Inter,sans-serif" fontSize="8" fill="#64748b" textAnchor="middle">Success Rate</text>
    <rect x="218" y="100" width="98" height="1" fill="#F0F4F8" />
    {/* Mini stats */}
    {[
      { y: 112, icon: '👩‍💻', label: 'Students', val: '5K+' },
      { y: 134, icon: '📋', label: 'Mock Tests', val: '50+' },
      { y: 156, icon: '✅', label: 'Selections', val: '2K+' },
    ].map((s) => (
      <g key={s.y}>
        <text x="222" y={s.y + 10} fontFamily="Inter,sans-serif" fontSize="13">{s.icon}</text>
        <text x="240" y={s.y + 6} fontFamily="Inter,sans-serif" fontSize="8" fill="#64748b">{s.label}</text>
        <text x="240" y={s.y + 18} fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#14b8a6">{s.val}</text>
      </g>
    ))}
  </svg>
);

/* ============================================================
   COURSE DATA
   ============================================================ */
const courses = [
  {
    id: 1,
    title: 'CSS + Tailwind CSS Full Course 2026 🔥',
    description: 'Beginner to Advanced + 2 Projects | Responsive Web Design Masterclass.',
    topics: ['CSS Fundamentals', 'Tailwind CSS', 'Responsive Design'],
    duration: 'Full Course',
    students: '180K',
    level: 'Beginner→Advanced',
    topColor: '#06B6D4',
    topGrad: 'linear-gradient(135deg, #06B6D4, #2563EB)',
    tag: 'Popular',
    isNew: true,
    Thumbnail: CssThumbnail,
    link: 'https://youtube.com/playlist?list=PLt4pb7qXP-vUl4XJdo-UqWAixbXmM9tvR&si=2d2pa3E60MZAQpTl',
  },
  {
    id: 2,
    title: 'HTML Full Course for Beginners',
    description: 'Complete HTML tutorial with a hands-on project to build your web foundation.',
    topics: ['HTML Basics', 'Semantic HTML', 'Forms & Tables'],
    duration: 'Full Course',
    students: '120K',
    level: 'Beginner',
    topColor: '#f97316',
    topGrad: 'linear-gradient(135deg, #f97316, #ef4444)',
    tag: 'New',
    isNew: true,
    Thumbnail: HtmlThumbnail,
    link: 'https://youtube.com/playlist?list=PLt4pb7qXP-vWYVqaalyJyNgnSWYusU8__&si=sCpPAaPcjkYmlotf',
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    description: 'End-to-end web development — frontend, backend, databases, and deployment.',
    topics: ['Frontend', 'Backend', 'Database', 'Deploy'],
    duration: 'Full Course',
    students: '95K',
    level: 'All Levels',
    topColor: '#a855f7',
    topGrad: 'linear-gradient(135deg, #a855f7, #ec4899)',
    tag: 'Hot',
    isNew: true,
    Thumbnail: FullStackThumbnail,
    link: 'https://youtube.com/playlist?list=PLt4pb7qXP-vUauB86mi-oVFueePoJfBOz&si=D-qDwIR8RQcB8leW',
  },
  {
    id: 4,
    title: 'Core Java Full Course 2026',
    description: 'Complete Java tutorial from basics to advanced — OOP, Collections, Streams & Java 21+.',
    topics: ['OOP', 'Collections', 'Multithreading'],
    duration: 'Full Course',
    students: '220K',
    level: 'Beginner→Advanced',
    topColor: '#f59e0b',
    topGrad: 'linear-gradient(135deg, #f59e0b, #f97316)',
    tag: 'Trending',
    isNew: true,
    Thumbnail: JavaThumbnail,
    link: 'https://youtube.com/playlist?list=PLt4pb7qXP-vXKqk942-HxudqI0HhnTt7H&si=ZEKxUQeKM8YCq5Pa',
  },
  {
    id: 5,
    title: 'C Programming Full Course 2026',
    description: 'Master C from scratch — pointers, memory management, file handling & more.',
    topics: ['Fundamentals', 'Pointers', 'Memory'],
    duration: 'Full Course',
    students: '310K',
    level: 'Beginner',
    topColor: '#2563EB',
    topGrad: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
    tag: 'Best Seller',
    isNew: false,
    Thumbnail: CThumbnail,
    link: 'https://youtube.com/playlist?list=PLt4pb7qXP-vVemE8pb-Ya7g4q7McPvdeB&si=UDGCtoozqs8W2tfN',
  },
  {
    id: 6,
    title: 'TCS NQT — Placement Series',
    description: 'Complete TCS NQT prep — aptitude, reasoning, verbal & coding all covered.',
    topics: ['Aptitude', 'Reasoning', 'Verbal'],
    duration: 'Full Course',
    students: '75K',
    level: 'All Levels',
    topColor: '#14b8a6',
    topGrad: 'linear-gradient(135deg, #14b8a6, #06B6D4)',
    tag: 'New',
    isNew: true,
    Thumbnail: TcsThumbnail,
    link: 'https://youtube.com/playlist?list=PLt4pb7qXP-vWS2Ld3ovxi598yk11Cq2C0&si=KX7i1GzSJIx0_KiS',
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */
const Courses = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const dirRef = useRef<1 | -1>(1); // 1 = right, -1 = left

  const CARD_W = 316;

  // Auto-scroll: 1px every 20ms (slow)
  useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el || isHovered.current) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 2) dirRef.current = -1;
      if (el.scrollLeft <= 2) dirRef.current = 1;
      el.scrollLeft += dirRef.current;
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const scrollByCard = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    // Pause auto-scroll while smooth animation plays (smooth scroll ~800ms)
    isHovered.current = true;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -CARD_W : CARD_W, behavior: 'smooth' });
    setTimeout(() => { isHovered.current = false; }, 1200);
  };
  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== BANNER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-3xl overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 55%, #0284c7 100%)',
            boxShadow: '0 16px 64px rgba(37,99,235,0.3)',
          }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            {/* LEFT — text */}
            <div className="flex-1 px-8 py-12 md:px-12 md:py-14 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                  style={{ background: 'rgba(255,255,255,0.18)', color: 'white', backdropFilter: 'blur(8px)' }}>
                  <Play className="w-3 h-3 fill-white" />
                  Popular Courses
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4 leading-tight"
              >
                Learn From The{' '}
                <span style={{ background: 'linear-gradient(135deg, #67e8f9, #a5f3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Best
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28 }}
                className="text-blue-200 text-sm md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed mb-8"
              >
                Industry-relevant curriculum by expert instructors — master programming and land your dream job.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.36 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  { label: '1,000+ Students', emoji: '👩‍💻' },
                  { label: '15+ Courses', emoji: '📚' },
                  { label: '98% Success Rate', emoji: '🏆' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
                    <span>{s.emoji}</span>{s.label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — SVG illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}
              className="hidden lg:block flex-shrink-0 w-[420px] xl:w-[480px] pr-8 py-8"
            >
              <svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="blueBar" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" /><stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                  <linearGradient id="orangeBar" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" /><stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                  <linearGradient id="purpleBar" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" /><stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <filter id="shadow2"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.15)" /></filter>
                </defs>
                <rect x="30" y="20" width="280" height="240" rx="18" fill="url(#cardGrad)" filter="url(#shadow2)" />
                <rect x="30" y="20" width="280" height="44" rx="18" fill="#2563EB" />
                <rect x="30" y="46" width="280" height="18" fill="#2563EB" />
                <circle cx="55" cy="42" r="7" fill="rgba(255,255,255,0.3)" />
                <text x="71" y="46" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="white">My Courses</text>
                <rect x="260" y="33" width="36" height="18" rx="9" fill="rgba(255,255,255,0.2)" />
                <text x="278" y="46" fontFamily="Inter,sans-serif" fontSize="9" fill="white" textAnchor="middle">View All</text>
                {[
                  { y: 80, emoji: '☕', name: 'Core Java', prog: 80, grad: 'url(#orangeBar)', pct: '80%' },
                  { y: 120, emoji: '🌐', name: 'Web Dev', prog: 60, grad: 'url(#blueBar)', pct: '60%' },
                  { y: 160, emoji: '🐍', name: 'Python', prog: 45, grad: 'url(#purpleBar)', pct: '45%' },
                ].map((row) => (
                  <g key={row.y}>
                    <rect x="40" y={row.y} width="260" height="32" rx="10" fill="#F8FAFF" />
                    <text x="56" y={row.y + 20} fontFamily="Inter,sans-serif" fontSize="14">{row.emoji}</text>
                    <text x="76" y={row.y + 14} fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="#1e3a8a">{row.name}</text>
                    <rect x="76" y={row.y + 19} width="144" height="5" rx="3" fill="#E0EAFF" />
                    <rect x="76" y={row.y + 19} width={144 * row.prog / 100} height="5" rx="3" fill={row.grad} />
                    <text x="284" y={row.y + 22} fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#2563EB">{row.pct}</text>
                  </g>
                ))}
                {[
                  { x: 45, icon: '📚', val: '42', lbl: 'Lessons' },
                  { x: 140, icon: '⏱️', val: '120h', lbl: 'Hours' },
                  { x: 235, icon: '🏆', val: '3', lbl: 'Certs' },
                ].map((s) => (
                  <g key={s.x}>
                    <rect x={s.x} y="204" width="74" height="48" rx="10" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="1" />
                    <text x={s.x + 37} y="224" fontFamily="Inter,sans-serif" fontSize="14" textAnchor="middle">{s.icon}</text>
                    <text x={s.x + 37} y="237" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="700" fill="#1e3a8a" textAnchor="middle">{s.val}</text>
                    <text x={s.x + 37} y="248" fontFamily="Inter,sans-serif" fontSize="8" fill="#64748b" textAnchor="middle">{s.lbl}</text>
                  </g>
                ))}
                <rect x="270" y="10" width="175" height="60" rx="14" fill="white" filter="url(#shadow2)" />
                <rect x="282" y="22" width="36" height="36" rx="10" fill="#FFF7ED" />
                <text x="300" y="46" fontFamily="Inter,sans-serif" fontSize="20" textAnchor="middle">🏆</text>
                <text x="326" y="33" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="700" fill="#1e293b">Achievement!</text>
                <text x="326" y="47" fontFamily="Inter,sans-serif" fontSize="9" fill="#64748b">Course Completed</text>
                <rect x="310" y="88" width="145" height="52" rx="13" fill="white" filter="url(#shadow2)" />
                <text x="324" y="108" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#1e293b">Course Rating</text>
                {[0, 1, 2, 3, 4].map(i => <text key={i} x={324 + i * 14} y="126" fontFamily="Arial" fontSize="13" fill="#FBBF24">★</text>)}
                <text x="396" y="126" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#1e293b"> 4.9</text>
                <rect x="290" y="158" width="165" height="56" rx="13" fill="white" filter="url(#shadow2)" />
                <text x="305" y="176" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#1e293b">Students Enrolled</text>
                {['#2563EB', '#06B6D4', '#14b8a6', '#a855f7'].map((c, i) => (
                  <circle key={i} cx={305 + i * 18} cy={196} r="11" fill={c} stroke="white" strokeWidth="2" />
                ))}
                <rect x="371" y="185" width="34" height="22" rx="8" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="1" />
                <text x="388" y="200" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#2563EB" textAnchor="middle">+5K</text>
                {[
                  { x: 295, y: 228, label: 'Java', color: '#f97316', bg: '#FFF7ED' },
                  { x: 355, y: 228, label: 'CSS', color: '#2563EB', bg: '#EFF6FF' },
                  { x: 415, y: 228, label: 'C++', color: '#a855f7', bg: '#FAF5FF' },
                ].map((b) => (
                  <g key={b.label}>
                    <rect x={b.x} y={b.y} width="48" height="24" rx="8" fill={b.bg} stroke={b.color} strokeWidth="1" strokeOpacity="0.4" />
                    <text x={b.x + 24} y={b.y + 16} fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill={b.color} textAnchor="middle">{b.label}</text>
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* ===== SINGLE-ROW CAROUSEL WITH ARROWS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Left Arrow */}
          <button
            onClick={() => scrollByCard('left')}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all group"
            style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.15)' }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollByCard('right')}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all group"
            style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.15)' }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, white 30%, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, white 30%, transparent)' }} />

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            onMouseEnter={() => { isHovered.current = true; }}
            onMouseLeave={() => { isHovered.current = false; }}
            className="flex gap-4 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => window.open(course.link, '_blank')}
                className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 bg-white border border-gray-100 group"
                style={{
                  width: 300,
                  scrollSnapAlign: 'start',
                  boxShadow: '0 2px 12px rgba(37,99,235,0.07)',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(37,99,235,0.18)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(37,99,235,0.07)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Thumbnail */}
                <div className="relative w-full overflow-hidden" style={{ height: 175 }}>
                  <course.Thumbnail />
                  {course.isNew && <span className="badge-new">NEW</span>}
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white z-10"
                    style={{ background: course.topColor }}
                  >
                    {course.tag}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: course.topGrad }} />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-[11px] text-gray-400 ml-1">5.0 · {course.students}</span>
                  </div>
                  <h3 className="text-sm font-bold font-display text-gray-900 mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3 leading-relaxed flex-1 line-clamp-2">{course.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {course.topics.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md font-medium bg-gray-50 text-gray-500 border border-gray-100">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                      <Clock className="w-3 h-3" />{course.duration}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); window.open(course.link, '_blank'); }}
                      className="flex items-center gap-1 text-[11px] font-semibold px-3 py-1 rounded-lg transition-all"
                      style={{ background: `${course.topColor}12`, color: course.topColor, border: `1px solid ${course.topColor}30` }}
                    >
                      Watch <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Hide scrollbar */}
          <style>{`.courses-scroll::-webkit-scrollbar{display:none}`}</style>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-5">All courses are 100% free on our YouTube channel</p>
          <motion.a
            href="https://www.youtube.com/@infotechiezz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="btn-primary inline-flex text-sm"
          >
            <BookOpen className="w-4 h-4" />
            View All Courses on YouTube
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
