async function fetchRepo(name) {
  const res = await fetch(`https://api.github.com/repos/bradtraversy/${name}`);
  const repo = await res.json();
  return repo;
}

export default async function Repo({ name }) {
  const repo = await fetchRepo(name);
  return (
    <div>
      <div className="text-3xl bg-green-600 rounded-lg">
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <span>{repo.watchers_count}--</span>
        <span>{repo.stargazers_count}--</span>
        <span>{repo.forks_count}</span>
      </div>
    </div>
  );
}
