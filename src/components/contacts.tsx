import BackgroundTheme from "./theme";

export default function Contacts() {
  return (
    <BackgroundTheme>
      <div className="flex justify-center flex-col gap-3 p-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-3xl text-center underline min-w-max"># Professional Experience</h1>

          <div>
            <p className="text-neutral-500 text-center text-xl md:text-2xl max-w-xl mx-auto">
              😎 I have a experience as a freelancer, where i developed a lot bots for discord servers
              and web automations for websites.
            </p>

            <div>
              <h1 className="text-white text-center text-2xl p-8 underline">#Tech/Tools i've used as a freelancer</h1>

              <div className="flex justify-center gap-3 grid-cols-2">
                <img src="/icons/python.png" className="h-10"></img>
                <img src="/icons/discordpy.png" className="h-10"></img>
                <img src="/icons/js.png" className="h-10"></img>
                <img src="/icons/node-js.png" className="h-10"></img>
                <img src="/icons/puppeteer.png" className="h-10"></img>
                <img src="/icons/mysql.svg" className="h-10"></img>
              </div>
            </div>

            <h2 className="text-neutral-300 text-center before:content-['>'] after:content-['<'] before:w-[1chr] text-2xl p-6 transition-all
            underline hover:before:content-['~'] hover:after:content-['~']">
              <a href="https://github.com/kev1n999"> See my projetcs </a>
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-16">
          <h1 className="text-white text-3xl text-center underline min-w-max"># My avaliable contacts</h1>
          <p className="text-neutral-500 text-center">
            If you wanna talk with me :)
          </p>
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
            <a href="mailto:kevin.sqb09@gmail.com">
              <img src="/icons/gmail.png" className="h-8"></img>
            </a>
          </div>
        </div>
      </div>
    </BackgroundTheme>
  )
}
