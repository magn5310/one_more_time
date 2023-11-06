import Link from "next/link";

async function NavBar() {
  const res = await fetch(`https://kea-alt-del.dk/t7/api/products`);
  const pages = await res.json();
  return (
    <>
      <nav>
        <ul className="flex gap-2">
          <Link href={"/"}>Home</Link>
          {pages.map((page) => {
            return (
              <Link key={page.id} href={`/cards/${page.id}`}>
                {page.id}
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
