/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@/components/ui/use-toast";
import { registerUser } from "@/services/apiUser";
import { useMutation } from "react-query";

interface registerProps {
  name: string;
  email: string;
  password: string;
  reg_number: string;
  is_ktr_student: boolean;
  gender: string;
  phone_number: number;
}

const useRegister = () => {

  const { toast } = useToast();
  const { mutate: signupUser, isLoading } = useMutation({
    mutationFn: async ({
      name,
      email,
      password,
      reg_number,
      is_ktr_student,
      gender,
      phone_number,
    }: registerProps) =>
      await registerUser({
        name,
        email,
        password,
        phone_number,
        reg_number,
        is_ktr_student,
        gender,
      }),
    onSuccess: (userData) => {
      if (userData.success) {
        toast({
          variant: "success",
          title: "Register Success",
          description: "You have Registered successfully",
        });
     
	
      } else {
        if (userData.message_code === "EMAIL_OR_PHONE_NUMBER_REQUIRED") {
          toast({
            variant: "error",
            title: "Register Failed",
            description:
              "Email And Phone Number required. Please Signup Again,",
          });
        } else if (
          userData.message_code === "INVALID_KTR_STUDENT_EMAIL_FORMAT"
        ) {
          toast({
            variant: "error",
            title: "Register Failed",
            description: "Invalid Email Check Again",
          });
        } else {
          toast({
            variant: "error",
            title: "Register Failed",
            description: userData.message,
          });
        }
      }
    },

    onError: (error: any) => {
      console.log(error);
    },
  });

  return { signupUser, isLoading };
};

export default useRegister;
