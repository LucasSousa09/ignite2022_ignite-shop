import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

// Esse documento é carregado em todas as páginas da nossa aplicação
// A tag style juntamente com os parametros nela, servem para que a estilização seja aplicada do lado do servidor. Dessa forma o browser faz o download do HTML já estilizado.

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>

        <style id="stiches" dangerouslySetInnerHTML={{ __html: getCssText()}}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
