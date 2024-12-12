import { useForm } from "react-hook-form";
import classNames from "classnames";

interface FormValues {
  personName: string;
  email: string;
}

export function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onTouched",
  });
  const onSubmit = handleSubmit((values) => {
    const { personName: name, email } = values;
    console.log({ name, email });
  });

  return (
    <>
      <h2>ReactHookForm</h2>
      <h3 className="subtitle is-4 bold subtitle is-family-monospace">
        ReactHookForm.tsx
      </h3>
      <form onSubmit={onSubmit} noValidate={true}>
        <div className="field mb-5">
          <div className="control">
            <input
              className={classNames("input", {
                "is-danger": errors.personName,
              })}
              placeholder="imię"
              {...register("personName", {
                required: "imię jest wymagane",
                minLength: {
                  value: 2,
                  message: "imię musi mieć co najmniej 2 litery",
                },
              })}
            />
          </div>
          {errors.personName && (
            <div className="help is-danger">{errors.personName?.message}</div>
          )}
        </div>
        <div className="field">
          <div className="control">
            <input
              className={classNames("input", {
                "is-danger": errors.email,
              })}
              type="email"
              placeholder="adres e-mail"
              {...register("email", {
                required: "adres e-mail jest wymagany",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "niepoprawny adres e-mail",
                },
              })}
            />
          </div>
          {errors.email && (
            <div className="help is-danger">{errors.email?.message}</div>
          )}
        </div>
        <div className="field">
          <p className="control is-flex is-justify-content-end">
            <button className="button is-info" type="submit">
              Dodaj
            </button>
          </p>
        </div>
      </form>
    </>
  );
}
