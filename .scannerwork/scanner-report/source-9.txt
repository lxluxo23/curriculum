
import { UserInfo } from '@/types/terminal'
export const generateFileSystem = (info: UserInfo) => ({
    '/home/user': {
        'about.txt': `Hi! I'm ${info.user}, a ${info.role}. Welcome to my interactive portfolio terminal!`,
        'skills.txt': generateSkillsContent(info),
        'contact.txt': 'Email: luis.cespedes.sep01@gmail.com \nGitHub: github.com/lxluxo23',
        'experience.txt': `Role: ${info.role}\nFocus: ${info.focus}\nUptime: ${info.uptime}`
    }
})

function generateSkillsContent(info: UserInfo): string {
    return `Technical Skills Overview:
  
  Languages:
  ${info.skills.languages.map(l => `- ${l.name}${l.details ? ` (${l.details})` : ''}`).join('\n')}
  
  Frameworks:
  ${info.skills.frameworks.map(f => `- ${f.name}${f.details ? ` (${f.details})` : ''}`).join('\n')}
  
  Databases:
  Relational:
  ${info.skills.databases.relational.map(db => `- ${db}`).join('\n')}
  NoSQL:
  ${info.skills.databases.nosql.map(db => `- ${db}`).join('\n')}
  
  DevOps:
  ${info.skills.devops.map(d => `- ${d.name}${d.details ? ` (${d.details})` : ''}${d.level ? ` - ${d.level}` : ''}`).join('\n')}
  
  Cloud:
  ${info.skills.cloud.map(c => `- ${c.name}${c.details ? ` (${c.details})` : ''}`).join('\n')}
  
  Mobile:
  ${info.skills.mobile.map(m => `- ${m.name}${m.details ? ` (${m.details})` : ''}`).join('\n')}
  
  Testing:
  ${info.skills.testing.map(t => `- ${t.name}${t.details ? ` (${t.details})` : ''}`).join('\n')}
  
  Other Skills:
  ${info.skills.other.map(o => `- ${o.name}${o.details ? ` (${o.details})` : ''}`).join('\n')}`
}