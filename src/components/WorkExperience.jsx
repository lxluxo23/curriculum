import React from 'react';
import { Briefcase, Wrench } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Valposystems",
      period: "Octubre 2023 - actualidad",
      location: "Talca, Chile",
      position: "Programador Full Stack",
      projects: [
        {
          name: "Proyecto EVAST",
          description: "Sistema de gestión de riesgos para la salud",
          responsibilities: [
            "Diseño, desarrollo y mantenimiento de sistema de gestión de riesgos para la salud, enfocado en vigilancia ambiental y salud de trabajadores expuestos a agentes de riesgo.",
            "Mantenimiento de la aplicación web EVAST, facilitando el ingreso y mantenimiento de registros de actividades de vigilancia ambiental y salud de trabajadores, incluyendo manejo del riesgo RPSL.",
            "Implementación y mantenimiento de servicios backend, asegurando rendimiento óptimo y seguridad de datos.",
            "Revisión de código y pruebas de integración para garantizar calidad y fiabilidad del software.",
            "Implementación de mejoras continuas y correcciones basadas en feedback de usuarios."
          ],
          integrations: [
            "Implementación e integración de servicios SOAP para enviar documentos electrónicos al organismo SUSESO",
            "Uso de JAXB para manipulación y transformación de e-docs",
            "Cumplimiento de requerimientos normativos del Instituto de Seguridad Laboral (ISL)"
          ],
          technologies: [
            {
              name: "Spring Boot y Apache Camel",
              description: "Desarrollo de servicios REST, facilitando integración y manejo de procesos de negocio"
            },
            {
              name: "Angular (v8)",
              description: "Desarrollo frontend, creando interfaces interactivas y responsivas"
            },
            {
              name: "Git y Gitflow",
              description: "Control de versiones y gestión del flujo de trabajo"
            },
            {
              name: "JBoss Fuse EAP y SQL Server",
              description: "Servidor de aplicaciones y gestión de base de datos"
            },
            {
              name: "SCRUM",
              description: "Metodología ágil para planificación y desarrollo iterativo"
            }
          ]
        }
      ]
    },
    {
      company: "Gas Maule SPA",
      period: "Septiembre 2022 - Diciembre 2022",
      location: "Talca, Chile",
      position: "Programador Full Stack, Programador Móvil, Administrador de dominio, Administrador cloud",
      responsibilities: [
        "Desarrollo de sistema existente basado en Laravel",
        "Desarrollo de aplicación móvil de reparto de choferes en Android Studio",
        "Desarrollo de aplicación móvil de pedido de gas clientes en Flutter",
        "Administración de aplicaciones en servidores ECS Cloud (Huawei Cloud)",
        "Gestión de página del dominio principal gasmaule.cl",
        "Administración de Azure AD para correos institucionales"
      ]
    },
    {
      company: "Grupo Firma Holding Empresarial",
      period: "Octubre 2021 - Julio 2022",
      location: "Talca, Chile",
      position: "Programador Full Stack",
      description: "Desarrollo integral de sistema de RRHH",
      achievements: [
        "Desarrollo de sistema completo para gestión de RRHH, incluyendo registro de empleados, liquidaciones y documentos",
        "Creación de módulos para generación automática y distribución digital de documentos",
        "Implementación de sistema de seguimiento de vacaciones y ausencias",
        "Liderazgo de equipo de 4 desarrolladores",
        "Aplicación de metodología de prototipos para desarrollo iterativo"
      ],
      technologies: [
        "NodeJS 16.0.0",
        "Angular 13.0.0",
        "MySQL",
        "Git",
        "Linux",
        "SSH",
        "PM2",
        "Sequelize ORM"
      ]
    },
    {
      company: "Ceho Servicios",
      period: "Febrero 2021 - Octubre 2021",
      location: "Regiones: V, VI, VII, VIII - Chile",
      position: "Soporte Informático en Terreno",
      responsibilities: [
        "Asistencia técnica para equipos Totalpack, incluyendo instalaciones y mantención de hardware",
        "Asistencia técnica para Atos, incluyendo instalación de telefonía IP y configuración de centrales telefónicas"
      ]
    },
    {
      company: "Colegio San Ignacio de Talca",
      period: "Junio 2019 - Febrero 2020",
      location: "Talca, Chile",
      position: "Encargado Informático",
      responsibilities: [
        "Soporte informático general",
        "Administración de red interna"
      ]
    },
    {
      company: "Clínica Lircay",
      period: "Abril 2018 - Febrero 2019",
      location: "Talca, Chile",
      position: "Soporte Informático",
      responsibilities: [
        "Administración y soporte de sistema propietario de procesos internos",
        "Soporte informático general",
        "Desarrollo de sistemas auxiliares en PHP"
      ]
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-6 pb-2 flex items-center gap-2">
        <Briefcase className="w-6 h-6" />
        Experiencia Laboral
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                <p className="text-gray-600 font-semibold">{exp.position}</p>
                <p className="text-gray-500">{exp.location}</p>
              </div>
              <span className="text-gray-600 font-medium">{exp.period}</span>
            </div>

            {exp.projects && exp.projects.map((project, pIndex) => (
              <div key={pIndex} className="mt-4">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">{project.name}</h4>
                <div className="space-y-4">
                  {project.description && (
                    <p className="text-gray-600">{project.description}</p>
                  )}
                  
                  {project.responsibilities && (
                    <div className="pl-4">
                      <ul className="list-disc space-y-2">
                        {project.responsibilities.map((resp, rIndex) => (
                          <li key={rIndex} className="text-gray-600">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.integrations && (
                    <div className="mt-4">
                      <h5 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Wrench className="w-4 h-4" />
                        Integraciones
                      </h5>
                      <ul className="list-disc pl-4 space-y-2">
                        {project.integrations.map((int, iIndex) => (
                          <li key={iIndex} className="text-gray-600">{int}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && (
                    <div className="mt-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Tecnologías</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.technologies.map((tech, tIndex) => (
                          <div key={tIndex} className="bg-gray-50 p-3 rounded">
                            <span className="font-medium text-gray-700">{tech.name}: </span>
                            <span className="text-gray-600">{tech.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {exp.responsibilities && (
              <ul className="list-disc pl-4 mt-4 space-y-2">
                {exp.responsibilities.map((resp, rIndex) => (
                  <li key={rIndex} className="text-gray-600">{resp}</li>
                ))}
              </ul>
            )}

            {exp.achievements && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Logros principales</h4>
                <ul className="list-disc pl-4 space-y-2">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className="text-gray-600">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {exp.technologies && Array.isArray(exp.technologies) && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Tecnologías utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;