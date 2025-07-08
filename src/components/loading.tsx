import React from "react";

export function Loading() {
  return (
    <>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="flex justify-center items-center mt-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div
                className="w-16 h-16 rounded-full"
                style={{
                  border: "4px solid rgba(59, 130, 246, 0)",
                  borderTop: "4px solid rgb(59, 130, 246)",
                  animation: "spin 1s linear infinite",
                }}
              ></div>
              <div
                className="absolute w-12 h-12 rounded-full"
                style={{
                  top: "8px",
                  left: "8px",
                  border: "4px solid rgba(147, 51, 234, 0)",
                  borderTop: "4px solid rgb(147, 51, 234)",
                  animation: "spin 0.7s linear infinite reverse",
                }}
              ></div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2 m-0" style={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}>
              CONNECTING TO THE SPACE STATION
            </h2>
            <p className="text-gray-400 text-sm m-0">
              Loading SpaceX launch data
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
