import Particles from "./background";

export default function BackgroundTheme({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-screen relative flex justify-center p-20 inset-0">
      <Particles
        particleColors={["#613583"]}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
