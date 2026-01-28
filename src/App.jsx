import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Code2, Database, Server, ChevronDown, ChevronUp, GraduationCap, Languages, Lightbulb, Briefcase, Calendar, MapPin, Send, User, MessageSquare, ChevronLeft, ChevronRight, X, Menu } from 'lucide-react';

const PERSONAL_DATA = {
    name: "Francis Vaccarezza",
    role: "Full Stack Developer",
    bio: "Desarrollador enfocado en el área financiera. Con mucha motivación para seguir perfeccionando mis habilidades y crecer profesionalmente, buscando nuevos desafíos para superarlos.",
    email: "francisvaccarezza@gmail.com",
    github: "https://github.com/franhii",
    linkedin: "https://www.linkedin.com/in/francis-vaccarezza/",
    location: "Venado Tuerto, Santa Fe, Argentina",
    phone: "(3462) 634962",

    skills: {
        frontend: [
            { name: "React", icon: "⚛️" },
            { name: "Angular", icon: "🅰️" },
            { name: "TypeScript", icon: "📘" }
        ],
        backend: [
            { name: "Java", icon: "☕" },
            { name: "Spring", icon: "🍃" },
            { name: "Spring Security", icon: "🔒" },
            { name: "JWT", icon: "🎫" }
        ],
        databases: [
            { name: "Oracle SQL", icon: "🔴" },
            { name: "PostgreSQL", icon: "🐘" },
            { name: "SQLite", icon: "💾" },
            { name: "MySQL", icon: "🐬" },
            { name: "MongoDB", icon: "🍃" }
        ]
    },

    languages: [
        { lang: "Español", level: "Nativo" },
        { lang: "Inglés", level: "Intermedio" }
    ],

    softSkills: [
        "Trabajo en equipo",
        "Comunicación efectiva",
        "Proactividad",
        "Flexibilidad",
        "Empatía",
        "Disciplina",
        "Honestidad"
    ],

    education: {
        title: "Tecnicatura en Desarrollo de Software",
        institution: "Instituto de Educación Superior Nº7 'Brigadier General Estanislao López'",
        location: "Venado Tuerto, Santa Fe",
        period: "2019 - 2022",
        status: "Finalizada"
    },

    experience: [
        {
            id: 1,
            company: "BESYSOFT S.A",
            position: "Analista Programador Senior",
            period: "Agosto 2022 - Actualidad",
            location: "Remoto",
            type: "Full-time",
            description: "Desarrollo de soluciones financieras enterprise utilizando metodologías ágiles",
            responsibilities: [
                "Desarrollo de microservicios REST/SOAP para productos financieros (Seguros, Préstamos, Refinanciación, VIC)",
                "Implementación de arquitectura desde cero para sistema de préstamos comerciales con Angular + Spring",
                "Aplicación de Scrum completo: Kick-offs, Refinamientos, Planning Poker, Retrospectivas, Demos",
                "Gestión de ciclo completo: Desarrollo (Bitbucket) → Testing → Producción",
                "Mantenimiento post-release utilizando Kanban para bugfixing y mejoras",
                "Migraciones de APIs legacy a Java moderno",
                "Diseño y optimización de bases de datos (Store Procedures, Funciones, Scripts)",
                "Implementación de seguridad con Spring Security y JWT"
            ],
            tech: ["Angular", "Spring Boot", "Java", "Oracle SQL", "REST/SOAP", "Jira", "Bitbucket", "Scrum", "Kanban"]
        },
        {
            id: 2,
            company: "FLEX TECH S.R.L",
            position: "Programador Java/SQL Jr.",
            period: "Enero 2022 - Agosto 2022",
            location: "Remoto",
            type: "Full-time",
            description: "Desarrollo de soluciones financieras backend y gestión de bases de datos",
            responsibilities: [
                "Análisis y desglosamiento de requerimientos en Jira/Trello",
                "Desarrollo de microservicios con Spring Framework (2.7/3.0) y Java (1.8/11)",
                "Adaptación de Web Services REST y SOAP para productos financieros",
                "Creación y actualización de procesos en Oracle BPM 5.7/10.3",
                "Testing de APIs con Postman, Swagger y SOAP UI",
                "Desarrollo de mejoras y actualizaciones en productos de Seguros, Préstamos y Refinanciación"
            ],
            tech: ["Java", "Spring", "Oracle BPM", "REST/SOAP", "PostgreSQL", "Postman", "Swagger"]
        }
    ],

    projects: [
        {
            id: 1,
            title: "Hotel Management System",
            description: "Sistema de disponibilidad de habitaciones para hoteles con su estado (Control para check-in).",
            tech: ["React", "Vite", "Spring Boot", "PostgreSQL", "JWT","Webhooks"],
            demo: "https://frontendgestionhotelestado.onrender.com/login",
            images: [
                "https://i.imgur.com/DuaL2dg.png",
                "https://i.imgur.com/VVhg4hj.png",
                "https://i.imgur.com/RKRFuM4.png",
                "https://i.imgur.com/3TRJztR.png",
                "https://i.imgur.com/AWN50GK.png"
            ],
            status: "MVP",
            statusColor: "green"
        },
        {
            id: 2,
            title: "E-Commerce Multi-tenant",
            description: "ERP con arquitectura multi-tenant donde se le presenta una solución al cliente. Contiene métodos de pago, gestión de ventas, trazabilidad y gráficos estadísticos de las ventas por producto/servicio o fechas.",
            tech: ["React", "Vite", "Spring Boot", "Spring Security", "PostgreSQL", "JWT","MP Integration","Webhooks"],
            images: [
                "https://i.imgur.com/96LGOVw.png"
            ],
            status: "En desarrollo",
            statusColor: "yellow"
        },
        {
            id: 3,
            title: "Pacentin - Historial Clínico",
            description: "Aplicación de escritorio Java para gestión de historiales clínicos y consultas de pacientes (fotos, PDFs, recetas, radiografías).",
            tech: ["Java", "JavaFX", "Spring Boot", "H2"],
            images: [
                "https://i.imgur.com/m1QImhZ.png",
                "https://i.imgur.com/AmXgADt.png",
                "https://i.imgur.com/93f6xAJ.png"
            ],
            status: "Finalizado",
            statusColor: "green"
        }
    ]
};

function ImageCarousel({ images, projectTitle }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <img
                    src={images[currentIndex]}
                    alt={`${projectTitle} - imagen ${currentIndex + 1}`}
                    className="w-full h-48 object-cover"
                />

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full ${
                                        idx === currentIndex ? 'bg-white' : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="relative max-w-5xl w-full">
                        <img
                            src={images[currentIndex]}
                            alt={`${projectTitle} - imagen ${currentIndex + 1}`}
                            className="w-full h-auto rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-3 h-3 rounded-full ${
                                                idx === currentIndex ? 'bg-white' : 'bg-white/50'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

function CollapsibleSection({ title, icon: Icon, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
            </button>

            {isOpen && (
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                    {children}
                </div>
            )}
        </div>
    );
}

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://jalisa-unsensualistic-unfemininely.ngrok-free.dev/api/portfolio/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus({
                    type: 'success',
                    message: '¡Mensaje enviado con éxito! Te responderé pronto.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Error al enviar');
            }
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: 'Hubo un error al enviar el mensaje. Intenta nuevamente o envíame un email directamente.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            {PERSONAL_DATA.name}
                        </span>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-6 items-center">
                            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
                            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
                            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
                            </button>
                        </div>

                        {/* Button Mobile */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-2">
                            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">About</a>
                            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Experience</a>
                            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Projects</a>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Contact</a>
                        </div>
                    )}
                </div>
            </nav>

            <section className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {PERSONAL_DATA.name}
                    </h1>
                    <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-4">
                        {PERSONAL_DATA.role}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
                        <MapPin className="w-4 h-4" />
                        <span>{PERSONAL_DATA.location}</span>
                    </div>
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

            <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Tech Stack</h2>

                    <div className="space-y-8 mb-12">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center flex items-center justify-center gap-2">
                                <Code2 className="w-5 h-5" /> Frontend
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {PERSONAL_DATA.skills.frontend.map(skill => (
                                    <span key={skill.name} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium flex items-center gap-2">
                                        <span>{skill.icon}</span> {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center flex items-center justify-center gap-2">
                                <Server className="w-5 h-5" /> Backend
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {PERSONAL_DATA.skills.backend.map(skill => (
                                    <span key={skill.name} className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium flex items-center gap-2">
                                        <span>{skill.icon}</span> {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center flex items-center justify-center gap-2">
                                <Database className="w-5 h-5" /> Databases
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {PERSONAL_DATA.skills.databases.map(skill => (
                                    <span key={skill.name} className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium flex items-center gap-2">
                                        <span>{skill.icon}</span> {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <CollapsibleSection title="Idiomas" icon={Languages}>
                            <div className="grid md:grid-cols-2 gap-4">
                                {PERSONAL_DATA.languages.map(lang => (
                                    <div key={lang.lang} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <span className="font-medium text-gray-900 dark:text-white">{lang.lang}</span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </CollapsibleSection>

                        <CollapsibleSection title="Soft Skills" icon={Lightbulb}>
                            <div className="flex flex-wrap gap-2">
                                {PERSONAL_DATA.softSkills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </CollapsibleSection>

                        <CollapsibleSection title="Formación Académica" icon={GraduationCap}>
                            <div className="space-y-2">
                                <h4 className="font-bold text-lg text-gray-900 dark:text-white">{PERSONAL_DATA.education.title}</h4>
                                <p className="text-gray-700 dark:text-gray-300">{PERSONAL_DATA.education.institution}</p>
                                <p className="text-gray-600 dark:text-gray-400">{PERSONAL_DATA.education.location}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>{PERSONAL_DATA.education.period}</span>
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                                        {PERSONAL_DATA.education.status}
                                    </span>
                                </div>
                            </div>
                        </CollapsibleSection>
                    </div>
                </div>
            </section>

            <section id="experience" className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Experiencia Profesional</h2>

                    <div className="space-y-4">
                        {PERSONAL_DATA.experience.map(exp => (
                            <CollapsibleSection key={exp.id} title={exp.company} icon={Briefcase} defaultOpen={exp.id === 1}>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h4>
                                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </span>
                                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 italic">{exp.description}</p>

                                    <div>
                                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Responsabilidades principales:</h5>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx}>{resp}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Tecnologías utilizadas:</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map(t => (
                                                <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CollapsibleSection>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Proyectos Freelance</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {PERSONAL_DATA.projects.map(project => (
                            <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                                <ImageCarousel images={project.images} projectTitle={project.title} />
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                                            project.statusColor === 'green'
                                                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                                : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                           className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                            <ExternalLink className="w-4 h-4" /> Ver demo en vivo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contacto</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
                        ¿Tenés un proyecto en mente? Completá el formulario y te responderé a la brevedad.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                <User className="w-4 h-4 inline mr-2" />
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                <Mail className="w-4 h-4 inline mr-2" />
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                <MessageSquare className="w-4 h-4 inline mr-2" />
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows="6"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                                placeholder="Contame sobre tu proyecto..."
                            />
                        </div>

                        {formStatus.message && (
                            <div className={`p-4 rounded-lg ${
                                formStatus.type === 'success'
                                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                            }`}>
                                {formStatus.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>Enviando...</>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    Enviar Mensaje
                                </>
                            )}
                        </button>

                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                            También podés escribirme directamente a{' '}
                            <a href={`mailto:${PERSONAL_DATA.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                {PERSONAL_DATA.email}
                            </a>
                        </p>
                    </form>
                </div>
            </section>

            <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
                    <p>© 2025 {PERSONAL_DATA.name}. Built with React + Vite</p>
                </div>
            </footer>
        </div>
    );
}

export default App;