import RevealOnScroll from './RevealOnScroll';

export default function Contact() {
  return (
    <RevealOnScroll>
      <section id="contact" className="py-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="mb-8 text-gray-700">Feel free to reach out for collaborations or just a friendly hello!</p>
          <a href="mailto:example@example.com" className="inline-block bg-accent hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg">Email Me</a>
        </div>
      </section>
    </RevealOnScroll>
  );
}
