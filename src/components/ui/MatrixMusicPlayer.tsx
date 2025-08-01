import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { matrixPlaylist } from '../../data/playlists';

export const MatrixMusicPlayer: React.FC = () => {
  const { theme } = useTheme();
  const [currentTrack, setCurrentTrack] = useState(() => Math.floor(Math.random() * matrixPlaylist.length));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.05);
  const [isMuted, setIsMuted] = useState(false);
  const [isDraggingVolume, setIsDraggingVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const volumeSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime || 0);
    };
    
    const updateDuration = () => {
      if (audio.duration && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    
    const handleEnded = () => {
      const nextTrack = (currentTrack + 1) % matrixPlaylist.length;
      setCurrentTrack(nextTrack);
      setIsPlaying(false);
      
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(console.error);
        }
      }, 500);
    };
    
    const handleError = (e: any) => {
      console.error('Audio error:', e);
      setCurrentTrack((prev) => (prev + 1) % matrixPlaylist.length);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [currentTrack]);

  // Configurar event listeners también cuando el tema cambia a matrix
  useEffect(() => {
    if (theme === 'matrix') {
      const audio = audioRef.current;
      if (!audio) return;

      const updateTime = () => {
        setCurrentTime(audio.currentTime || 0);
      };
      
      const updateDuration = () => {
        if (audio.duration && isFinite(audio.duration)) {
          setDuration(audio.duration);
        }
      };

      // Añadir listeners adicionales para asegurar que funcionen
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('canplay', updateDuration);
      audio.addEventListener('durationchange', updateDuration);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('canplay', updateDuration);
        audio.removeEventListener('durationchange', updateDuration);
      };
    }
  }, [theme]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Asegurar volumen correcto cuando se monta el componente
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  useEffect(() => {
    if (theme !== 'matrix') {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      return;
    }

    // Auto-play when matrix theme is active
    if (audioRef.current && theme === 'matrix') {
      // Asegurar volumen correcto SIEMPRE
      audioRef.current.volume = volume;
      
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      };
      
      // Delay más corto y simple
      setTimeout(() => {
        playAudio();
      }, 100);
    }
  }, [theme]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      // Asegurar volumen correcto INMEDIATAMENTE
      audioRef.current.volume = isMuted ? 0 : volume;
      setCurrentTime(0);
      setDuration(0);
      setIsPlaying(false);
    }
  }, [currentTrack]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Playback error:', error);
    }
  };

  const changeTrack = (direction: 'next' | 'prev') => {
    const wasPlaying = isPlaying;
    
    if (direction === 'next') {
      setCurrentTrack((prev) => (prev + 1) % matrixPlaylist.length);
    } else {
      setCurrentTrack((prev) => (prev - 1 + matrixPlaylist.length) % matrixPlaylist.length);
    }
    
    setIsPlaying(false);
    
    if (wasPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(console.error);
        }
      }, 300);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time) || time < 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleVolumeMouseDown = (e: React.MouseEvent) => {
    setIsDraggingVolume(true);
    updateVolumeFromEvent(e);
  };

  const updateVolumeFromEvent = (e: React.MouseEvent | MouseEvent) => {
    if (!volumeSliderRef.current) return;
    const rect = volumeSliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    setVolume(percentage);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingVolume) {
        updateVolumeFromEvent(e);
      }
    };

    const handleMouseUp = () => {
      setIsDraggingVolume(false);
    };

    if (isDraggingVolume) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingVolume]);

  if (theme !== 'matrix') return null;

  // Imagen sprite de botones de Joel G
  const buttonSprite = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAWCAYAAAAvikJUAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVR4nO2bTW7CMBCFX6re0RyjXZUbJF2lx3BuEVbOrV4X5E8hUChkJpD3SRaSF7yRPeOxZwAQQgghhBBCCCFugu3Yqv7T8uZtgHhuYgzMixIAkBeleRB6628NnbSiJ8ZA8ugTdWpYp8bUN7z1twgnw9uGS3MW+nPDA5fMS4J5UTIvStapIUlaZWFv/a2yBqfXAXDeJhO64CPZZ98OiwCMMZA41c+LkrRbhzkdK/97mO77HYbMGZA96PvEeS5tNrHgHsQYCAAhVEtLXdTvyQb94vsH+/2nlSlewT/Wmi6+yYb8lf0sMtGWbwBua3/M+hxl+yEDo83GS94Apvr9LaDTb4fBDWRN/ne3/lJdAL3DliWbjPH8wrLd55Bw6tQgyyxuA4N+CBFVDABGzsbF3c4781+jfZM9Sx0AegrYY7jmXfAffS0dErpWnK2+OXOinr5ubs8aCmBruoJ5PQE8YNtz76//XQsOBk+Aqb7jEwCY3wdr//PQXkXlWweA3/oTbSA6dQEG/VHw16npOwC0TUTXzL2Kbi/kFfhzNlyas9D3CEbvAxgYHQKwPQB6fQIn+sZtwJfgvzWAafHJknPFLyubpgW4cwU5S31rst2uQlUF5EWJdEjm+hlwor//+kBhWosQYtuw7c17/QrPW//p0Z+BxD1ku12FGINRG3B1+kII+NaE1qAvhBBCCCGEEM/AL4wXU4xI/DxFAAAAAElFTkSuQmCC";

  return (
    <>
      {/* Estilos CSS */}
      <style>{`
        .joel-player {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 55px;
          background: #c0c0c0;
          border-top: 2px solid #dfdfdf;
          border-left: 2px solid #dfdfdf;
          border-right: 2px solid #808080;
          border-bottom: 2px solid #404040;
          font-family: 'MS Sans Serif', sans-serif;
          font-size: 11px;
        }

        .joel-player-inner {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 3px 6px;
          background: linear-gradient(180deg, #dfdfdf 0%, #c0c0c0 50%, #c0c0c0 100%);
        }

        .joel-album-art {
          width: 35px;
          height: 35px;
          background: #000;
          border: 1px solid #808080;
          border-top-color: #404040;
          border-left-color: #404040;
          border-right-color: #dfdfdf;
          border-bottom-color: #dfdfdf;
          margin-right: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .joel-album-art img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .joel-album-placeholder {
          color: #00ff00;
          font-size: 12px;
          font-family: monospace;
        }

        .joel-controls {
          display: flex;
          align-items: center;
          margin-right: 6px;
        }

        .joel-btn {
          width: 32px;
          height: 22px;
          border: none;
          background-image: url('${buttonSprite}');
          background-repeat: no-repeat;
          cursor: pointer;
          margin-right: 1px;
        }

        .joel-btn:hover {
          filter: brightness(1.1);
        }

        .joel-btn:active {
          filter: brightness(0.9);
        }

        .joel-btn-prev {
          background-position: -192px 0;
        }

        .joel-btn-play {
          background-position: 0px 0;
        }

        .joel-btn-pause {
          background-position: -32px 0;
        }

        .joel-btn-next {
          background-position: -224px 0;
        }

        .joel-btn-loop {
          background-position: -96px 0;
        }

        .joel-track-container {
          flex: 1;
          margin: 0 6px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .joel-track-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3px;
        }

        .joel-time {
          color: #000;
          font-size: 10px;
          font-family: 'Courier New', monospace;
          min-width: 35px;
        }

        .joel-track-title {
          flex: 1;
          text-align: center;
          color: #000;
          font-size: 11px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 0 8px;
        }

        .joel-progress-container {
          width: 100%;
          height: 10px;
          background: #c0c0c0;
          border: 1px solid #808080;
          border-top-color: #404040;
          border-left-color: #404040;
          border-right-color: #dfdfdf;
          border-bottom-color: #dfdfdf;
          cursor: pointer;
          position: relative;
        }

        .joel-progress-fill {
          height: 100%;
          background: #000080;
          position: relative;
          transition: width 0.1s linear;
        }

        .joel-progress-thumb {
          position: absolute;
          top: 0;
          right: 0;
          width: 2px;
          height: 100%;
          background: #ffffff;
          transform: translateX(1px);
        }

        .joel-volume-container {
          display: flex;
          align-items: center;
          margin-left: 6px;
        }

        .joel-btn-volume {
          background-position: -128px 0;
          margin-right: 4px;
        }

        .joel-btn-volume-muted {
          background-position: -160px 0;
        }

        /* Slider de volumen estilo Joel G original */
        .joel-volume-slider {
          overflow: hidden;
          width: 50px;
          height: 21px;
          cursor: pointer;
          margin-top: 7px;
          float: left;
          background: url('./img/volume-frames.png');
          margin-right: 6px;
          position: relative;
        }

        .joel-volume-bar-value {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 12px;
          background: #c0c0c0;
          border: 1px solid #808080;
          border-top-color: #dfdfdf;
          border-left-color: #dfdfdf;
          border-right-color: #404040;
          border-bottom-color: #404040;
        }

        .joel-volume-text {
          color: #000;
          font-size: 10px;
          font-family: 'Courier New', monospace;
          min-width: 20px;
          text-align: center;
        }

        body {
          padding-bottom: 55px !important;
        }
      `}</style>

      {/* Reproductor */}
      <div className="joel-player">
        <div className="joel-player-inner">
          
          {/* Album Art */}
          <div className="joel-album-art">
            {matrixPlaylist[currentTrack].image ? (
              <img 
                src={matrixPlaylist[currentTrack].image}
                alt={matrixPlaylist[currentTrack].title}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="joel-album-placeholder">♪</div>
            )}
          </div>

          {/* Transport Controls */}
          <div className="joel-controls">
            <button
              onClick={() => changeTrack('prev')}
              className="joel-btn joel-btn-prev"
              title="Previous track"
            />
            
            <button
              onClick={togglePlay}
              className={`joel-btn ${isPlaying ? 'joel-btn-pause' : 'joel-btn-play'}`}
              title={isPlaying ? 'Pause' : 'Play'}
            />
            
            <button
              onClick={() => changeTrack('next')}
              className="joel-btn joel-btn-next"
              title="Next track"
            />
            
            <button
              className="joel-btn joel-btn-loop"
              title="Loop"
              style={{ filter: 'brightness(0.8)' }}
            />
          </div>

          {/* Track Info & Progress */}
          <div className="joel-track-container">
            <div className="joel-track-header">
              <div className="joel-time">
                {formatTime(currentTime)}
              </div>
              
              <div className="joel-track-title">
                {matrixPlaylist[currentTrack].title} - {matrixPlaylist[currentTrack].artist}
              </div>
              
              <div className="joel-time">
                {formatTime(duration)}
              </div>
            </div>
            
            <div 
              className="joel-progress-container"
              onClick={handleProgressClick}
            >
              <div 
                className="joel-progress-fill"
                style={{
                  width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`
                }}
              >
                <div className="joel-progress-thumb" />
              </div>
            </div>
          </div>

          {/* Volume Control */}
          <div className="joel-volume-container">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`joel-btn ${isMuted ? 'joel-btn-volume-muted' : 'joel-btn-volume'}`}
              title={isMuted ? 'Unmute' : 'Mute'}
            />
            
            <div 
              ref={volumeSliderRef}
              className="joel-volume-slider"
              title="Volume"
              onMouseDown={handleVolumeMouseDown}
              style={{ cursor: isDraggingVolume ? 'grabbing' : 'pointer' }}
            >
              <div 
                className="joel-volume-bar-value"
                style={{ left: `calc(${volume * 100}%)` }}
              />
            </div>
            
            <div className="joel-volume-text">
              {Math.round(volume * 100)}
            </div>
          </div>
        </div>
      </div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src={matrixPlaylist[currentTrack].url}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => {
          if (audioRef.current) {
            audioRef.current.volume = volume;
            // Forzar actualización de duración
            if (audioRef.current.duration && isFinite(audioRef.current.duration)) {
              setDuration(audioRef.current.duration);
            }
          }
        }}
        onCanPlay={() => {
          if (audioRef.current && audioRef.current.duration && isFinite(audioRef.current.duration)) {
            setDuration(audioRef.current.duration);
          }
        }}
        preload="metadata"
      />
    </>
  );
};