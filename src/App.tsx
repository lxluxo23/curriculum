import { Routes, Route } from 'react-router-dom'
import { TerminalProvider } from './contexts/TerminalContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { AsciiArtProvider } from './contexts/AsciiArtContext'
import MainLayout from './layouts/MainLayout'
import Terminal from './components/ui/Terminal'
import Resume from './pages/Resume'

function App() {
  return (
    <ThemeProvider>
      <AsciiArtProvider>
        <TerminalProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Terminal />} />
              <Route path="/cv" element={<Resume />} />
            </Routes>
          </MainLayout>
        </TerminalProvider>
      </AsciiArtProvider>
    </ThemeProvider>
  )
}

export default App

