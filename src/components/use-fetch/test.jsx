import useFetch from ".";

// we will ftech out useFetech component how?
export default function UseFtechTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log(data, error, pending);

  return (
    <div>
      <h1>Use Test compoent</h1>

      {pending ? <h3>Please wait for data </h3> : null}

      {data && data.products && data.products.length
        ? data.products.map((dataProducts, index) => (
            <p key={dataProducts.index}>{dataProducts.title}</p>
          ))
        : null}
    </div>
  );
}
