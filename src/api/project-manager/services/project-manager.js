'use strict';

/**
 * project-manager service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-manager.project-manager');
