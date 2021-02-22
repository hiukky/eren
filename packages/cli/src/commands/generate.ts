import { getTemplateDir, TEMPLATES } from '@minit/templates'
import { CommandBuilder, Arguments } from 'yargs'
import fs from 'fs/promises'
import ora from 'ora'

export const desc = 'Generate project from template'

export const builder: CommandBuilder = {
  template: {
    alias: 't',
    desc: 'Template name',
    demandOption: true,
    string: true,
    choices: TEMPLATES,
  },
}

export const handler = async (args: Arguments) => {
  const spinnerStart = ora({ color: 'green', text: 'Generatig...' })

  const files = await fs.readdir(getTemplateDir('lerna'))

  console.log(files)

  spinnerStart.start()

  setTimeout(() => spinnerStart.succeed('Done'), 500)
}
