"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogPortalCard() {
  const router = useRouter();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [status, setStatus] = useState('Waiting for security token or Passkey touch...');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isAuthenticating) {
      return undefined;
    }

    setProgress(12);
    setStatus('Waiting for security token or Passkey touch...');

    const scanTimer = window.setTimeout(() => {
      setProgress(48);
      setStatus('Communicating with hardware authenticator...');
    }, 650);

    const verifyTimer = window.setTimeout(() => {
      setProgress(82);
      setStatus('Credential verified. Loading secure blog container...');
    }, 1450);

    const routeTimer = window.setTimeout(() => {
      setProgress(100);
      router.push('/blog');
    }, 2300);

    return () => {
      window.clearTimeout(scanTimer);
      window.clearTimeout(verifyTimer);
      window.clearTimeout(routeTimer);
    };
  }, [isAuthenticating, router]);

  function openPortal() {
    setIsAuthenticating(true);
  }

  function cancelPortal() {
    setIsAuthenticating(false);
    setProgress(0);
    setStatus('Waiting for security token or Passkey touch...');
  }

  return (
    <>
      <button type="button" className="studio-card studio-link-card blog-portal-card" onClick={openPortal}>
        <span className="studio-card-title text-xl">
          How to Create a Professional Website in 2026
        </span>
        <span className="studio-card-text">
          Share your knowledge and attract clients with clean design, strong branding,
          and modern development practices.
        </span>
        <span className="studio-card-action">Read Blog</span>
      </button>

      {isAuthenticating && (
        <div className="auth-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="blog-auth-title">
          <div className="auth-modal-card">
            <div className="auth-shield" aria-hidden="true">◇</div>
            <h2 id="blog-auth-title">WebAuthn Authentication</h2>
            <p className="auth-subtitle">Hardware Token Attestation Required</p>

            <div className="auth-orb" aria-hidden="true">
              <div className="auth-ring"></div>
              <div className="auth-sensor"></div>
            </div>

            <p className="auth-status">{status}</p>

            <div className="auth-progress-track" aria-hidden="true">
              <div className="auth-progress-bar" style={{ width: `${progress}%` }}></div>
            </div>

            <button type="button" className="auth-cancel" onClick={cancelPortal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
