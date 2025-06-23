import RevealOnScroll from './RevealOnScroll';

const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web3'];

export default function Skills() {
  return (
    <RevealOnScroll>
      <section id="skills" className="py-20 bg-background px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <li key={skill} className="bg-white shadow px-4 py-2 rounded">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </RevealOnScroll>
  );
}
