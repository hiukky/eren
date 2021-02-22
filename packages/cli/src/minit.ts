#!/usr/bin/env node

import yargs from 'yargs'

yargs
  .usage('Usage: $0 <command> [options]')
  .demandCommand(1)
  .commandDir('commands')
  .help()
  .version()
  .parse()
