import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import { wrapper } from '@profilur/store'
import { SessionProvider } from 'next-auth/react'
import { NavBar } from 'containers/NavBar'
import { PageLayout } from '@profilur/web-ui'

if (process.env.NEXT_PUBLIC_API_MOCKING_ENABLED === '1') {
  require('@profilur/api-mocks')
}

const DPCNextRtkQStartPage = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  console.log({ session })
  return (
    <>
      <Head>
        <title>DPC Next Basic Application</title>
      </Head>
      <SessionProvider session={session}>
        <NavBar />
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </SessionProvider>
    </>
  )
}
export default wrapper.withRedux(DPCNextRtkQStartPage)
