import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { LoginForm } from "@wasp/auth/forms/Login";
import { AuthWrapper } from "./authWrapper";
import useAuth from "@wasp/auth/useAuth";

export default function Login() {
  const history = useHistory();

  const { data: user } = useAuth();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
}
