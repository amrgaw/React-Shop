import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required("this feild is require"),
    email: yup.string().email().required(),
    phone: yup.number().positive(),
    password: yup.string().min(8).required("please enter a valid password"),
    confpassword: yup.string().oneOf([yup.ref("password"), null]),
    gender: yup.string(),
    agree: yup.string().matches("agree").required("you must agree for tearms"),
  })
  .required();

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="d-flex  flex-column mt-5"
    >
      <label for="fname">User Name:</label>
      <input {...register("username")} />
      <p>{errors.username?.message}</p>

      <label for="fname">Email:</label>
      <input {...register("email")} />
      <p>{errors.email?.message}</p>

      <label for="fname">phone number:</label>
      <input {...register("phone")} />
      <p>{errors.phone?.message}</p>

      <label for="fname">password:</label>
      <input {...register("password")} />
      <p>{errors.password?.message}</p>

      <label for="fname">confirm password:</label>
      <input {...register("confpassword")} />
      <p>{errors.confpassword && "please enter the same password"}</p>

      <label for="fname">choose your gender:</label>
      <select {...register("gender")}>
        <option value="">--Please choose an option--</option>
        <option value="male">Male</option>
        <option value="female">Femlae</option>
      </select>

      <div className="d-flex gap-2">
        <label for="agree"> do you agree</label>
        <input className="form-check-inline" {...register("agree")} type="checkbox" value="agree" />
      </div>
      <p>{errors.agree && "please confirm accept"}</p>

      <input className="btn btn-primary" type="submit" />
    </form>
  );
}
