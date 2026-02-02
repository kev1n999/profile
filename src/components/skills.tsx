import BackgroundTheme from "./theme";

export default function Skills() {
  return (
    <BackgroundTheme>
      <div className="flex justify-center p-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-3xl text-center">Languages/Studies/Tools</h1>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <h1 className="text-white p-1">Programming languages</h1>
              <div className="flex justify-center flex-row gap-2">
                <a href="https://python.org/">
                  <img src="/icons/python.png" className="h-5"></img>
                </a>
                <a href="https://devdocs.io/javascript/">
                  <img src="/icons/js.png" className="h-5"></img>
                </a>
                <a href="https://www.typescriptlang.org/">
                  <img src="/icons/typescript.png" className="h-5"></img>
                </a>
              </div>
            </div>

            <div>
              <h1 className="text-white p-1">Tools that im Studying</h1>
              <div className="flex justify-center flex-row gap-2">
                <a href="https://rust-lang.org/">
                  <img src="/icons/rust.png" className="h-5"></img>
                </a>
              </div>
            </div>

            <div>
              <h1 className="text-white p-1">Another tools</h1>
              <div className="flex flex-row gap-2">
                <a href="https://rust-lang.org/">
                  <img src="/icons/linux.png" className="h-5"></img>
                </a>

                <a href="https://www.microsoft.com/pt-br/software-download/windows11">
                  <img src="/icons/windows.png" className="h-5"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundTheme>
  )
}
