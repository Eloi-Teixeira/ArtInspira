'use client';

import React from 'react';

export default function MessageError() {
  const message = React.useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = React.useState(true);

  React.useEffect(() => {
    let timerOut: NodeJS.Timeout;
    const timerIn = setTimeout(() => {
      if (message && message.current) {
        timerOut = setTimeout(() => {
          setIsActive(false);
        }, 500);
      }
    }, 3000);
    return () => {
      clearTimeout(timerIn);
      clearTimeout(timerOut);
    };
  });
  return (
    <div
      ref={message}
      className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-20 left-0 -translate-x-full ${
        isActive ? 'slide-in' : 'slide-out'
      }`}
      role="alert"
    >
      <p className="text-red-500">
        Ocorreu um erro ao gerar a ideia. Tente novamente mais tarde.
      </p>
    </div>
  );
}
