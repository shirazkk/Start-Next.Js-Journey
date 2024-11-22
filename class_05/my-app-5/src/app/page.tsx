export default function Homepage(){
   return(
    <main>
      <section className="flex h-screen justify-around items-center gap-10">
        <div>
          <h1  className="font-bold text-4xl">Welcome to our website</h1>
          <p className="w-[400px] text-gray-900 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nesciunt at. Ut harum dolorum hic optio consequatur dolore doloribus! Fugiat, enim natus?!</p>
          <button className="transition ease-in-out  bg-black hover:bg-zinc-700  text-white px-6 py-2 rounded-md">Subscribe</button>
        </div>
        <div>
          <img className="w-[400px] rounded-2xl" src="/youtube.jpg" alt="" />
        </div>
      </section>
    </main>
   )

}
