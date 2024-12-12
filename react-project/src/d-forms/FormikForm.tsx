import { Formik, FormikErrors } from "formik";
import classNames from "classnames";
import { FormikHelpers } from "formik/dist/types";

interface FormValues {
  personName: string;
  email: string;
}

export function FormikForm() {
  async function handleSubmit(
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) {
    try {
      const { personName: name, email } = values;
      console.log({ name, email });
      actions.resetForm();
    } catch (e) {
      console.error(e);
    }
  }

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.personName) {
      errors.personName = "imię jest wymagane";
    }
    if (values.personName && values.personName.length < 2) {
      errors.personName = "imię musi mieć co najmniej 2 litery";
    }
    if (!values.email) {
      errors.email = "adres e-mail jest wymagany";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "niepoprawny adres e-mail";
    }
    return errors;
  };

  return (
    <>
      <h2>Formularz z użyciem Formik</h2>
      <h3 className="subtitle is-4 bold subtitle is-family-monospace">
        FormikForm.tsx
      </h3>
      <div className="box">
        W formularzu poniżej ważne jest wpięcie sie w event{" "}
        <code>onSubmit</code> i zabranie natywnej obsługi formularza przez
        przeglądarkę.
        <hr />
        Biblioteka <strong>Formik</strong> będzie nie tylko zbierała wszystkie
        wartości w polach formularza, ale również dostarcza odpowiednie API do
        obsługi walidacji
      </div>
      <Formik
        validate={validate}
        initialValues={{ personName: "", email: "" }}
        onSubmit={handleSubmit}
      >
        {(formProps) => (
          <form onSubmit={formProps.handleSubmit}>
            <div className="field mb-5">
              <div className="control">
                <input
                  className={classNames("input", {
                    "is-danger":
                      formProps.touched.personName &&
                      formProps.errors.personName,
                  })}
                  name="personName"
                  placeholder="imię"
                  onChange={formProps.handleChange}
                  onBlur={formProps.handleBlur}
                  value={formProps.values.personName}
                />
              </div>
              {formProps.touched.personName && formProps.errors.personName && (
                <div className="help is-danger">
                  {formProps.errors.personName}
                </div>
              )}
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={classNames("input", {
                    "is-danger":
                      formProps.touched.email && formProps.errors.email,
                  })}
                  name="email"
                  type="email"
                  placeholder="adres e-mail"
                  onChange={formProps.handleChange}
                  onBlur={formProps.handleBlur}
                  value={formProps.values.email}
                />
              </div>
              {formProps.touched.email && formProps.errors.email && (
                <div className="help is-danger">{formProps.errors.email}</div>
              )}
            </div>
            <div className="field">
              <p
                className="control is-flex is-justify-content-end"
                style={{
                  opacity: formProps.isValid && formProps.dirty ? 1 : 0.6,
                }}
              >
                <button className="button is-info" type="submit">
                  Dodaj
                </button>
              </p>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
