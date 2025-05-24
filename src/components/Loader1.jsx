import React from 'react';

const Loader1 = ({ progress }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <div className="loader-spinner" />
      <p style={{ marginTop: 20, fontSize: 14 }}>
        {progress !== undefined ? `${progress.toFixed(0)}% loaded` : 'Loading...'}
      </p>
      <style>{`
        .loader-spinner {
          border: 4px solid rgba(0,0,0,0.1);
          border-left-color: #4f46e5; /* violet */
          border-radius: 50%;
          width: 48px;
          height: 48px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader1;
