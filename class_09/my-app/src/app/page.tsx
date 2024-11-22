
// // const book: Ibook[] = [
// //   {
// //     tittle: "my-Book1",
// //     id: 1,
// //   },
// //   {
// //     tittle: "my-Book2",
// //     id: 2,
// //   },
// //   {
// //     tittle: "my-Book3",
// //     id: 3,
// //   },
// // ];
export default async function Home() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  interface Ibook {
    name: string;
    id: number;
    type: string;
    available: boolean;
  }
  const books: Ibook[] = await response.json();
  console.log(books);
  return (
    <div>
      {/* <h1>{books}</h1> */}
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h1>{book.name}</h1>
            <h1>{book.id}</h1>
            <h1>{book.type}</h1>
            <h1>{book.available}</h1>
          </div>
        );
      })}

      {/* {/* <h3>{JSON.stringify(book)}</h3> */}
    </div>
  );
}




// /pages/books.js

// const BooksPage = ({ books }) => {
//   return (
//     <div>
//       <h1>Available Books</h1>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <strong>{book.name}</strong> by {book.author || 'Unknown Author'}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Dynamic data fetch using getServerSideProps
// export async function getServerSideProps() {
//   const res = await fetch('https://simple-books-api.glitch.me/books');
//   const books = await res.json();

//   return {
//     props: {
//       books, // Pass data as props to the component
//     },
//   };
// }

// export default BooksPage;
