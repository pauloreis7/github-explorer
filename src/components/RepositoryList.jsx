import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

export function RepositoryList() {
  const [ repositories, setRepositories ] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/facebook/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="respository-list">
      <h1>Listagem de repositórios</h1>

      <ul>
        {repositories.map(repository => 
          <RepositoryItem key={repository.name} repository={repository} />
        )}
      </ul>
    </section>
  )
}