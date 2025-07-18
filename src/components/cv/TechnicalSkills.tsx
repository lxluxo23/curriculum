import React from 'react';
import { Monitor } from 'lucide-react';

interface Skill {
    name: string;
    details?: string;
    level?: string;
}

interface SkillCategories {
    languages: Skill[];
    frameworks: Skill[];
    databases: {
        relational: string[];
        nosql: string[];
    };
    devops: Skill[];
    cloud: Skill[];
    mobile: Skill[];
    testing: Skill[];
    other: Skill[];
}

const TechnicalSkills: React.FC = () => {
    const skillCategories: SkillCategories = {
        languages: [
            { name: 'Java', details: 'Java 1.8, Java 11' },
            { name: 'Python 3+' },
            { name: 'PHP' },
            { name: 'JavaScript/TypeScript' },
            { name: '.NET' }
        ],
        frameworks: [
            { name: 'Spring Boot' },
            { name: 'Laravel 7' },
            { name: 'NodeJS 16+' },
            { name: 'Angular 13+' },
            { name: 'Ionic Angular' },
            { name: 'Flask', details: 'Python Web Framework' }
        ],
        databases: {
            relational: ['MySQL', 'PostgreSQL', 'Microsoft SQL', 'Oracle', 'MariaDB'],
            nosql: ['MongoDB', 'Redis', 'Cassandra']
        },
        devops: [
            { name: 'Docker', level: 'Avanzado' },
            { name: 'Jenkins', details: 'Pipelines, CI/CD' },
            { name: 'Linux', details: 'Administración de servidores' },
            { name: 'GitHub Actions' }
        ],
        cloud: [
            { name: 'Railway' },
            { name: 'AWS', details: 'EC2' },
            { name: 'VPN', details: 'WireGuard' }
        ],
        mobile: [
            { name: 'Android Studio' },
            { name: 'Flutter', details: 'Publicación en Play Store' },
            { name: 'Ionic Angular' }
        ],
        testing: [
            { name: 'Postman', details: 'API Testing' },
            { name: 'SonarQube', details: 'Análisis de código' },
            { name: 'Unit Testing' }
        ],
        other: [
            { name: 'WebSockets' },
            { name: 'OAuth 2.0/JWT' },
            { name: 'SSL/TLS' },
            { name: 'Scrum' },
            { name: 'Networking' }
        ]
    };

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2">
                <Monitor className="inline-block w-6 h-6 mr-2" />
                Habilidades Técnicas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Lenguajes y Frameworks */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Lenguajes y Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                        {[...skillCategories.languages, ...skillCategories.frameworks].map(skill => (
                            <span key={skill.name} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {skill.details ? `${skill.name} (${skill.details})` : skill.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bases de Datos */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Bases de Datos</h3>
                    <div className="mb-2">
                        <h4 className="text-sm text-gray-600 mb-1">Relacionales</h4>
                        <div className="flex flex-wrap gap-2">
                            {skillCategories.databases.relational.map(db => (
                                <span key={db} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{db}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm text-gray-600 mb-1">NoSQL</h4>
                        <div className="flex flex-wrap gap-2">
                            {skillCategories.databases.nosql.map(db => (
                                <span key={db} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{db}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DevOps y Cloud */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">DevOps & Cloud</h3>
                    <div className="flex flex-wrap gap-2">
                        {[...skillCategories.devops, ...skillCategories.cloud].map(skill => (
                            <span key={skill.name} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                {skill.details || skill.level ? `${skill.name} (${skill.details || skill.level})` : skill.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Desarrollo Móvil */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Desarrollo Móvil</h3>
                    <div className="flex flex-wrap gap-2">
                        {skillCategories.mobile.map(skill => (
                            <span key={skill.name} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                                {skill.details ? `${skill.name} (${skill.details})` : skill.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Testing y Herramientas */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Testing y Herramientas</h3>
                    <div className="flex flex-wrap gap-2">
                        {skillCategories.testing.map(skill => (
                            <span key={skill.name} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                                {skill.details ? `${skill.name} (${skill.details})` : skill.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Otras Habilidades */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Otras Habilidades</h3>
                    <div className="flex flex-wrap gap-2">
                        {skillCategories.other.map(skill => (
                            <span key={skill.name} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                                {skill.details ? `${skill.name} (${skill.details})` : skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;