import { useForm } from '../hooks/useForm.js'
import type { FormValues } from '../types.ts'

type FieldProps = {
  id: string
  name: keyof FormValues
  label: string
  type?: string
  as?: 'input' | 'textarea'
  form: ReturnType<typeof useForm>
  placeholder?: string
  required?: boolean
  minLength?: number
  autoComplete?: string
}

function Field({ id, name, label, as = 'input', form, ...rest }: FieldProps) {
  const { values, errors, onChange, onBlur } = form
  const error = errors[name]
  if (as === 'textarea') {
    return (
      <div className={`form__group ${error ? 'has-error' : ''}`.trim()}>
        <label className="form__label" htmlFor={id}>
          {label}
        </label>
        <textarea
          className="form__control"
          id={id}
          name={name}
          value={values[name]}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
        {error && (
          <p className="form__error" id={`${id}-error`} role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
  return (
    <div className={`form__group ${error ? 'has-error' : ''}`.trim()}>
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form__control"
        id={id}
        name={name}
        type={rest.type ?? 'text'}
        value={values[name]}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p className="form__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function ContactForm() {
  const form = useForm()
  const statusClass =
    form.status.type === 'success'
      ? 'form__status--success'
      : form.status.type === 'error'
        ? 'form__status--error'
        : ''
  return (
    <form className="contact__form" onSubmit={form.onSubmit} noValidate>
      <Field
        id="name"
        name="name"
        label="Imię i nazwisko"
        placeholder="Jan Kowalski"
        required
        minLength={2}
        autoComplete="name"
        form={form}
      />
      <Field
        id="email"
        name="email"
        type="email"
        label="Adres e-mail"
        placeholder="jan@example.com"
        required
        autoComplete="email"
        form={form}
      />
      <Field
        id="message"
        name="message"
        label="Wiadomość"
        as="textarea"
        placeholder="Chętnie zamówię miód lipowy..."
        required
        minLength={10}
        form={form}
      />
      <div className="form__honeypot" aria-hidden="true">
        <label htmlFor="website">Nie wypełniaj tego pola</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <button type="submit" className="btn btn--primary btn--block">
        Wyślij wiadomość
      </button>
      {form.status.type && (
        <p className={`form__status ${statusClass}`} role="status">
          {form.status.message}
        </p>
      )}
    </form>
  )
}

export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contactTitle">
      <div className="container">
        <h2 className="section-title" id="contactTitle">
          Skontaktuj się z nami
        </h2>
        <p className="section-subtitle">
          Masz pytania lub chcesz złożyć zamówienie? Napisz do nas — chętnie odpowiemy!
        </p>
        <div className="contact__grid">
          <div className="contact__info">
            <h3>Dane kontaktowe</h3>
            <div className="contact__info-item">
              <span className="contact__info-icon" aria-hidden="true">📧</span>
              <a href="mailto:kontakt@pasiekalas.pl">kontakt@pasiekalas.pl</a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon" aria-hidden="true">📞</span>
              <a href="tel:+48123456789">+48 123 456 789</a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon" aria-hidden="true">📍</span>
              <span>Las Kozłowski, Polska</span>
            </div>
            <p className="contact__info-note">
              Odpowiadamy na wiadomości w ciągu 24 godzin. Zapraszamy również do odwiedzenia naszej
              pasieki — z przyjemnością pokażemy, jak powstaje nasz miód!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
