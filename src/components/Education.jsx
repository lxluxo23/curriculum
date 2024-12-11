import React from 'react';
import { Book, MapPin, Calendar, GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            period: "Marzo 2019 - Diciembre 2020",
            institution: "Universidad Católica del Maule",
            location: "Talca, Chile",
            degree: "Ingeniería en Ejecución Informática",
            status: "Egresado (No titulado)",
            type: "university"
        },
        {
            period: "Marzo 2016 - Diciembre 2018",
            institution: "Centro de formación técnica San Agustín",
            location: "Talca, Chile",
            degree: "Analista Programador",
            status: "Titulado",
            type: "technical"
        },
        {
            period: "Marzo 2012 - Diciembre 2015",
            institution: "Centro Educacional Luis Rutten",
            location: "Talca, Chile",
            degree: "Mecánica Automotriz",
            status: "Titulado",
            type: "highschool"
        }
    ];

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2">
                <Book className="inline-block w-6 h-6 mr-2" />
                Educación
            </h2>
            <div className="space-y-4">
                {education.map((edu, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-gray-600" />
                                    <h3 className="font-bold text-gray-800 text-lg">
                                        {edu.institution}
                                    </h3>
                                </div>
                                <div className="text-gray-700 font-medium">
                                    {edu.degree}
                                </div>
                                <div className="flex items-center gap-4 text-gray-600 text-sm">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {edu.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {edu.period}
                                    </div>
                                </div>
                                <div className={`inline-block px-3 py-1 rounded-full text-sm ${edu.status === 'Titulado'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-blue-100 text-blue-800'
                                    }`}>
                                    {edu.status}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;