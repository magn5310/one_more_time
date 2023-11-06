export async function generateMetadata({ params }) {
  const { season } = params;
  const res = await fetch(`https://kea-alt-del.dk/t7/api/products?arne=${season}`);
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export async function generateStaticParams() {
  const res = await fetch(`https://kea-alt-del.dk/t7/api/products`);
  const pages = await res.json();
  const paths = pages.map((page) => {
    return { id: page.slug };
  });

  return paths;
}

async function cards({ params }) {
  const { slug } = params;
  const res = await fetch(`https://kea-alt-del.dk/t7/api/products?id=${slug}`);

  const data = await res.json();

  console.log(params);
  console.log(data.id);
  return (
    <div>
      <img src={`https://kea-alt-del.dk/t7/images/jpg/1000/${data.id}.jpg`} alt="" />
      <p>{data.gender}</p>
      <p>{data.category}</p>
      <p>{data.subcategory}</p>
      <p>{data.season}</p>
      <p>{data.brandname}</p>
    </div>
  );
}

export default cards;
