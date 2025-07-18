import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { TerminalNeofetchProps, defaultUserInfo, CommandOutput } from '@/types/terminal'
import { CommandProcessor } from '../sections/terminal/CommandProcessor'
import { NeofetchOutput } from '../sections/terminal/NeofetchOutput'
import { useTerminal } from '../../contexts/TerminalContext'
import { useKonamiCode } from '../../hooks/useKonamiCode'
import { useAsciiArt } from '../../contexts/AsciiArtContext'
import KonamiModal from './KonamiModal'

const availableCommands = ['neofetch', 'help', 'clear', 'ls', 'pwd', 'cat', 'cv', 'resume', 'projects', 'contact', 'tree'];

export default function Terminal({ userInfo = {} }: TerminalNeofetchProps) {
    const [commandHistory, setCommandHistory] = useState<CommandOutput[]>([])
    const [commandHistoryList, setCommandHistoryList] = useState<string[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const [suggestion, setSuggestion] = useState('')
    const [multipleSuggestions, setMultipleSuggestions] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()
    const { currentCommand, setCurrentCommand } = useTerminal()
    const { isActivated: konamiActivated } = useKonamiCode()
    const { currentArt, setCurrentArt } = useAsciiArt()
    const [showKonamiModal, setShowKonamiModal] = useState(false)

    const info = useMemo(() => ({
        ...defaultUserInfo,
        ...userInfo
    }), [userInfo]);

    const commandProcessor = useMemo(() => new CommandProcessor(info), [info]);
    const didRunInitialCommands = useRef(false)
    const fileSystem = commandProcessor['fileSystem']
    const currentPath = commandProcessor['currentPath']

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const executeCommand = useCallback((cmd: string, forceArtType?: 'cat' | 'roach' | 'donut') => {
        const trimmedCmd = cmd.trim()
        if (!trimmedCmd) return

        // Add to command history
        setCommandHistoryList(prev => {
            const newHistory = [...prev, trimmedCmd]
            return newHistory.slice(-50) // Keep only last 50 commands
        })
        setHistoryIndex(-1)

        if (trimmedCmd.toLowerCase() === 'neofetch') {
            setCommandHistory(prev => [...prev, {
                command: cmd,
                output: <NeofetchOutput info={info} artType={forceArtType || currentArt} />,
                isNeofetch: true
            }])
            return
        }
        const result = commandProcessor.processCommand(cmd)
        if (result === null) {
            setCommandHistory([])
        } else {
            setCommandHistory(prev => [...prev, result])
            // Handle navigation commands
            if (result.action === 'navigate' && result.path) {
                setTimeout(() => navigate(result.path!), 1000)
            }
        }
    }, [info, commandProcessor, navigate, currentArt])

    useEffect(() => {
        if (!didRunInitialCommands.current) {
            executeCommand('neofetch')
            setCurrentCommand('help')
            didRunInitialCommands.current = true
        }
    }, [executeCommand])

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [commandHistory])

    // Handle Konami code activation
    useEffect(() => {
        if (konamiActivated) {
            setShowKonamiModal(true)
        }
    }, [konamiActivated])


    const getSuggestions = (value: string) => {
        const [command, ...args] = value.split(' ')

        // Command suggestions
        if (!value.includes(' ')) {
            const matching = availableCommands.filter(cmd =>
                cmd.startsWith(value.toLowerCase())
            )
            
            setMultipleSuggestions(matching.length > 1 ? matching : [])
            
            if (matching.length === 1) {
                return matching[0].slice(value.length)
            }
            return ''
        }

        // File suggestions for cat command
        if (command.toLowerCase() === 'cat' && args.length <= 1) {
            const currentDir = fileSystem[currentPath as keyof typeof fileSystem]
            if (currentDir) {
                const files = Object.keys(currentDir)
                const partialFile = args[0] || ''
                const matchingFiles = files.filter(file =>
                    file.startsWith(partialFile.toLowerCase())
                )
                
                setMultipleSuggestions(matchingFiles.length > 1 ? matchingFiles : [])
                
                if (matchingFiles.length === 1) {
                    return matchingFiles[0].slice(partialFile.length)
                }
            }
        }

        // History-based suggestions
        if (commandHistoryList.length > 0) {
            const matchingFromHistory = commandHistoryList
                .filter(cmd => cmd.startsWith(value))
                .slice(-3) // Show last 3 matching commands
            
            if (matchingFromHistory.length > 0) {
                const mostRecent = matchingFromHistory[matchingFromHistory.length - 1]
                if (mostRecent !== value) {
                    return mostRecent.slice(value.length)
                }
            }
        }

        setMultipleSuggestions([])
        return ''
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setCurrentCommand(value)
        setSuggestion(getSuggestions(value))
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const command = currentCommand.trim()
            if (command) {
                executeCommand(command)
                setCurrentCommand('')
                setSuggestion('')
            }
        }
        else if (e.key === 'Tab') {
            e.preventDefault()
            if (suggestion) {
                setCurrentCommand(prev => prev + suggestion)
                setSuggestion('')
            }
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (commandHistoryList.length > 0) {
                const newIndex = historyIndex === -1 ? commandHistoryList.length - 1 : Math.max(0, historyIndex - 1)
                setHistoryIndex(newIndex)
                setCurrentCommand(commandHistoryList[newIndex])
                setSuggestion('')
            }
        }
        else if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (historyIndex >= 0) {
                if (historyIndex === commandHistoryList.length - 1) {
                    setHistoryIndex(-1)
                    setCurrentCommand('')
                } else {
                    const newIndex = historyIndex + 1
                    setHistoryIndex(newIndex)
                    setCurrentCommand(commandHistoryList[newIndex])
                }
                setSuggestion('')
            }
        }
    }

    return (
        <div className="p-2 sm:p-4 lg:p-6 border-none outline-none">
            <div className="max-w-[90vw] xl:max-w-[75vw] 2xl:max-w-[65vw] mx-auto">
                <div className="rounded-lg overflow-hidden shadow-xl transition-colors duration-300 border-2" 
                     style={{backgroundColor: 'var(--terminal-bg)', borderColor: 'var(--terminal-border)'}}>
                    {/* Terminal header */}
                    <div className="px-2 sm:px-4 py-1 sm:py-2 flex items-center transition-colors duration-300" 
                         style={{backgroundColor: 'var(--bg-secondary)'}}>
                        <div className="flex space-x-1 sm:space-x-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs sm:text-sm mx-auto transition-colors duration-300" 
                             style={{color: 'var(--text-secondary)'}}>Terminal</div>
                    </div>

                    {/* Terminal content */}
                    <div
                        ref={containerRef}
                        className="p-2 sm:p-4 md:p-6 font-mono text-xs sm:text-sm md:text-base 
                                 h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[65vh]
                                 overflow-y-auto relative"
                        onClick={() => inputRef.current?.focus()}
                    >
                        {commandHistory.map((entry, index) => (
                            <div key={index} className="mb-2 sm:mb-4">
                                <div className="break-all transition-colors duration-300" 
                                     style={{color: 'var(--terminal-prompt)'}}>➜ {entry.command}</div>
                                <div className={`${entry.isNeofetch ? '' : 'transition-colors duration-300'} break-words`}
                                     style={entry.isNeofetch ? {} : {color: 'var(--terminal-text)'}}>
                                    {entry.output}
                                </div>
                            </div>
                        ))}

                        <div className="flex items-center relative">
                            <span className="transition-colors duration-300" 
                                  style={{color: 'var(--terminal-prompt)'}}>➜</span>
                            <div className="flex-1 ml-2 relative">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={currentCommand}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className="w-full bg-transparent outline-none transition-colors duration-300"
                                    style={{color: 'var(--terminal-text)'}}
                                    autoFocus
                                />
                                {suggestion && (
                                    <span
                                        className="absolute left-0 transition-colors duration-300"
                                        style={{
                                            paddingLeft: `${currentCommand.length}ch`,
                                            color: 'var(--terminal-suggestion)'
                                        }}
                                    >
                                        {suggestion}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Multiple suggestions */}
                        {multipleSuggestions.length > 0 && (
                            <div className="mt-2 text-xs transition-colors duration-300" 
                                 style={{color: 'var(--terminal-suggestion)'}}>
                                <div className="mb-1">Available options:</div>
                                <div className="flex flex-wrap gap-2">
                                    {multipleSuggestions.map((option, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 rounded cursor-pointer hover:opacity-80 transition-all duration-300"
                                            style={{
                                                backgroundColor: 'var(--bg-tertiary)',
                                                color: 'var(--terminal-text)'
                                            }}
                                            onClick={() => {
                                                setCurrentCommand(option)
                                                setMultipleSuggestions([])
                                                inputRef.current?.focus()
                                            }}
                                        >
                                            {option}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-1 transition-colors duration-300" 
                                     style={{color: 'var(--terminal-suggestion)'}}>
                                    Click to select or continue typing...
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Konami Modal */}
            <KonamiModal
                isOpen={showKonamiModal}
                onClose={() => setShowKonamiModal(false)}
                onSelectArt={(artType) => {
                    setCurrentArt(artType as any);
                    // Clear and auto-execute neofetch to show the new art
                    setTimeout(() => {
                        executeCommand('clear');
                        setTimeout(() => {
                            executeCommand('neofetch', artType as any);
                        }, 100);
                    }, 500);
                }}
                currentArt={currentArt}
            />
        </div>
    )
}