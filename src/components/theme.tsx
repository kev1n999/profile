import PixelSnow from "./background";

export default function BackgroundTheme({ children }: { children: React.ReactNode }) {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="min-h-screen w-screen relative flex justify-center p-20 inset-0">
      <PixelSnow
        color="#ffffff"
        flakeSize={0.01}
        minFlakeSize={isMobile ? 0.5 : 1.25}
        pixelResolution={isMobile ? 100 : 200}
        speed={isMobile ? 0.8 : 1.25}
        density={isMobile ? 0.1 : 0.3}
        direction={125}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
