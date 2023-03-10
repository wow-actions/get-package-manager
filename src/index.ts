import * as core from '@actions/core'
import { detect } from 'detect-package-manager'

try {
  // eslint-disable-next-line unicorn/prefer-top-level-await
  detect().then((pm) => {
    core.setOutput('pm', pm)
    core.info(`It looks like you're using ${pm}.`)
  })
} catch (error) {
  core.error(error.message)
  core.setFailed(error.message)
}
