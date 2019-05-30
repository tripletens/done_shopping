const cart = [
    {
      id: 1,
      name: 'Product 1',
      available_quantity: 5,
      price: 450,
      description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
    },
  
    {
      id: 2,
      name: 'Product 2',
      available_quantity: 7,
      price: 50,
      description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
    },
  
    {
      id: 3,
      name: 'Product 3',
      available_quantity: 0,
      price: 500,
      description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
    },
  
    {
      id: 4,
      name: 'Product 4',
      available_quantity: 4,
      price: 1500,
      description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
    },
   
      {
        id: 5,
        name: 'TC 2017 LS',
        description: 'VC FlexLight Jersey with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.',
        price: 34.95,
        available_quantity: 4,
        count: 12,
        img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_LS_Mens_grande.jpg?v=1485541617',
        description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
      }, {
        id: 6,
        name: 'TC 2017 Shorts',
        description: 'VC FlexLight Shorts with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.',
        price: 25.00,
        available_quantity: 4,
        count: 7,
        img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_Shorts_White_grande.jpg?v=1485541580',
        description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
     
    }, {
        id: 7,
        name: 'TC 2016 Red SS',
        description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
        price: 74.00,
        available_quantity: 4,
        count: 11,
        img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_red_SS_front_grande.jpg?v=1468602448',
        description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
      }, {
        id: 8,
        name: 'TC 2016 Dark SS',
        description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
        price: 35.99,
        available_quantity: 4,
        count: 13,
        img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_SS_front_grande.jpg?v=1460557226',
        description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
      }, {
        id: 9,
        name: 'TC 2016 Light SS',
        description: 'Official replica of the 2016 Team Canada light playing jersey. VC spot sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
        price: 35.99,
        available_quantity: 4,
        count: 16,
        img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TCsample2_white_front_grande.jpg?v=1480111096',
        description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
      }, {
        id: 10,
        name: 'Goat Shorts',
        description: 'This just in... VC\'s NEW signature \'GOAT\' style athletic shorts now with pockets! Made with our FlexLight material.',
        price: 29.00,
        available_quantity: 4,
        count: 4,
        img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/MedGreyPockets_front_grande400x600_grande_888f95c1-0f4d-483f-938e-c686892a855a_grande.jpg?v=1454966549',
        description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
    }, {
        id: 11,
        name: 'Friction Gloves',
        description: 'This is the glove that started it all! Friction Gloves work great in every condition: dry, hot, rain, snow, you name it. They will help you maintain a firm grip on the disc whether you\'re catching or throwing. They eliminate slippage when the disc is wet, keep your hands warm in cold weather, and ease the sting of zippy throws. Whether your goal is to throw with more accuracy, catch tough discs, or just look fly, Frictions will help.  Frictions are not bulky or stiff like other gloves. They are tight fitting and, after a while, you\'ll forget they\'re even on!',
        price: 33.95,
        available_quantity: 4,
        count: 18,
        img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/Gloves_grande.jpg?v=1446586810',
        description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
      }, {
        id: 12,
        name: 'TC 2017 Trucker',
        description: 'Premium meshback cotton front trucker hat. Made by FlexFit, with the official embroidered patch of Team Canada 2017! 47% Cotton / 25% Polyester / 28% Nylon, contrast trucker mesh back, matching plastic snap, hard buckram, matching undervisor. One size fits all',
        price: 15.00,
        available_quantity: 4,
        count: 15,
        img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_Hat_Snapback_BlackWhite_grande.jpg?v=1485538793',
        description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
      }, {
        id: 13,
        name: 'VC Discraft Disc',
        description: 'Discraft 175 gram Ultrastar disc, hot stamped with the original VC logo.',
        price: 14.00,
        available_quantity: 4,
        count: 19,
        img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/Disc_VC_OG_grande_grande_cc0c1695-4247-426a-bd6c-5821da4e42da_grande.png?v=1485469652',
        description: 'Lorem ipsum dolor sit amet, iusto appellantur vix te, nam affert feugait menandri eu. Magna simul ad est. Nostrum neglegentur ius at, at pertinax repudiare vel. Vim an adolescens quaerendum.'
      },
  ];