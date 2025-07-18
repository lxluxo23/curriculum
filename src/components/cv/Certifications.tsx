import React from 'react';
import { Award, Link, CheckCircle } from 'lucide-react';

interface Certification {
    title: string;
    org: string;
    validationType: 'link' | 'code';
    validation: string;
    icon: string;
}

const Certifications: React.FC = () => {
    const certifications: Certification[] = [
        {
            title: 'Scrum Fundamentals',
            org: 'SCRUMstudy',
            validationType: 'link',
            validation: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-luisestebanc%C3%A9spedessepulveda.-932279.pdf',
            icon: '🏆'
        },
        {
            title: 'Desarrollo de aplicaciones JAVA',
            org: 'MindHub',
            validationType: 'link',
            validation: 'https://www.credly.com/badges/2c88e9d6-41e6-4aab-8bdf-084e66cf782b',
            icon: '☕'
        },
        {
            title: 'Programador Angular',
            org: 'Edutin Academy',
            validationType: 'link',
            validation: 'https://app.edutin.com/verify/10410494',
            icon: '🅰️'
        }
    ];

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2">
                <Award className="inline-block w-6 h-6 mr-2" />
                Certificaciones
            </h2>
            <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl" role="img" aria-label="certificate icon">
                                {cert.icon}
                            </span>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-gray-800">
                                        {cert.title}
                                    </h3>
                                    <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                                        {cert.org}
                                    </span>
                                </div>
                                <div className="mt-2 flex items-center gap-2 text-sm">
                                    {cert.validationType === 'link' ? (
                                        <>
                                            <Link className="w-4 h-4 text-gray-600" />
                                            <a
                                                href={cert.validation}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 underline"
                                            >
                                                Verificar certificación
                                            </a>
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle className="w-4 h-4 text-gray-600" />
                                            <span className="text-gray-600">
                                                Código de validación: {cert.validation}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;