async function fetchRepo(name) {
  const res = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`
  );
  const contents = await res.json();
  return contents;
}

export default async function RepoDirs({ name }) {
  const contents = await fetchRepo(name);
  //  const dirs = contents.filter((con) => con.type === "dir");
  return (
    <>
      <h3>Directories:</h3>
      <ul>DIRS</ul>
    </>
  );
}
