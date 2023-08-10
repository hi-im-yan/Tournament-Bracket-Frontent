export default function Home() {
  return (
    <main className="bg-main-primary rounded-lg m-16 shadow-2xl">
      <section className="container mx-auto p-8 flex flex-col gap-10">
        <div className="">
          <h1 className="font-semi-bold text-6xl flex justify-center">Fase de classificação</h1>
        </div>
      </section>

      <section className="container mx-auto p-8 flex flex-col gap-10">
        <div className="border border-main-secondary rounded shadow-2xl grid-col-3">
          <form className="m-6 flex justify-around">
            <div className="flex gap-2">
              <input className="p-2 rounded-l ring-2 outline-0" type="text" placeholder="Nome do time 1" />
              <input className="p-2 rounded-r ring-2 outline-0" type="number" placeholder="Pontuação time 1" />
            </div>
            <div className="flex gap-2">
              <input className="p-2 rounded-l ring-2 outline-0" type="text" placeholder="Nome do time 2" />
              <input className="p-2 rounded-r ring-2 outline-0" type="number" placeholder="Pontuação time 2" />
            </div>
            <button className="shadow rounded bg-main-secondary px-4 hover:bg-main-accent font-bold text-white" type="submit">Adicionar</button>
          </form>
        </div>
      </section>

      <section className="container mx-auto p-8 flex flex-col gap-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-main-secondary">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-sky-200 dark:bg-gray-700 dark:text-gray-400">
              <tr className="">
                <th scope="col" className="px-6 py-3 border-r-2 border-main-secondary">
                  Equipe
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 border-main-secondary">
                  Placar
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 border-main-secondary">
                  Equipe
                </th>
                <th scope="col" className="px-6 py-3">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="font-medium text-gray-900">
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white bg-gray-50 dark:bg-gray-800 border-r-2 border-main-secondary">
                  ACB 1
                </td>
                <td className="px-6 py-4 border-r-2 border-main-secondary flex justify-between font-medium whitespace-nowrap">
                  <h2>13</h2>
                  <h2>8</h2>
                </td>
                <td className="px-6 py-4 bg-gray-50 border-r-2 border-main-secondary">
                  ACB 2
                </td>
                <td className="px-6 py-4">
                  DELETAR
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
