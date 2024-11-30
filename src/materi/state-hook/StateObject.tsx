import { useState } from "react";

type User = {
  name: string;
  age: number;
}

export const UserProfile = () => {
  const [user, setUser] = useState<User>({
    name: "Lilo",
    age: 18,
  })

const UpdateUser = () => {
  setUser({
    ...user,
    age: user.age + 1,
  })
}

return (
  <div>
    <h2>Name = {user.name}</h2>
    <h2>Age = {user.age}</h2>
    <button onClick={UpdateUser}>Refresh</button>
  </div>
)
}
