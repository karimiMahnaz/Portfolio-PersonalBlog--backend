//const toEmail = process.env.TOEMAIL;

module.exports = {

    async afterCreate()
       {
    try {

      await strapi.plugin('email').service('email').send({
        to: 'karimimahnaz122@gmail.com',
        from: 'hello@softestingca.com',
        subject: 'Hello world',
        text: 'Hello world',
        html: `<h4>Hello world</h4>`,
      });


  //       await strapi
  //         .plugin('email-designer')
  //         .service('email')
  //         .sendTemplatedEmail(
  //           {
  //             // required
  //             to: 'karimimahnaz122@gmail.com',
    
  //             // optional if /config/plugins.js -> email.settings.defaultFrom is set
  //             from: 'hello@softestingca.com',
    
  //             // optional if /config/plugins.js -> email.settings.defaultReplyTo is set
  //             replyTo: 'mahnazkarimi07@gmail.com',
    
  //             // optional array of files
  //             attachments: [],
  //           },
  //           {
  //             // required - Ref ID defined in the template designer (won't change on import)
  //             templateReferenceId: 9,
    
  //             // If provided here will override the template's subject.
  //             // Can include variables like `Thank you for your order {{= USER.firstName }}!`
  //             subject: `Thank you for your order`,
  //           }
  //           // {
  //           //   // this object must include all variables you're using in your email template
  //           //   USER: {
  //           //     firstname: 'John',
  //           //     lastname: 'Doe',
  //           //   },
  //           //   order: {
  //           //     products: [
  //           //       { name: 'Article 1', price: 9.99 },
  //           //       { name: 'Article 2', price: 5.55 },
  //           //     ],
  //           //   },
  //           //   shippingCost: 5,
  //           //   total: 20.54,
  //           // }
  //         );
  //     } catch (err) {
  //       strapi.log.debug('📺: ', err);
  //       return ctx.badRequest(null, err);
  //     }
  //   }
    // async afterCreate(event)
    //   {
    //     const {result} = event;
    //     try{
    //         await strapi.plugins['email'].services.email.send({
    //             to:'karimimahnaz122@gmail.com',
    //             from:'hello@softestingca.com',
    //             subject:'this is a strapi test',
    //             text:'hello, this is a strapi test '
    //         })
        }
        catch(err){
            console.log('send email error', err)
        }
      }
}