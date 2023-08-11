'use client'

import { fetchData } from "@/lib/GateballAPI"
import { TeamData } from "@/types/GateballAPITypes"
import { Match } from "@/types/MatchType"
import { useState } from "react"


export default function Home() {
  const [firstTeamName, setFirstTeamName] = useState('')
  const [secondTeamName, setSecondTeamName] = useState('')

  const [firstTeamScore, setFirstTeamScore] = useState(0)
  const [secondTeamScore, setSecondTeamScore] = useState(0)

  const [matches, setMatches] = useState<Match[]>([])

  const addToScoreTable = (event: React.FormEvent) => {
    event.preventDefault();
    if (firstTeamName.trim() !== '' && secondTeamName.trim() !== '') {
      const match: Match = { "team-1-name": firstTeamName, "team-1-score": firstTeamScore, "team-2-name": secondTeamName, "team-2-score": secondTeamScore }

      setMatches([...matches, match])
      setFirstTeamName('')
      setFirstTeamScore(0)
      setSecondTeamName('')
      setSecondTeamScore(0)
    }
  }

  const [teamsData, setTeamsData] = useState<TeamData[]>([]);
  const handleFetchData = async () => {
    try {
      const fetchedData: TeamData[] = await fetchData(matches);
      setTeamsData(fetchedData);
    } catch (error) {
      console.log("failed to fetch data from api")
    }
  };


  return (
    <main className="bg-main-primary rounded-lg m-16 shadow-2xl">
      <section className="container mx-auto p-8 flex flex-col gap-10">
        <div className="">
          <h1 className="font-semi-bold text-6xl flex justify-center">Fase de classificação</h1>
        </div>
      </section>

      <section className="container mx-auto p-8 flex flex-col gap-10">
        <div className="border border-main-secondary rounded shadow-2xl grid-col-3">
          <form className="m-6 flex justify-around" onSubmit={addToScoreTable}>
            <div className="flex gap-2">
              <input className="p-2 rounded-l ring-2 outline-0" type="text" placeholder="Nome do time 1" value={firstTeamName} onChange={e => setFirstTeamName(e.target.value)} />
              <input className="p-2 rounded-r ring-2 outline-0" type="number" min={0} placeholder="Pontuação time 1" value={firstTeamScore} onChange={e => setFirstTeamScore(Number(e.target.value))} />
            </div>
            <div className="flex gap-2">
              <input className="p-2 rounded-l ring-2 outline-0" type="text" placeholder="Nome do time 2" value={secondTeamName} onChange={e => setSecondTeamName(e.target.value)} />
              <input className="p-2 rounded-r ring-2 outline-0" type="number" placeholder="Pontuação time 2" value={secondTeamScore} onChange={e => setSecondTeamScore(Number(e.target.value))} />
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
              {matches.map((match, index) =>
              (<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
                <td scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white bg-gray-50 dark:bg-gray-800 border-r-2 border-main-secondary">
                  {match["team-1-name"]}
                </td>
                <td className="px-6 py-4 border-r-2 border-main-secondary">
                  <div className="flex justify-around font-bold">
                    <h2 className={match["team-1-score"] >= match["team-2-score"] ? 'text-blue-400 font-bold' : 'text-red-400 font-bold'}>{match["team-1-score"]}</h2>
                    <h2 className={match["team-2-score"] >= match["team-1-score"] ? 'text-blue-400 font-bold' : 'text-red-400 font-bold'}>{match["team-2-score"]}</h2>
                  </div>
                </td>
                <td className="px-6 py-4 bg-gray-50 border-r-2 border-main-secondary">
                  {match["team-2-name"]}
                </td>
                <td className="px-6 py-4">
                  DELETAR
                </td>
              </tr>)
              )}
            </tbody>
          </table>

          {matches.length
            ? (
              <div className="flex justify-center" >
                <button className="shadow rounded bg-main-secondary py-2 px-4 hover:bg-main-accent font-bold text-white my-4" onClick={handleFetchData}>
                  Confirmar Fase
                </button>
              </div>
            )
            : ''}

        </div>
      </section>

      <section className="container mx-auto p-8 flex flex-col gap-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-main-secondary">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-sky-200 dark:bg-gray-700 dark:text-gray-400">
              <tr className="">
                <th scope="col" className="px-6 py-3 border-r-2 border-main-secondary">
                  Posição
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 border-main-secondary">
                  Nome Equipe
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 border-main-secondary">
                  Vitórias
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 border-main-secondary">
                  Derrotas
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 border-main-secondary">
                  Pontos obtidos
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 border-main-secondary">
                  Pontos cedidos
                </th>
                <th scope="col" className="px-6 py-3">
                  Saldo de pontos
                </th>
              </tr>
            </thead>
            <tbody className="font-medium text-gray-900">
              {teamsData.map((teamData, index) =>
              (<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
                <td scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white bg-gray-50 dark:bg-gray-800 border-r-2 border-main-secondary">
                  {index + 1}º
                </td>
                <td className="px-6 py-4 border-r-2 border-main-secondary">
                  {teamData.teamName}
                </td>
                <td className="px-6 py-4 border-r-2  bg-gray-50 border-main-secondary">
                  {teamData.victoryCounter}
                </td>
                <td className="px-6 py-4 border-r-2 border-main-secondary">
                  {teamData.defeatCounter}
                </td>
                <td className="px-6 py-4 bg-gray-50 border-r-2 border-main-secondary">
                  {teamData.pointsMade}
                </td>
                <td className="px-6 py-4 border-r-2 border-main-secondary">
                  {teamData.pointsSuffered}
                </td>
                <td className="px-6 py-4 bg-gray-50 border-r-2 border-main-secondary">
                  {teamData.pointsBalance}
                </td>
              </tr>)
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
