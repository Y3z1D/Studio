"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = name.trim().slice(0, 80);
    const trimmedEmail = email.trim().slice(0, 120);
    const trimmedMessage = message.trim().slice(0, 1200);
    const subject = encodeURIComponent(`Website contact from ${trimmedName}`);
    const body = encodeURIComponent(`Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`);
    const recipient = ['Yaizeds', 'gmail.com'].join('@');
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="studio-form">
      <div className="studio-field">
        <label>Name</label>
        <input
          required
          type="text"
          name="name"
          autoComplete="name"
          maxLength={80}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="studio-input"
        />
      </div>

      <div className="studio-field">
        <label>Email</label>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          maxLength={120}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="studio-input"
        />
      </div>

      <div className="studio-field">
        <label>Message</label>
        <textarea
          required
          name="message"
          maxLength={1200}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="studio-input"
        />
      </div>

      <div>
        <button type="submit" className="studio-button">
          Send Message
        </button>
      </div>
    </form>
  );
}
