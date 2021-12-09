import { Chain } from './design-patterns/chain-of-responsibility/chain'
import { PageLogger } from './design-patterns/page-logger'

document.getElementById('app').innerHTML = `
<main class="content">
  <h1>A<strong>front</strong>ando el mal software</h1>
  <button id="run">Ejecutar</button>
  <h2>Logs de comandos</h2>
  <div id="command-logs"></div>
  
  <h2>Logs de resultado de ejecución</h2>
  <div id="result-logs"></div>
</main>
`

const commandPageLogger = new PageLogger(window, '#result-logs')
const chain = new Chain(new PageLogger(window, '#command-logs')).build()

document
  .querySelector('#run')
  .addEventListener('click', () =>
    chain
      .run()
      .then((result) => commandPageLogger.log(JSON.stringify(result, null, 2)))
  )
