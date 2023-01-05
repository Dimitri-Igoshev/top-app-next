import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Noto_Sans } from '@next/font/google'

const nanoSans = Noto_Sans({
	weight: ['300', '400', '500', '700'],
	style: 'normal',
	subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={nanoSans.className}>
			<Component {...pageProps} />
		</main>
	)
}
