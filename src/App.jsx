import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Code2 } from 'lucide-react';

// DATA - Actualiza con tu info
const PERSONAL_DATA = {
    name: "Francisco",
    role: "Full Stack Developer",
    bio: "Desarrollador apasionado por crear soluciones web modernas y escalables.",
    email: "tu@email.com",
    github: "https://github.com/franhii",
    linkedin: "https://linkedin.com/in/tu-perfil",
    skills: ["React", "Angular", "Node.js", "TypeScript", "Python", "SQL"],
    projects: [
        {
            id: 1,
            title: "Proyecto 1",
            description: "Descripción breve del proyecto",
            tech: ["React", "Node.js"],
            github: "https://github.com/franhii/proyecto1",
            demo: "https://demo.com"
        },
        // Agregar más proyectos
    ]
};

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {PERSONAL_DATA.name}
          </span>
                    <div className="flex gap-6 items-center">
                        <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                        <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
                        <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {PERSONAL_DATA.name}
                    </h1>
                    <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-8">
                        {PERSONAL_DATA.role}
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                        {PERSONAL_DATA.bio}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href={PERSONAL_DATA.github} target="_blank" rel="noopener noreferrer"
                           className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </a>
                        <a href={PERSONAL_DATA.linkedin} target="_blank" rel="noopener noreferrer"
                           className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </a>
                        <a href={`mailto:${PERSONAL_DATA.email}`}
                           className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Skills</h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {PERSONAL_DATA.skills.map(skill => (
                            <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                {skill}
              </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PERSONAL_DATA.projects.map(project => (
                            <div key={project.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                      {t}
                    </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                       className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                        <Code2 className="w-4 h-4" /> Code
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                           className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                            <ExternalLink className="w-4 h-4" /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        ¿Tenés un proyecto en mente? Contactame y hablemos.
                    </p>
                    <a href={`mailto:${PERSONAL_DATA.email}`}
                       className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Send Email
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
                    <p>© 2025 {PERSONAL_DATA.name}. Built with React + Vite</p>
                </div>
            </footer>
        </div>
    );
}

export default App;