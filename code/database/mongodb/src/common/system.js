import { argv } from 'process';

/**
 * Is command
 *
 * @param {string} name Command name
 *
 * @returns {boolean} Is command
 */
export function isCommand(name) {
  return argv.at(2) === name;
}

/**
 * Get argument value
 *
 * @param {string} name Argument name
 *
 * @returns {string | boolean} Argument value
 */
export function getArgValue(name) {
  const index = argv.findIndex((arg) => arg === `--${name}`);
  if (index === -1) {
    return false;
  }

  const value = argv.at(index + 1);
  if (!value) {
    return true;
  }

  return value.startsWith('--') ? true : value;
}
