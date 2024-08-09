export default async function getCategory(catalog: string) {
  const res = await fetch(
    `${process.env.NEXT_API}/products-catalog?category=${catalog}`
  );
  return res.json();
}
