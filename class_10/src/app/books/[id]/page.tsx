import Link from "next/link";


interface Params {
  id: string;
}

interface IBook {
  id: number;
  name: string;
  author: string;
  isbn: string;
  type: string;
  price: number;
  "current-stock": number;
  available: boolean;
}

const Page = async ({ params }: { params: Params }) => {
  const { id } = params;
  const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
  const data: IBook = await res.json();
  // console.log(data);

  return (
    <div className="m-4">
      <h1 className="text-orange-600 font-bold">Book ID: {id}</h1>
      <h1 className="text-orange-600 font-bold">Book Name: {data.author}</h1>
      <h1 className="text-orange-600 font-bold">Book Author: {data.name}</h1>
      <h1 className="text-orange-600 font-bold">
        Book ISBN: {data["current-stock"]}
      </h1>
      <h1 className="text-orange-600 font-bold">Book Type: {data.type}</h1>
      <h1 className="text-orange-600 font-bold">Book Price: ${data.price}</h1>
      <h1 className="text-orange-600 font-bold">
        Book Available: {data.available ? "Yes" : "No"}
      </h1>
      <Link href="/">
        <button className="text-white bg-slate-900 px-2 py-2 mt-4">Back to Homepage</button>
      </Link>
    </div>
  );
};

export default Page;
