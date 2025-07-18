import { UserInfo, CommandOutput } from '@/types/terminal'
import { generateFileSystem } from './FileSystem'

export class CommandProcessor {
  private info: UserInfo
  private currentPath: string
  private fileSystem: ReturnType<typeof generateFileSystem>

  constructor(info: UserInfo) {
    this.info = info
    this.currentPath = '/home/user'
    this.fileSystem = generateFileSystem(info)
  }

  processCommand(cmd: string): CommandOutput | null {
    const [command, ...args] = cmd.trim().toLowerCase().split(' ')

    switch (command) {
      case 'clear':
        return null

      case 'help':
        return {
          command: cmd,
          output: this.getHelpText()
        }

      case 'pwd':
        return {
          command: cmd,
          output: this.currentPath
        }

      case 'ls':
        return this.handleLs()

      case 'cat':
        return this.handleCat(args)

      case 'tree':
        return this.handleTree()

      case 'cv':
      case 'resume':
        return {
          command: cmd,
          output: 'Opening CV page...',
          action: 'navigate',
          path: '/cv'
        }

      case 'projects':
        return {
          command: cmd,
          output: 'Projects section coming soon! 🚀\nStay tuned for my latest work and developments.'
        }

      case 'contact':
        return {
          command: cmd,
          output: (
            <div>
              <div className="mb-2">📧 <strong>Email:</strong> luis.cespedes.sep01@gmail.com</div>
              <div className="mb-2">💼 <strong>LinkedIn:</strong> linkedin.com/in/lcespedessep</div>
              <div className="mb-2">🐙 <strong>GitHub:</strong> github.com/lxluxo23</div>
              <div className="mb-2">📍 <strong>Location:</strong> Talca, Chile</div>
              <div className="mt-3 text-green-400">Ready to collaborate! Feel free to reach out.</div>
            </div>
          )
        }

      default:
        return {
          command: cmd,
          output: `Command not found: ${command}. Type 'help' for available commands.`
        }
    }
  }

  private getHelpText(): JSX.Element {
    return (
      <div>
        <div><strong>neofetch</strong> - Display system information</div>
        <div><strong>clear</strong> - Clear the terminal</div>
        <div><strong>ls</strong> - List directory contents</div>
        <div><strong>pwd</strong> - Print working directory</div>
        <div><strong>cat</strong> - Read file contents</div>
        <div><strong>cv / resume</strong> - View my curriculum vitae</div>
        <div><strong>projects</strong> - See my projects and work</div>
        <div><strong>contact</strong> - Get my contact information</div>
        <div><strong>tree</strong> - Display directory structure</div>
        <div><strong>help</strong> - Show this help message</div>
      </div>
    )
  }

  private handleLs(): CommandOutput {
    const currentDir = this.fileSystem[this.currentPath as keyof typeof this.fileSystem]
    return {
      command: 'ls',
      output: currentDir ? Object.keys(currentDir).join('  ') : 'Directory not found'
    }
  }

  private handleCat(args: string[]): CommandOutput {
    if (args.length === 0) {
      return {
        command: 'cat',
        output: 'Usage: cat <filename>'
      }
    }

    const currentDir = this.fileSystem[this.currentPath as keyof typeof this.fileSystem]
    const fileName = args[0]
    if (currentDir && currentDir[fileName as keyof typeof currentDir]) {
      return {
        command: 'cat ' + fileName,
        output: currentDir[fileName as keyof typeof currentDir]
      }
    }

    return {
      command: 'cat ' + fileName,
      output: `File ${fileName} not found`
    }
  }

  private handleTree(): CommandOutput {
    const treeStructure = `
/home/user
├── documents/
│   ├── resume.pdf
│   └── notes/
│       ├── ideas.txt
│       └── todo.txt
├── technologies/
│   ├── languages/
│   │   ├── java-1.8-11.spec
│   │   ├── javascript-typescript.spec
│   │   ├── python3.spec
│   │   ├── php.spec
│   │   └── dotnet.spec
│   ├── frameworks/
│   │   ├── spring-boot.config
│   │   ├── angular-8-13.config
│   │   ├── nodejs-16.config
│   │   ├── laravel-7.config
│   │   ├── flutter.config
│   │   ├── ionic-angular.config
│   │   └── flask.config
│   ├── databases/
│   │   ├── relational/
│   │   │   ├── mysql.db
│   │   │   ├── postgresql.db
│   │   │   ├── sql-server.db
│   │   │   ├── oracle.db
│   │   │   └── mariadb.db
│   │   └── nosql/
│   │       ├── mongodb.db
│   │       ├── redis.db
│   │       └── cassandra.db
│   ├── devops/
│   │   ├── docker.yaml
│   │   ├── jenkins-ci-cd.yaml
│   │   ├── github-actions.yaml
│   │   ├── linux-admin.sh
│   │   └── pm2.config
│   ├── cloud/
│   │   ├── railway.config
│   │   ├── aws-ec2.config
│   │   ├── huawei-cloud.config
│   │   ├── azure-ad.config
│   │   └── wireguard-vpn.config
│   ├── mobile/
│   │   ├── android-studio.config
│   │   ├── flutter-playstore.config
│   │   └── ionic-angular.config
│   ├── integration/
│   │   ├── soap-services.xml
│   │   ├── jaxb-edocs.xml
│   │   ├── apache-camel.xml
│   │   ├── rest-api.json
│   │   ├── oauth2-jwt.json
│   │   └── websockets.config
│   └── tools/
│       ├── git-gitflow.config
│       ├── postman-api.config
│       ├── sonarqube.config
│       ├── jboss-fuse-eap.config
│       ├── sequelize-orm.config
│       └── ssl-tls.config
└── config/
    ├── .bashrc
    ├── .vimrc
    └── aliases.sh

14 directories, 47 files
    `.trim()

    return {
      command: 'tree',
      output: (
        <div className="font-mono text-sm">
          <pre className="text-green-400 whitespace-pre-wrap">
            {treeStructure}
          </pre>
        </div>
      )
    }
  }
}