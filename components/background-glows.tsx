"use client"

export function BackgroundGlows() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-40">
      {/* Top Left Glow */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white opacity-[0.03] blur-[120px] animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      
      {/* Middle Right Glow */}
      <div 
        className="absolute top-[30%] right-[-5%] w-[35%] h-[35%] rounded-full bg-white opacity-[0.02] blur-[100px] animate-pulse"
        style={{ animationDuration: '12s', animationDelay: '2s' }}
      />
      
      {/* Bottom Left Glow */}
      <div 
        className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] rounded-full bg-white opacity-[0.03] blur-[110px] animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '1s' }}
      />

      {/* Subtle floating dot glow */}
      <div 
        className="absolute top-[60%] left-[40%] w-[15%] h-[15%] rounded-full bg-white opacity-[0.015] blur-[80px] animate-pulse"
        style={{ animationDuration: '15s', animationDelay: '3s' }}
      />
    </div>
  )
}
