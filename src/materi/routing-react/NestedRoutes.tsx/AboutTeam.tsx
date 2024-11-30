import { Link, Outlet} from "react-router-dom"
const AboutTeam = () => {
  return (
    <div>
      <h2>About Team</h2>
      <Link to='/tentang/team'>My Team</Link>
      <Outlet />
    </div>
  )
}

export default AboutTeam