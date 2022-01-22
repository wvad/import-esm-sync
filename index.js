const { dirname, join } = require('node:path');
const { waitFor } = require('promise-information');
const { inferParentFile } = require('parent-file-path');

const isWindows = process.platform === 'win32';

module.exports = function importSync(name) {
  if (/^\.{1,2}[\/\\]/.test(name)) {
    name = join(dirname(inferParentFile()), name);
    if (isWindows && /^[a-z]:/i.test(name)) {
      name = `file://${name}`;
    }
  }
  return waitFor(import(name));
};
