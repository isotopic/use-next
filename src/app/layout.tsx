import './globals.css'
import Header from  './components/Header/Header'
import Footer from './components/Footer/Footer'
import localFont  from 'next/font/local'
import Menu from './components/Menu/Menu'

const URWGeometric = localFont({
  src: [
    {
      path: './assets/fonts/URWGeometric/URWGeometric-thin-webfont.woff2',
      weight: '100',
      style: 'thin',
    },
    {
      path: './assets/fonts/URWGeometric/URWGeometric-extralight-webfont.woff2',
      weight: '200',
      style: 'extralight',
    },
    {
      path: './assets/fonts/URWGeometric/URWGeometric-light-webfont.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './assets/fonts/URWGeometric/URWGeometric-regular-webfont.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: './assets/fonts/URWGeometric/URWGeometric-medium-webfont.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: './assets/fonts/URWGeometric/URWGeometric-semibold-webfont.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './assets/fonts/URWGeometric/URWGeometric-bold-webfont.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: './assets/fonts/URWGeometric/URWGeometric-extrabold-webfont.woff2',
      weight: '800',
      style: 'extrabold',
    },
    {
      path: './assets/fonts/URWGeometric/URWGeometric-heavy-webfont.woff2',
      weight: '900',
      style: 'heavy',
    },
    {
      path: './assets/fonts/URWGeometric/URWGeometric-black-webfont.woff2',
      weight: '950',
      style: 'black',
    },
  ],
})

export const metadata = {
  title: 'Toolbox',
  description: 'NextJS utilities',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={URWGeometric.className}>
        <div className="grid">
          <Header/>
          <Menu/>
          <div className="page">{children}</div>
          <Footer/> 
        </div>
      </body>
    </html>
  )
}
