import chalk from 'chalk';

/**
 * Log debug
 *
 * @param {string} message Message
 * @param {...unknown} args Arguments
 */
export function debug(message, ...args) {
  console.debug(`${chalk.gray('[debug]')} ${message}`, ...args);
}

/**
 * Log info
 *
 * @param {string} message Message
 * @param {...unknown} args Arguments
 */
export function info(message, ...args) {
  console.debug(`${chalk.blue('[info]')} ${message}`, ...args);
}

/**
 * Log warn
 *
 * @param {string} message Message
 * @param {...unknown} args Arguments
 */
export function warn(message, ...args) {
  console.debug(`${chalk.yellow('[warn]')} ${message}`, ...args);
}

/**
 * Log error
 *
 * @param {string} message Message
 * @param {...unknown} args Arguments
 */
export function error(message, ...args) {
  console.debug(`${chalk.red('[error]')} ${message}`, ...args);
}

/** Clear log */
export function clear() {
  console.clear();
}

export default {
  debug,
  info,
  warn,
  error,
  clear,
};
