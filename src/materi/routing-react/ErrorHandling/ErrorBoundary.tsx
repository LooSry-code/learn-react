import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div>
      <h1>Error!</h1>
      <h2>Terjadi kesalahan saat memuat halaman</h2>
      <pre>{error.message}</pre>
    </div>
  )
}

export default ErrorPage;