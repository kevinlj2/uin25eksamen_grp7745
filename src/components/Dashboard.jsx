import "../styles/_dashboard.scss";

export default function Dashboard() {
  return (
    <>
      <section id="dashboard">
        <h1>Dashboard</h1>
        <form>
          <input type="text" placeholder="Brukernavn" />
          <button>Logg inn</button>
        </form>
      </section>
    </>
  );
}
