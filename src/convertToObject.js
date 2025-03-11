'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((arrayItem) => arrayItem.trim())
    .filter((arrayItem) => arrayItem !== '')
    .reduce((previousObject, styleRuleString) => {
      const rulePair = styleRuleString
        .split(':')
        .map((ruleItem) => ruleItem.trim());

      return {
        ...previousObject,
        [rulePair[0]]: rulePair[1],
      };
    }, {});
}

module.exports = convertToObject;
