import Link from "next/link";
async function getdata() {
  const res = await fetch("https://api.github.com/users/bradtraversy/repos");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const repos = await res.json();
  return repos;
}

export default async function ReposPage() {
  const repos = await await getdata();
  return (
    <div className="bg-blue-900 max-h-fit p-10">
      <h2 className="text-3xl text-white">Repos</h2>
      <ul>
        {repos.map((r) => (
          <div className="bg-red-800 p-5 m-4" key={r.id}>
            <Link href={`code/repos/${r.name}`}>
              <p className="p-1 text-blue-950 text-xl">{r.description}</p>
              <li className="text-2xl text-blue-300">{r.name}</li>
              <span className="text-2xl text-blue-300">{r.forks_count}-</span>
              <span className="text-2xl text-blue-300">
                {r.watchers_count}-
              </span>
              <span className="text-2xl text-blue-300">
                {r.stargazers_count}
              </span>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
