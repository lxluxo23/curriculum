export interface SkillInfo {
    name: string;
    details?: string;
    level?: string;
  }
  
  export interface DatabaseSkills {
    relational: string[];
    nosql: string[];
  }
  
  export interface TechnicalSkills {
    languages: SkillInfo[];
    frameworks: SkillInfo[];
    databases: DatabaseSkills;
    devops: SkillInfo[];
    cloud: SkillInfo[];
    mobile: SkillInfo[];
    testing: SkillInfo[];
    other: SkillInfo[];
  }
  
  export interface UserInfo {
    user: string;
    host: string;
    os: string;
    kernel: string;
    uptime: string;
    role: string;
    focus: string;
    shell: string;
    terminal: string;
    skills: TechnicalSkills;
  }

  export interface CommandOutput {
    command: string
    output: JSX.Element | string
    isNeofetch?: boolean
    action?: string
    path?: string
  }
  
  export interface TerminalNeofetchProps {
    userInfo?: Partial<UserInfo>;
  }
  
  export const defaultUserInfo: UserInfo = {
    user: "Luis Esteban Céspedes Sepulveda",
    host: "Portfolio",
    os: "PortfolioOS",
    kernel: "Full Stack Developer",
    uptime: "3 years of experience",
    role: "Backend-oriented Full Stack Developer",
    focus: "Backend Development & System Architecture",
    shell: "/usr/bin/fullstack",
    terminal: "VS Code",
    skills: {
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
        { name: 'Docker', level: 'Advanced' },
        { name: 'Jenkins', details: 'Pipelines, CI/CD' },
        { name: 'Linux', details: 'Server Administration' },
        { name: 'GitHub Actions' }
      ],
      cloud: [
        { name: 'Railway' },
        // { name: 'AWS', details: 'EC2' },
        { name: 'VPN', details: 'WireGuard' }
      ],
      mobile: [
        { name: 'Android Studio' },
        { name: 'Flutter', details: 'Play Store Publishing' },
        { name: 'Ionic Angular' }
      ],
      testing: [
        { name: 'Postman', details: 'API Testing' },
        { name: 'SonarQube', details: 'Code Analysis' },
        { name: 'Unit Testing' }
      ],
      other: [
        { name: 'WebSockets' },
        { name: 'OAuth 2.0/JWT' },
        { name: 'SSL/TLS' },
        { name: 'Scrum' },
        { name: 'Networking' }
      ]
    }
  };