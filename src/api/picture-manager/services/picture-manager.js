'use strict';

/**
 * picture-manager service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::picture-manager.picture-manager');
