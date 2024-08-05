export default async function getCategory(catalog: string) {
  const res = await fetch(
    `https://birnimajon.pythonanywhere.com/api/products-catalog?category=${catalog}`
  );
  return res.json();
}
