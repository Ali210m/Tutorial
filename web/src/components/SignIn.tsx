import { useState } from 'react'

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
        <span className="section-pill">HESAP</span>
        <h2>Frontend Journey’e giriş yap</h2>
      </div>

      <form className="signin-card" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ornek@eposta.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Şifren"
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
            Beni hatırla
          </label>
          <a className="link-ghost" href="#">
            Şifremi unuttum
          </a>
        </div>

        <button className="button" type="submit">
          Giriş yap
        </button>
        <div className="signin-footer">
    <span>Hesabın yok mu?</span>
    <a className="link-ghost" href="#">
      Yeni hesap oluştur
    </a>
  </div>
      </form>
    </section>
  )
}