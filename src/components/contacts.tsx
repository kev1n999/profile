import BackgroundTheme from "./theme";

export default function Contacts() {
  return (
    <BackgroundTheme>
      <div className="flex justify-center gap-3 p-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-3xl">My avaliable contacts</h1>

          <div className="flex justify-center gap-3">
            <a href="https://discord.com/users/903377619880378429">
              <img src="/icons/discord.png" className="h-8"></img>
            </a>
            <a href="https://github.com/kev1n999">
              <img src="/icons/github.png" className="h-8"></img>
            </a>
            <a href="https://whatsapp.com/">
              <img src="/icons/whatsapp.png" className="h-8"></img>
            </a>
          </div>
        </div>
      </div>
    </BackgroundTheme>
  )
}
