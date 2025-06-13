import React from 'react';
import './Blog.css';

export const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>

      <section className="blog-section">
        <h2>📚 Beginner Guides & Tutorials</h2>
        <p>
          New to crypto? Our beginner-friendly guides and step-by-step tutorials
          will help you understand the basics, from creating a wallet to buying
          your first coin.
        </p>
      </section>

      <section className="blog-section">
        <h2>🧠 Crypto Concepts Explained Simply</h2>
        <p>
          Confused by terms like blockchain, DeFi, or gas fees? We break down complex
          cryptocurrency concepts into clear, easy-to-understand explanations—no jargon, no stress.
        </p>
      </section>

      <p className="author-signature">✍️ Written by Manas</p>
    </div>
  );
};
