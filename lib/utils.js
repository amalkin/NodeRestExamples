'use strict';
var _ = require('lodash');
var requestPromise = require('request-promise');

function UtilsHelper() {
}
UtilsHelper.prototype.getFormattedDate = function(date) {
    var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var formattedDate = day + ' ' + monthNames[monthIndex] + ' ' + year;

    return formattedDate;
};

module.exports = UtilsHelper;

