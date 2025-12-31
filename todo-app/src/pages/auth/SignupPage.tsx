import Card from "../../components/UI/Card";
import TextField from "../../components/UI/FormField";
import Button from "../../components/UI/Button";
import { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import type { SignUpRequest } from "../../types/Auth";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import LogoName from "../../components/UI/LogoName";
export type SignUpForm = SignUpRequest & {
  confirmPassword: string;
};
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpForm>();
  const onSubmit: SubmitHandler<SignUpForm> = (data) => console.log(data);
  return (
    <Card>
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col items-center">
          <LogoName />
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={errors.name?.message}
            {...register("name")}
            type="text"
            placeHolder="name"
          >
            <UserCircleIcon className="h-5 w-5 text-tertiary" />
          </TextField>
          <TextField
            error={errors.email?.message}
            {...register("email")}
            type="text"
            placeHolder="email"
          >
            <EnvelopeIcon className="h-5 w-5 text-tertiary" />
          </TextField>
          <TextField
            error={errors.password?.message}
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeHolder="password"
            button={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-tertiary" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-tertiary" />
                )}
              </button>
            }
          >
            <LockClosedIcon className="h-5 w-5 text-tertiary" />
          </TextField>
          <TextField
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
            type="password"
            placeHolder="confirm password"
          >
            <LockClosedIcon className="h-5 w-5 text-tertiary" />
          </TextField>
          <Button type="submit">
            <span>Signup</span>
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default SignupPage;
