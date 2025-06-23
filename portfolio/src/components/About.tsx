import RevealOnScroll from './RevealOnScroll';

export default function About() {
  return (
    <RevealOnScroll>
      <section id="about" className="py-20 bg-background px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a passionate front-end developer specializing in React, Next.js, and blockchain integrations.
          </p>
        </div>
      </section>
    </RevealOnScroll>
  );
}
