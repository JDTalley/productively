//import Pomodoro from "./components/Pomodoro_old";
import { getServerSession } from "next-auth";
import authOptions from "./authOptions";

import Pomodoro from './components/Pomodoro';
import SiteNav from "./components/SiteNav";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <SiteNav session={session}></SiteNav>
      <main>
        <div>
          <h1>Productively</h1>
          <Pomodoro></Pomodoro>
        </div>
      </main>
    </div>
  );
}
