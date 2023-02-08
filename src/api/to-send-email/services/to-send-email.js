'use strict';

/**
 * to-send-email service
 */
    const toEmail = process.env.TOEMAIL;
    const welcome = process.env.WELCOME;
    module.exports = {

     
       async create(data) {

        await strapi.plugin('email').service('email').send({
          to: toEmail,
          from: 'hello@softestingca.com',
          subject: 'Hello world',
          text: 'Hello world',
          html: `<h4>Hello world</h4>`,
        });
        
         
        // //   const response = await strapi.entityService.create("api::to-send-email.product", {
        // //     data,
        // //   });
        //   strapi
        //     .service("api::to-send-email.sendmail")
        //     .send(
        //       welcome,
        //       toEmail,
        //       "Welcome",
        //       `A product has been created ` ///${entity.name}`
        //     );
        //   return response;
         },
      };
    

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::to-send-email.to-send-email');
