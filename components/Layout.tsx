import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { withAmp } from 'next/amp';
import "../styles.scss";

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style jsx global>{`
        body {
          font-family: Roboto, sans-serif;
          padding: 30px;
          color: #444;
        }
      `}</style>
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> | {' '}
        <Link href='/list-class'><a>List Example</a></Link> | {' '}
        <Link href='/list-fc'><a>List Example (as Functional Component)</a></Link> | {' '}
        <Link href='/about'><a>About</a></Link> | {' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span style={{color: 'pink'}}>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default withAmp(Layout, { hybrid: true });