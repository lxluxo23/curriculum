import React from 'react';
import { Mail, Phone, MapPin, Calendar, Award, Book, Briefcase, Monitor } from 'lucide-react';
import WorkExperience from './WorkExperience';
import TechnicalSkills from './TechnicalSkills';
import Education from './Education';
import Certifications from './Certifications';

const birthDate = new Date(1997, 5, 20);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white font-sans">
            {/* Header Section */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Luis Esteban Céspedes Sepulveda</h1>
                <div className="flex justify-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>luis.cespedes.sep01@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>(+569) 53618681</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Maule, Chile</span>
                    </div>
                </div>
            </header>

            {/* Personal Information */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2">
                    Información Personal
                </h2>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {/* <span>Edad: 25 años</span> */}
                        <span>Edad: {age} años</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Fecha de Nacimiento: 20/06/1997</span>
                    </div>
                </div>
            </section>

            {/* Work Experience */}
            <WorkExperience />

            {/* Skills */}
            <TechnicalSkills />

            {/* Education */}
            <Education />

            {/* Certifications */}
            <Certifications />

        </div>
    );
};

export default Resume;