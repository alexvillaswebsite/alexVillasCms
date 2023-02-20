'use strict';

/**
 * why-alex service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::why-alex.why-alex');
