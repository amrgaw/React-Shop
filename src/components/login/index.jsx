import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required("this feild is require"),
    password: yup.string().min(8).required("please enter a valid password"),
  })
  .required();

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="wrapper pt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <div className="mb-3">
          <label>User Name</label>
          <input
            {...register("username")}
            className="form-control"
            placeholder="Pleas Enter the username"
          />
          <p className="text-danger mt-2">{errors.username?.message}</p>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            {...register("password")} 
            className="form-control"
            placeholder="Enter password"
          />
          <p className="text-danger mt-2">{errors.password?.message}</p>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
