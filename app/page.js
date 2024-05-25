'use client';
import Image from "next/image";
import useSound from "use-sound";
import { useState, useEffect } from "react";

export default function Home() {
  const [playtap] = useSound("/bob.mp3");
  const [playwin] = useSound("/full-soundbob.mp3");

  const [aksi, setAksi] = useState(0);
  const [energy, setEnergy] = useState(true);

  useEffect(()=>{
      let inter = setInterval(()=>{
          setEnergy(true);
          clearInterval(inter);
      }, 1500);
  }, [energy]);
  return (
    <main className="flex flex-1 min-h-screen flex-col items-center justify-between p-24 backgdark">
        <div className="relative">
           {aksi % 100 >= 0 && aksi > 0 && aksi > 10 && aksi % 100 < 10 ? (
             <div className="font-bold text-xl text-center">
             PLN ngeprank mulu gess, geus {aksi} kali mati woy!😡🤬👿
           </div>
           ):""}
            <div className="flex flex-col w-full h-screen gap-5 items-center justify-evenly">
                <div className="text-4xl text-white font-bold relative top-22 scale-150 ">
                {aksi}
                </div>
                <div>
                  {energy ? (
                  <button 
                  onClick={()=>{
                    playtap();
                    setEnergy(false);
                    setAksi(aksi+1);
                    if(aksi % 100 == 0 && aksi > 0){
                      playwin();
                      setEnergy(false)
                    }
                  }}>
                    <Image
                      src="/anjay.png"
                      width={200}
                      height={200}
                      alt="hurung"
                      className="hover:scale-105"
                      />
                  </button>
                ):(
                  <button 
                  onClick={()=>{
                    setEnergy(true);
                    setAksi(aksi+1);
                  }}
                  >
                  <Image
                    src="/lada.png"
                    width={200}
                    height={200}
                    alt="parem"
                    />
                </button>
                )}
                </div>
            </div>
        </div>
    </main>
  );
}

                       