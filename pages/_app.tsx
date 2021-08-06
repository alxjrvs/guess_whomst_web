import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'

const GuessWhomst: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
export default GuessWhomst
