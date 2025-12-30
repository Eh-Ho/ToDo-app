import Card from "../../components/UI/Card";
import TextField from "../../components/UI/textField";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { LoginRequest } from "../../types/Auth";
import Button from "../../components/UI/Button";
import { useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import LogoName from "../../components/UI/LogoName";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const onSubmit: SubmitHandler<LoginRequest> = (data) => console.log(data);

  return (
    <Card>
      <div className="flex flex-col items-center w-full gap-6">
        <div className="flex flex-col items-center">
          <LogoName />
          <h2 className="text-accent text-2xl font-bold">welcome back! 👋</h2>
        </div>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            type="text"
            placeHolder="name@example.com"
            error={errors.email?.message}
            {...register("email")}
          >
            <EnvelopeIcon className="h-5 w-5 text-tertiary" />
          </TextField>
          <TextField
            placeHolder="•••••••"
            type={showPassword ? "text" : "password"}
            error={errors.password?.message}
            {...register("password")}
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
          <Button type="submit">
            <span>Login</span>
          </Button>
        </form>
      </div>
    </Card>
  );
};
export default LoginPage;
