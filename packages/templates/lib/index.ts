import { join } from 'path'
import { cmd } from 'nunix'
import { mkdtemp } from 'fs/promises'

export type ITemplate = 'lerna'

export const TEMPLATES: ITemplate[] = ['lerna']

/**
 * @function getTemplateDir
 *
 * @desc Get the metadata directory for the specified template.
 *
 * @param template
 */
const getTemplateDir = (template: ITemplate): string => {
  if (!TEMPLATES.includes(template)) {
    throw new Error('Template not found.')
  }

  return join(__dirname, '..', 'meta', template)
}

/**
 * @function generate
 *
 * @desc Create a temporary directory to merge metadata informed
 *       by the user and then copy the template to the informed
 *       directory.
 *
 * @param template
 * @param dest
 */
export const generate = async (
  template: ITemplate,
  dest: string,
): Promise<boolean> => {
  const templateDir = getTemplateDir(template)
  const tmpDir = await mkdtemp('/tmp/template-')

  await cmd(`cp -RT ${templateDir} ${tmpDir}`)

  // Change files with user metadata.

  await Promise.all([cmd(`cp -RT ${tmpDir} ${dest}`), cmd(`rm -rf ${tmpDir}`)])

  return true
}
