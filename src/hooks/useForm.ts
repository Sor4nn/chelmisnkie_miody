import { useState } from 'react'
import type { FormValues, FormStatus } from '../types.ts'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues): Partial<Record<keyof FormValues, string>> {
  const errors: Partial<Record<keyof FormValues, string>> = {}
  if (!values.name?.trim()) errors.name = 'To pole jest wymagane.'
  else if (values.name.trim().length < 2) errors.name = 'Minimum 2 znaki.'

  if (!values.email?.trim()) errors.email = 'To pole jest wymagane.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Podaj poprawny adres e-mail.'

  if (!values.message?.trim()) errors.message = 'To pole jest wymagane.'
  else if (values.message.trim().length < 10) errors.message = 'Minimum 10 znaków.'

  return errors
}

export function useForm() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
    website: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})
  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' })

  const setField = (name: keyof FormValues, value: string): void => {
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) {
      setErrors((e) => {
        const next: Partial<Record<keyof FormValues, string>> = { ...e }
        delete next[name]
        return next
      })
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setField(e.target.name as keyof FormValues, e.target.value)
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const fieldErrors = validate(values)
    if (fieldErrors[e.target.name as keyof FormValues]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name as keyof FormValues]: fieldErrors[e.target.name as keyof FormValues],
      }))
    }
  }

  const buildMailto = (data: FormValues): string => {
    const subject = `Zapytanie — ${data.name || 'Pasieka'}`
    const body = [
      `Imię: ${data.name || ''}`,
      `E-mail: ${data.email || ''}`,
      '',
      data.message || '',
    ].join('\n')
    return `mailto:kontakt@pasiekalas.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (values.website.trim()) {
      setStatus({ type: 'error', message: 'Wykryto spam. Spróbuj ponownie.' })
      return
    }
    const fieldErrors = validate(values)
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors)
      setStatus({ type: 'error', message: 'Popraw błędy w formularzu.' })
      return
    }
    window.location.href = buildMailto(values)
    setStatus({ type: 'success', message: 'Dziękujemy! Otwieramy klient poczty…' })
    setValues({ name: '', email: '', message: '', website: '' })
  }

  return { values, errors, status, onChange, onBlur, onSubmit }
}
