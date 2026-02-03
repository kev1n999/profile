import BackgroundTheme from "./theme";

export default function Skills() {
  return (
    <BackgroundTheme>
      <div className="flex justify-center p-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-3xl text-center underline min-w-max"># Some skills</h1>

          <div className="flex flex-col gap-6 pt-6 md:relative right-36">
            <div>
              <h1 className="text-white text-2xl p-1 before:content-['>']"> Langs that i know to use</h1>
              <div className="flex flex-row gap-2 mt-4">
                <a href="https://python.org/">
                  <img src="/icons/python.png" className="h-10"></img>
                </a>
                <a href="https://devdocs.io/javascript/">
                  <img src="/icons/js.png" className="h-10"></img>
                </a>
                <a href="https://www.typescriptlang.org/">
                  <img src="/icons/typescript.png" className="h-10"></img>
                </a>
              </div>
            </div>

            <div>
              <h1 className="text-white text-2xl p-1 before:content-['>']"> Back-end & Database (Basics)</h1>
              <div className="flex flex-row gap-2 mt-4">
                <a href="https://python.org/">
                  <img src="/icons/node-js.png" className="h-10"></img>
                </a>
                <a href="https://python.org/">
                  <img src="/icons/express.svg" className="h-10"></img>
                </a>
                <a href="https://python.org/">
                  <img src="/icons/flask.svg" className="h-10"></img>
                </a>
                <a href="https://devdocs.io/javascript/">
                  <img src="/icons/mysql.svg" className="h-10"></img>
                </a>
                <a href="https://devdocs.io/javascript/">
                  <img src="/icons/mongodb.svg" className="h-10"></img>
                </a>
                <a href="https://devdocs.io/javascript/">
                  <img src="/icons/prisma.svg" className="h-10"></img>
                </a>
              </div>
            </div>

            <div>
              <h1 className="text-white text-2xl p-1 before:content-['>']"> Front-end</h1>
              <div className="flex flex-row gap-2 mt-4">
                <a href="https://python.org/">
                  <img src="/icons/html.svg" className="h-10"></img>
                </a>
                <a href="https://devdocs.io/javascript/">
                  <img src="/icons/css.svg" className="h-10"></img>
                </a>
                <a href="https://devdocs.io/javascript/">
                  <img src="/icons/tailwindcss.svg" className="h-10"></img>
                </a>
                <a href="https://devdocs.io/javascript/">
                  <img src="/icons/react.svg" className="h-10"></img>
                </a>
              </div>
            </div>

            <div>
              <h1 className="text-white text-2xl p-1 before:content-['>']"> Langs that im studying</h1>
              <div className="flex flex-row gap-2">
                <a href="https://rust-lang.org/">
                  <img src="/icons/rust.png" className="h-10"></img>
                </a>
              </div>
            </div>

            <div>
              <h1 className="text-white text-2xl p-1 before:content-['>']"> Operational systems i use</h1>
              <div className="flex flex-row gap-2">
                <a href="https://rust-lang.org/">
                  <img src="/icons/linux.png" className="h-10"></img>
                </a>

                <a href="https://www.microsoft.com/pt-br/software-download/windows11">
                  <img src="/icons/windows.png" className="h-10"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundTheme>
  )
}
