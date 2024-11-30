import { useLoaderData } from "react-router-dom";

type User = {
  id: number;
  name: string;
}
const User = () => {
  const data = useLoaderData() as User[]

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;