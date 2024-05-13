import chalk from 'chalk';

/**
 * Log debug
 *
 * @param {...any} args Arguments
 */ export function debug(...args) {
  console.debug(chalk.gray('[debug]'), ...args);
}

/**
 * Log info
 *
 * @param {...any} args Arguments
 */
export function info(...args) {
  console.info(chalk.blue('[info]'), ...args);
}

/**
 * Log warn
 *
 * @param {...any} args Arguments
 */
export function warn(...args) {
  console.warn(chalk.yellow('[warn]'), ...args);
}

/**
 * Log error
 *
 * @param {...any} args Arguments
 */
export function error(...args) {
  console.error(chalk.red('[error]'), ...args);
}

/**
 * Log success
 *
 * @param {...any} args Arguments
 */
export function success(...args) {
  console.log(chalk.green('[success]'), ...args);
}

/**
 * Log
 *
 * @param {...any} args Arguments
 */
export function log(...args) {
  console.log(...args);
}

/** Clear console */
export function clear() {
  console.clear();
}

export default {
  debug,
  info,
  warn,
  error,
  success,
  log,
  clear,
};
