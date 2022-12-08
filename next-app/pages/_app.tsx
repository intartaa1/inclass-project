import 'bulma';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const NavVue = ()=> <div className="navbar is-primary"></div>

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="root">
      <header>
          <NavVue />
      </header>

      <div class="container">
        <Component {...pageProps} />
      </div>

    </div>

  )
}
