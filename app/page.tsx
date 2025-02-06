import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Indépendance des enfants</h1>
      <div>
        <div>
          <Link href="/scolarite">
            <h2>Scolarité</h2>
          </Link>
        </div>
        <div>
          <Link href="/reaseaux">
            <h2>Réseaux Sociaux</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
 
export default Home;