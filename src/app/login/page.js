'use client';
import React from "react";
import { useRouter } from 'next/navigation';

const Frame = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    
    router.push("/principal"); 
  };

  return (
    <div className="bg-[#ecf3f4] flex flex-row justify-center w-full">
      <div className="bg-[#ecf3f4] w-[100%] h-[950px] relative">
        <div className="absolute w-[828px] h-[950px] top-0 left-0 bg-[#340499]">
          <div className="absolute top-[253px] left-[987px] w-[285px] [font-family: 'Poppins-Bold', Helvetica] font-bold text-[#7b7e8b] text-[37.5px] tracking-[-0.37px] leading-[49.9px]">
            Bienvenido!
          </div>

          <div className="absolute top-[358px] left-[993px]">
            <p className="font-medium text-[#7b7e8b] text-xs">
              <span>Usuario</span>
              <span className="text-red-500">*</span>
            </p>
            <div className="relative w-[257px] h-[50px] bg-white overflow-hidden">
              <input
                type="text"
                className="absolute inset-0 border-2 border-gray-300 px-3 py-2 w-full h-full"
                placeholder="Usuario"
              />
            </div>
          </div>

          <div className="absolute top-[413px] left-[993px] mt-4">
            <p className="font-medium text-[#7b7e8b] text-xs">
              <span>Contraseña</span>
              <span className="text-red-500">*</span>
            </p>
            <div className="relative w-[257px] h-[50px] bg-white overflow-hidden">
              <input
                type="password"
                className="absolute inset-0 border-2 border-gray-300 px-3 py-2 w-full h-full"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div className="absolute top-[528px] left-[993px] w-[257px] h-[48px] bg-[#ffbf65] round-[6px] overflow-hidden">
            <button className="absolute inset-0 [font-family: 'Roboto-Medium', Helvetica] font-medium text-black text-[14.4px] text-center tracking-[-0.14px] leading-[34.9px] whitespace-nowrap" onClick={handleButtonClick}>
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
