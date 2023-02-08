module.exports = ({ env }) => ({
  
    // 'email-designer': {
    //   enabled: true,
  
    //   // ⬇︎ Add the config property
    //   config: {
    //     editor: {
    //       // optional - if you have a premium unlayer account
    //     ///  projectId: [UNLAYER_PROJECT_ID],
  
    //       tools: {
    //         heading: {
    //           properties: {
    //             text: {
    //               value: 'This is the new default text!',
    //             },
    //           },
    //         },
    //       },
    //       options: {
    //         features: {
    //           colorPicker: {
    //             presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A'],
    //           },
    //         },
    //         fonts: {
    //           showDefaultFonts: false,
    //           /*
    //            * If you want use a custom font you need a premium unlayer account and pass a projectId number :-(
    //            */
    //           customFonts: [
    //             {
    //               label: 'Anton',
    //               value: "'Anton', sans-serif",
    //               url: 'https://fonts.googleapis.com/css?family=Anton',
    //             },
    //             {
    //               label: 'Lato',
    //               value: "'Lato', Tahoma, Verdana, sans-serif",
    //               url: 'https://fonts.googleapis.com/css?family=Lato',
    //             },
    //             // ...
    //           ],
    //         },
    //         mergeTags: [
    //           {
    //             name: 'Email',
    //             value: 'Mahnaz',
    //             sample: 'karimimahnaz122@gmail.com',
    //           },
    //           // ...  '{{= USER.username }}'
    //         ],
    //       },
    //       appearance: {
    //         theme: 'dark',
    //         panels: {
    //           tools: {
    //             dock: 'left',
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
    // emailSendGrid: {
      
    //   config: {
    //     provider: 'sendgrid',
    //     providerOptions: {
    //       apiKey: 'SG.DDlyVN3YQP-csm9FEHU6TQ',
    //     },
    //     settings: {
    //       defaultFrom: 'karimimahnaz122@gma.com',
    //       defaultReplyTo: 'hello@softestingca.com',
    //     },
    //   },
    // },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.softestingca.com'),
          port: env('SMTP_PORT', 587),    
        //  secure:false,
          auth: {
            user:'no-reply@softestingca.com',   ///env('SMTP_USERNAME'),
            pass:'Mah13861392',    //env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'hello@softestingca.com',
          defaultReplyTo: 'hello@softestingca.com',
        },
      },
    },
///env('SENDGRID_API_KEY'),

    
    // upload: {
    //   config: {
    //     provider: 'cloudinary',
    //     providerOptions: {
    //       cloud_name: env('CLOUDINARY_NAME'),
    //       api_key: env('CLOUDINARY_KEY'),
    //       api_secret: env('CLOUDINARY_SECRET'),
    //     },
    //     actionOptions: {
    //       upload: {},
    //       delete: {},
    //     },
    //   },
    // },
    // ...
  });