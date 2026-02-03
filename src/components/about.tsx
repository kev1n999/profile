import profile from "../assets/profile.jpg";

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
            but sometimes I like to study full-stack/web-development
        </p>
      </div>
    </div>
  )
}
