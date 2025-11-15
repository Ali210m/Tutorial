import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface SignInFormState {
  email: string
  password: string
  remember: boolean
}

export function SignIn() {
  const [form, setForm] = useState<SignInFormState>({
    email: '',
    password: '',
    remember: false,
  })

  const { t } = useLanguage()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Sign in with:', form)
    // İlerde gerçek auth işlemini buraya ekle
  }

  return (
    <section className="section signin" id="signin">
      <div className="section-header">
        <span className="section-pill">{t('signin.pill')}</span>
        <h2>{t('signin.title')}</h2>
      </div>

      <form className="signin-card" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">{t('signin.email')}</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t('signin.emailPlaceholder')}
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="password">{t('signin.password')}</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder={t('signin.passwordPlaceholder')}
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field field-inline">
          <label>
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            {t('signin.remember')}
          </label>
          <a className="link-ghost" href="#">
            {t('signin.forgotPassword')}
          </a>
        </div>

        <button className="button" type="submit">
          {t('signin.submit')}
        </button>
        <div className="signin-footer">
    <span>{t('signin.noAccount')}</span>
    <a className="link-ghost" href="#">
      {t('signin.createAccount')}
    </a>
  </div>
      </form>
    </section>
  )
}