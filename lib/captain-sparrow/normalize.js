'use strict';

export function normalizeName (name) {
    return name
    .replace(/[^A-Za-z0-9 \.]/g, '')
    .replace(/\./g, ' ')
    .replace(/ +/g, ' ')
    .toUpperCase()
    .trim();
}

export function padLeft (padString, arg) {
    var argString = arg.toString();
    return padString.slice(0, padString.length - argString.length) + argString;
}
