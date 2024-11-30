type Props = {
  gender: boolean;
  isAdmin: boolean
}

export const AndWithOr = ({gender, isAdmin}: Props)=> {
  return (
    <div>
      <h1>Welcome to the website!</h1>
      {isAdmin && <button>Access Admin Page</button>}
      {isAdmin || <button>You are not admin</button>}
      <h1>Welcome human</h1>
      {gender && <p>Gender: Male</p>}
      {gender || <p>Gender: Female</p>}
    </div>
  )
}