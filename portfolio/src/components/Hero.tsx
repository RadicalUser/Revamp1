import RevealOnScroll from './RevealOnScroll';

export default function Hero() {
  return (
    <RevealOnScroll>
      <section className="min-h-screen flex flex-col justify-center items-center bg-primary text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Dinas Pratap</h1>
        <p className="text-xl md:text-2xl mb-8">Front-End Developer & Blockchain Enthusiast</p>
        <a href="#projects" className="inline-block bg-accent hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg">View Projects</a>
      </section>
    </RevealOnScroll>
  );
}
