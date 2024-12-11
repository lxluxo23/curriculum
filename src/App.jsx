import React, { useRef, useCallback } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from './components/Resume';

const PrintableResume = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="print-content">
      <Resume />
    </div>
  );
});

function App() {
  const componentRef = useRef(null);

  const handleBeforePrint = useCallback(() => {
    console.log('Preparando la impresión...');
    return Promise.resolve();
  }, []);

  const handleAfterPrint = useCallback(() => {
    console.log('PDF generado con éxito');
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Mi_Curriculum',
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: false
  });

  return (
    <>
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={handlePrint}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
        >
          Descargar PDF
        </button>
      </div>
      
      <div className="min-h-screen py-8 bg-gray-100">
        <PrintableResume ref={componentRef} />
      </div>
    </>
  );
}

export default App;