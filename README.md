# JavaScript Dev Environment
[![Build Status](https://travis-ci.org/cameronrye/js-dev-environment.svg?branch=master)](https://travis-ci.org/cameronrye/js-dev-environment)
[![Coverage Status](https://coveralls.io/repos/github/cameronrye/js-dev-environment/badge.svg?branch=master)](https://coveralls.io/github/cameronrye/js-dev-environment?branch=master)
[![Dependency Status](https://dependencyci.com/github/cameronrye/js-dev-environment/badge)](https://dependencyci.com/github/cameronrye/js-dev-environment)
[![Build status](https://ci.appveyor.com/api/projects/status/624sbos1mca728ro?svg=true)](https://ci.appveyor.com/project/cameronrye/js-dev-environment)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![MIT Licensed](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://opensource.org/licenses/MIT)

Minimal, yet useful JavaScript development environment with out-of-the-box tools designed to get you up and running quickly with little configuration.

### Tools
 * [Ava](https://github.com/avajs/ava) for testing
 * [Standard](https://github.com/feross/standard) for linting
 * [Chokidar-cli](https://github.com/kimmobrunfeldt/chokidar-cli) for file watching
 * [Precommit-hook](https://github.com/nlf/precommit-hook) for automatically running npm scripts.

Run `npm run dev` and you will get all of your JS files linted by Standard.js and tests run by Ava.

You will not be able to commit to GIT unless all of your tests are green and the linter is happy.

## License

MIT © [Cameron Rye](https://cameronrye.com/)
