import LoginButton from "../ui/LoginButton";
import LogoutButton from "../ui/LogoutButton";

async function SiteNav({ session }) {
  return (
    <div>
      {session !== null
        ? <LogoutButton></LogoutButton>
        : <LoginButton></LoginButton>
      }
    </div>
  )
}

export default SiteNav;
