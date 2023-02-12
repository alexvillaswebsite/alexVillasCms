'use strict';

/**
 * airbnb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::airbnb.airbnb');
