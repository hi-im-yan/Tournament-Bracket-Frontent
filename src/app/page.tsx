export default function Home() {
  return (
    <main className="bg-main-primary rounded-lg m-16 shadow-2xl">
      <section className="container mx-auto p-8 flex flex-col gap-10">
        <div className="">
          <h1 className="font-semi-bold text-6xl flex justify-center">Fase de classificação</h1>
        </div>
        <div className="border border-main-secondary rounded shadow-2xl grid-col-3">
          <form className="m-6 flex justify-around">
            <div className="flex gap-2">
              <input className="p-2 rounded-l ring-2" type="text" placeholder="Nome do time" />
              <input className="p-2 rounded-r ring-2" type="number" name="" id="" />
            </div>
            <div className="flex gap-2">
              <input className="p-2 rounded-l ring-2" type="text" placeholder="Nome do time" />
              <input className="p-2 rounded-r ring-2" type="number" name="" id="" />
            </div>
            <button className="shadow rounded bg-main-secondary px-4 hover:bg-main-accent font-bold text-white" type="submit">Adicionar</button>
          </form>
        </div>
      </section>
    </main>
  )
}
