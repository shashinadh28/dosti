import React from 'react';
import { motion } from 'framer-motion';

/**
 * TeamPage — /team
 * Premium card design:
 * - floating LinkedIn icon top-right
 * - large circular team photo
 * - name + role below
 * - animated bottom arrow / LinkedIn button
 * - hover: card lifts, glow ring appears, bg shifts
 */

const EASE = [0.22, 1, 0.36, 1];

const TEAM_MEMBERS = [
    {
        name: 'Deepak Teja',
        role: 'Founder & CEO',
        linkedin: 'https://www.linkedin.com/in/deepak-teja-peddoju',
        img: '/Team/Deepak_Teja.webp',
        accent: '#F5A023',
    },
    {
        name: 'Anusha Peddoju',
        role: 'Sr. Cloud Engineer',
        linkedin: 'https://www.linkedin.com/in/anusha-peddoju-46a41a1a3/',
        img: '/Team/Anusha_Peddoju.webp',
        accent: '#2D6A27',
    },
    {
        name: 'Sohail Mastan',
        role: 'Administrative Manager',
        linkedin: 'https://www.linkedin.com/in/sohail-mastan/',
        img: '/Team/Sohail.webp',
        accent: '#4F46E5',
    },
];

/* ─── Individual Team Card ─── */
const TeamCard = ({ member, index }) => (
    <motion.div
        className="team-card"
        style={{ '--accent': member.accent }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay: index * 0.14 }}
        whileHover={{ y: -14, transition: { duration: 0.35 } }}
    >
        {/* LinkedIn floating icon */}
        <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="team-card__mail"
            aria-label={`${member.name} LinkedIn`}
        >
            {/* LinkedIn icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        </a>

        {/* Photo */}
        <div className="team-card__pic-wrap">
            <img
                src={member.img}
                alt={member.name}
                className="team-card__pic"
            />
            {/* Glow ring */}
            <div className="team-card__pic-ring" />
        </div>

        {/* Text */}
        <div className="team-card__info">
            <h3 className="team-card__name">{member.name}</h3>
            <p className="team-card__role">{member.role}</p>
        </div>

        {/* Bottom shine bar */}
        <div className="team-card__shine" />
    </motion.div>
);

/* ─── Page ─── */
const TeamPage = () => (
    <div style={{ minHeight: '100vh', background: '#f5f6fa' }}>

        {/* ── Hero ── */}
        <div style={{
            background: 'linear-gradient(135deg, #1a2f1a 0%, #2d4a2d 50%, #1a2f1a 100%)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* grid overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
                backgroundSize: '55px 55px',
            }} />
            {/* blur blobs */}
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: 350, height: 350, borderRadius: '50%', background: 'rgba(245,160,35,0.07)', filter: 'blur(80px)' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: 280, height: 280, borderRadius: '50%', background: 'rgba(45,106,39,0.08)', filter: 'blur(60px)' }} />

            <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px 90px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.span
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '6px 18px', borderRadius: 999,
                        background: 'rgba(245,160,35,0.1)', border: '1px solid rgba(245,160,35,0.2)',
                        color: '#F5A023', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                        marginBottom: 20,
                    }}
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F5A023', animation: 'pulse 2s infinite' }} />
                    Our Team
                </motion.span>

                <motion.h1
                    style={{ color: '#fff', fontWeight: 800, lineHeight: 1.15, marginBottom: 16, fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
                    initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
                >
                    Meet Our Dedicated Team
                </motion.h1>

                <motion.p
                    style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7, maxWidth: 540, margin: '0 auto' }}
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                >
                    At Dhosti Global, our team is the backbone of our success, driving our mission
                    to provide exceptional recruiting, staffing, and support services worldwide.
                </motion.p>
            </div>

            {/* bottom wave */}
            <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 48 }} fill="#f5f6fa">
                <path d="M0,24 C480,48 960,0 1440,24 L1440,48 L0,48 Z" />
            </svg>
        </div>

        {/* ── Cards ── */}
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 24px 80px' }}>

            {/* Inline CSS for the card design */}
            <style>{`
        .team-card {
          position: relative;
          width: 100%;
          max-width: 340px;
          background: #fff;
          border-radius: 28px;
          padding: 44px 32px 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: box-shadow 0.35s ease;
          overflow: hidden;
        }
        .team-card:hover {
          box-shadow: 0 20px 60px color-mix(in srgb, var(--accent) 22%, transparent), 0 4px 16px rgba(0,0,0,0.08);
        }

        /* LinkedIn icon floating top-right */
        .team-card__mail {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          color: var(--accent);
          text-decoration: none;
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .team-card__mail:hover {
          background: var(--accent);
          color: #fff;
          transform: scale(1.12) rotate(-5deg);
          box-shadow: 0 6px 18px color-mix(in srgb, var(--accent) 40%, transparent);
        }

        /* Photo circle */
        .team-card__pic-wrap {
          position: relative;
          width: 160px;
          height: 160px;
          margin-bottom: 22px;
          flex-shrink: 0;
        }
        .team-card__pic {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
          object-position: top;
          display: block;
          position: relative;
          z-index: 1;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
          border: 4px solid #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
        }
        .team-card:hover .team-card__pic {
          transform: scale(1.06);
        }
        /* Glow ring — appears on hover */
        .team-card__pic-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2.5px solid var(--accent);
          opacity: 0;
          transform: scale(0.88);
          transition: opacity 0.35s, transform 0.35s;
        }
        .team-card:hover .team-card__pic-ring {
          opacity: 1;
          transform: scale(1);
        }

        /* Info */
        .team-card__info {
          text-align: center;
          flex: 1;
        }
        .team-card__name {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 6px;
          letter-spacing: -0.3px;
          transition: color 0.25s;
        }
        .team-card:hover .team-card__name {
          color: var(--accent);
        }
        .team-card__role {
          font-size: 14px;
          font-weight: 500;
          color: #888;
          margin: 0;
          letter-spacing: 0.02em;
        }

        /* Bottom shine accent bar */
        .team-card__shine {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
          border-radius: 0 0 24px 24px;
        }
        .team-card:hover .team-card__shine {
          transform: scaleX(1);
        }

        .team-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 340px));
          gap: 36px;
          justify-content: center;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

            <div className="team-cards-grid">
                {TEAM_MEMBERS.map((member, i) => (
                    <TeamCard key={member.name} member={member} index={i} />
                ))}
            </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 80px' }}>
            <motion.div
                style={{
                    background: 'linear-gradient(135deg, #233824 0%, #1a2f1a 100%)',
                    borderRadius: 28, padding: '48px 40px', textAlign: 'center',
                    position: 'relative', overflow: 'hidden',
                }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}
            >
                {/* deco circles */}
                <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', border: '2px solid rgba(245,160,35,0.12)' }} />
                <div style={{ position: 'absolute', bottom: -20, left: -20, width: 100, height: 100, borderRadius: '50%', border: '1.5px solid rgba(245,160,35,0.08)' }} />
                <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 22, marginBottom: 10, position: 'relative', zIndex: 1 }}>
                    Join Our Growing Team
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: 14, marginBottom: 28, maxWidth: 420, margin: '0 auto 28px', position: 'relative', zIndex: 1 }}>
                    We're always looking for talented individuals to join our mission of connecting global businesses with exceptional talent.
                </p>
                <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.06, boxShadow: '0 10px 32px rgba(245,160,35,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        display: 'inline-block', padding: '13px 32px', borderRadius: 12,
                        background: '#F5A023', color: '#fff', fontWeight: 700, fontSize: 14,
                        textDecoration: 'none', position: 'relative', zIndex: 1,
                    }}
                >
                    Get in Touch ↗
                </motion.a>
            </motion.div>
        </div>
    </div>
);

export default TeamPage;
