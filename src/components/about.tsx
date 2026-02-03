import profile from "../assets/profile.jpg";
import { Player } from "./player";

export default function About() {
  return (
    <div className="flex justify-center flex-col gap-3 md:grid place-items-center grid-cols-2 p-20">
      <div className="flex flex-col">
        <div className="flex justify-center p-4">
          <img src={profile} className="h-46 w-40"></img>
        </div>
      </div>

      <div className="md:relative right-24">
        <div className="flex justify-center">
<a href="https://git.io/typing-svg" className="w-64 sm:w-80 md:w-[435px] h-auto"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&pause=960&color=F7F7F7&width=435&lines=Hello!+Welcome+to+my+profile!" alt="Typing SVG" /></a>
        </div>
          <p className="text-neutral-500 text-center text-xl md:text-2xl max-w-xl mx-auto">
              Hi, my name is Kevin!

              I'm a developer and IT student from Brazil.
              Now, I'm studying more about low-level programming,
              but sometimes I like to study full-stack/web-development.
          </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-5 p-6 gap-2">
            <img src="https://cyber.dabamos.de/88x31/88x31.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/af-psylab.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/ab-yr.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/coke.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/clickhere_blue.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/Sega-Elite.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />

            <img src="https://cyber.dabamos.de/88x31/128.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/88_31freedownloads.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/devils.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/discord-no-way.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/eat.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />

            <img src="https://cyber.dabamos.de/88x31/e4df87ac.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/geocities_area_51.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/hasmile.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
            <img src="https://cyber.dabamos.de/88x31/defcon1.gif" alt="88x31" className="w-20 h-auto sm:w-22 md:w-24" />
          </div>
        </div>

        <div className="md:relative left-12 max-w-sm mx-auto rounded-lg overflow-hidden">
          <Player />
        </div>
      </div>
    </div>
  )
}
