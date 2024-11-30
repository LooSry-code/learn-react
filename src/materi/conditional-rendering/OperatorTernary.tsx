type Props = {
  isLogged: boolean;
};

export const WelcomeTernary = ({ isLogged }: Props) => {
  return (
    <div className={`${isLogged ? "green-text" : "red-text"}`}>
      {isLogged ? <h1>Welcome back!</h1> : <h1>Please Register!</h1>}
    </div>
  );
};
