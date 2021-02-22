import { join } from 'path'
import { generate } from '../lib'

const CURRENT_DIR = join(__dirname, 'temp')

generate('lerna', CURRENT_DIR)
  .then(res => console.log({ res }))
  .catch(err => console.log({ err }))
