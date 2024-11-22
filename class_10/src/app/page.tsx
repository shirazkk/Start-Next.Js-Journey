import Link from "next/link";
export default async function Home() {
  interface Book {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }
  const book = await fetch("https://simple-books-api.glitch.me/books");
  let data: Book[] = await book.json();
  // console.log(data);

  return (
    <div className="m-4">
      <h1>Welcome to the Bookstore!</h1>
      {data.map((book) => {
        return (
          <Link href={`/books/${book.id}`} key={book.id}>
            <h1 className="text-red-600">{book.name}</h1>
          </Link>
        );
      })}
    </div>
  );
}
