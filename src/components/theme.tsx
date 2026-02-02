import PixelSnow from "./background";

export default function BackgroundTheme({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-screen relative flex justify-center p-20">
      <PixelSnow
        color="#ffffff"
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.25}
        density={0.3}
        direction={125}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
    />

      {children}
    </div>
  )
}
