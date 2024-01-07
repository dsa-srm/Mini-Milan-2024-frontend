/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/services/apiUser";
import React from "react";

interface LoginProps {
  email: string;
  password: string;
}

const useLogin = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState<any>(null);
  const queryClient = useQueryClient();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }: LoginProps) => loginUser(email, password),
    onSuccess: (userData: any) => {
      queryClient.setQueryData(["user"], userData?.data?.user);
      navigate("/dashboard", { replace: true });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      setLoginError(error);
      console.log(error);
    },
  });

  return { isLoading, loginError, login };
};

export default useLogin;
