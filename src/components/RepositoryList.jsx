import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="respository-list">
      <h1>Listagem de repositórios</h1>

      <ul>
        <RepositoryItem repository="unform" />
      </ul>
    </section>
  )
}