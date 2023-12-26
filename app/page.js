import Link from "next/link";

async function getItems() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/photos`).then(
    (data) => data.json()
  );
  return data;
}

export default async function Home() {
  const data = await getItems();
  return (
    <div>
      <div className="data">
        {data.map((i) => (
          <div key={i.id} className="data-block">
            <Link href={"/post/" + i.id}>{i.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
