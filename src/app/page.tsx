"use client"

import React, { useState, useEffect } from 'react';

const Page = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fullTime = currentTime.toLocaleTimeString('pt-BR', {
    timeStyle: 'short',
    hour12: false
  });

  const hour = new Date().getHours();
 

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center
    text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-8xl">{fullTime}</div>
      <div className="text-3xl font-bold">
        {hour > 0 && hour < 12 && 'Bom dia 😀'}
        {hour >= 12 && hour < 18 && 'Boa tarde 😎'}
        {hour >= 18 && hour < 24 && 'Boa noite 😪'}
      </div>
    </div>
  );
}

export default Page;