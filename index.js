'use strict';

module.exports = function (template, args) {
  return template.replace(/{([^}]*)}/g, function (match, key) {
    return key in args ? args[key] : match;
  });
};
