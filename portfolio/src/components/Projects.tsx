import RevealOnScroll from './RevealOnScroll';

const projects = [
  { title: 'Wallet Protector', desc: 'Phishing detector & auto-swap tool.', link: '#' },
  { title: 'R5NINES Website', desc: 'Consulting services front-end.', link: '#' },
  { title: 'Finance Tracker', desc: 'Personal finance dashboard.', link: '#' },
];

export default function Projects() {
  return (
    <RevealOnScroll>
      <section id="projects" className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((p) => (
            <div key={p.title} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-700 mb-4">{p.desc}</p>
              <a href={p.link} className="text-accent hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
    </RevealOnScroll>
  );
}
