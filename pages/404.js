import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen bg-slate-950">
      <h2 className="text-4xl">404 - Page Not Found</h2>
      <p className="text-xl">Sorry, the page you are looking for does not exist.</p>
      <img
        src="https://media1.tenor.com/m/GopcJIF_Y98AAAAC/lost-kermit.gif"
        alt="Kermit the frog lost"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/")}
      >
        Go Back
      </button>
    </div>
  );
}
