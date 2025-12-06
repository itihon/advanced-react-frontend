// export default 'SvgrURL'
// export const ReactComponent = 'div'
const React = require('react');

module.exports = {
  __esModule: true,            // important for `import LightIcon from ...`
  default: 'svg',          // default export (string)
  ReactComponent: (props) =>   // SVGR-style named export
    React.createElement('svg', props),
};
