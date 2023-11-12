'use strict';

/**
 * cronica service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cronica.cronica');
