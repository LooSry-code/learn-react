type Props = {
  isLoggedIn: boolean;
}

// export const WelcomeMessage = ({ isLoggedIn }: Props) => {
//   if (isLoggedIn) {
//     return <h1>Welcome back!</h1>;
//   } else {
//     return <h1>Please Register!</h1>;
//   }
// }


export const Welcome = ({ isLoggedIn }: Props) => {
  let message;

  if (isLoggedIn) {
    message = <h1>Welcome back!</h1>;
  } else {
    message = <h1>Welcome guest!</h1>;
  }
  return <div>{message}</div>
}