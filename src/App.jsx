import React, { useRef, useCallback } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from './components/Resume';

function App() {


  return (
    <div className="min-h-screen py-8 bg-gray-100">
     <Resume />
    </div>
  );
}

export default App;