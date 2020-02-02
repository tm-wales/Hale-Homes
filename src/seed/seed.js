const admin = require('firebase-admin')

const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const pages = [
    {
        id: 'home',
        name: 'home',
        pageTitle: 'Hale Homes',
        meta: [
            {
                name: 'description',
                content: 'Description for hale homes.'
            },
            {
                name: 'keywords',
                content: ''
            }
        ]
    },
    {
        id: 'search',
        name: 'search',
        pageTitle: 'Search | Hale Homes',
        meta: [
            {
                name: 'description',
                content: 'Search for Hale Homes.'
            },
            {
                name: 'keywords',
                content: ''
            }
        ]
    },
    {
        id: 'developments',
        name: 'developments',
        pageTitle: 'Developments | Hale Homes',
        meta: [
            {
                name: 'description',
                content: 'Hale homes developments'
            },
            {
                name: 'keywords',
                content: ''
            }
        ]
    },
    {
        id: 'housetype',
        name: 'housetype',
        pageTitle: '#housetype# | #development# | Hale Homes',
        meta: [
            {
                name: 'description',
                content: 'Hale homes developments'
            },
            {
                name: 'keywords',
                content: ''
            }
        ]
    },
    {
        id: 'about',
        name: 'about us',
        pageTitle: 'Why Hale Homes | About Us | Hale Homes',
        meta: [
            {
                name: 'description',
                content: ''
            },
            {
                name: 'keywords',
                content: ''
            }
        ],
        content: [
            {
                id: 'why',
                title:
                    'Welcome to Hale Homes, a luxury house-builder based in Neath, South Wales.',
                text:
                    '<p>We are a family run company, established in 1996, to provide contemporary homes with spectacular design and plenty of space for both families and individuals. Our focus is on building high quality homes with the most sustainable sources available - it\'s an approach which has seen us win awards for sustainable design.</p><p>Boasting multiple developments all over South Wales, including the highly sought after SA1 area in Swansea Marina, we are confident that we have a house type to suit your needs. Our sister company <a href="https://www.somodular.co.uk" target="_blank">Seven Oaks Modular</a> designs and manufacturers innovative timber frames and roof trusses. We make use of these eco-friendly building solutions in both our Hale Homes and in our larger scale projects. This breadth of expertise allows us to deliver all aspects of a build, from the footings and foundations all the way through to final fixings, painting and flooring.</p><p>Hale has been recognised in the prestigious local authority \'<b>Built in Quality Awards</b>\', which recognise exemplary standards of construction and workmanship. As a company, we are committed to eco-friendly construction methods. We source all the wood for our timber frame designs from local and renewable suppliers and recycle all waste timber. Similarly, we insist on sustainable and energy efficient design throughout our projects.</p>'
            },
            {
                id: 'accreditation',
                title: 'FSC & PEFC accreditation',
                text:
                    '<p>We have both FSC and PEFC accreditation.</p><p>The Forest Stewardship Council (FSC) is an international organisation that promotes responsible forest management, whilst the Programme for the Endorsement of Forest Certification (PEFC) provides worldwide certification for forestry management companies.</p><p>As a business who works with timber that is sourced from various locations, we aim to work with forestry companies that can prove that they manage their forest in a responsible way. Working with suppliers who are members of the FSC and PEFC means that we can be confident about the sourcing of our timber and wood-based products.</p><p>In addition, having these marks means that we can label our products accordingly; from this our Customers can see that the wood products we supply can be traced back to a renewable and responsible source. It also shows that the final product has been implemented with due respect for the environment, plus matching economic and social standards.</p>'
            },
            {
                id: 'eco',
                title: 'No timber waste',
                text:
                    '<p>Ever since 1996, when parent company Hale was established, the company has striven to be as sustainably responsible as possible. It’s a core value of ours which is reflected in how we design our energy efficient homes and how we run our Neath based business.</p><p>Alongside putting in place robust methods that ensure sustainability principles are equal across the business, we also strive to be innovative and think outside the box. For example, we installed biomass boilers to heat our Neath headquarters where Sevenoaks and Hale staff work. To fuel the boilers, we use offcuts from the Sevenoaks factory. Not only does this ensure that resources are not wasted, it also saves on our energy consumption. Our energy consumption is solely run on waste timber.</p>'
            }
        ]
    },
    {
        id: 'contact',
        name: 'Contact Us',
        pageTitle: 'Contact Us | Hale Homes',
        meta: [
            {
                name: 'description',
                content: ''
            },
            {
                name: 'keywords',
                content: ''
            }
        ]
    },
    {
        id: 'legal',
        name: 'Legal',
        pageTitle: 'Legal | Hale Homes',
        meta: [
            {
                name: 'description',
                content: 'Hale Home Policies.'
            },
            {
                name: 'keywords',
                content: 'Policies'
            }
        ]
    }
]

const developments = [
    {
        id: 'princes-wharf',
        name: "Prince's Wharf",
        route: 'princes-wharf',
        title: 'Perfect Waterfront Location in SA1',
        mailchimp: '2fc15254d8',
        housesAvailable: 0,
        futureDevelopment: false,
        sections: [
            {
                title: 'Prestigous SA1 location',
                subtitle: "Prince's Wharf SA1",
                summary:
                    "Prince's Wharf is a new development of 23 three and four bedroom town houses located in the comfortable and convenient SA1 area of Swansea.",
                text:
                    '<p>It is a small development in a growing residential area. A perfect location for those who want to experience a busy lifestyle with access to the coastal and city elements that Swansea offers.</p>',
                media: {
                    name: "Prince's Wharf Walkthrough",
                    type: 'vimeo',
                    src:
                        'https://player.vimeo.com/video/225843597?color=000000&title=0&byline=0&portrait=0'
                },
                hImage: '/developments/pwsa1/princes wharf.jpeg',
                colors: {
                    background: '#FFFFFF',
                    mainText: '#171717',
                    subText: '#6AC3EA'
                }
            }
        ],
        header: {
            title: "Prince's Wharf",
            subTitle: 'SA1',
            logo: '/developments/pwsa1/crown.png',
            background: {
                name: 'SA1 banner',
                type: 'image',
                src: '/developments/pwsa1/pw water.jpg'
            },
            class: 'article--middle princes-wharf'
        },
        front: {
            name: "Prince's Wharf SA1",
            src: '/developments/pwsa1/princes wharf.jpeg',
            logo: '',
            class: 'article--left'
        },
        sitePlan: {
            svg: '/developments/pwsa1/siteplan.svg',
            image: ''
        },
        location: 'Swansea SA1',
        amenities:
            '<p>SA1 Swansea Waterfront is the marketing name given to the brownfield development area located in northern part of Swansea Docks. The area is located directly to the southeast of Swansea city centre. It is bordered by the Fabian Way to the north and covers the Prince of Wales Dock area.</p><p>The development will be a commercial and residential mix. The forecast outputs are 2,900 new jobs, about 2,000+ new apartments and houses, 65,000 m² (700,000 sq ft) of business/offices; 29,000 m² (312,000 sq ft) of commercial leisure; 26,400 m² (284,200 sq ft) of hotel development; 23,200 m² (249,700 sq ft) of institutional facilities; 1,015 m² (10,930 sq ft) of on shore marina facilities.</p>',
        map: {
            longitude: -3.9220236,
            latitude: 51.6210282,
            iframe:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.6825889369094!2d-3.9226926160224616!3d51.62043139608717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e5f31f4176c7b%3A0xf16ad642752e1e0d!2sMorriston%2C+Swansea!5e0!3m2!1sen!2suk!4v1551706129031'
        },
        brochure: '',
        media: [
            {
                name: "Prince's Wharf VR",
                type: 'vimeo',
                src:
                    'https://player.vimeo.com/video/219822974?color=000000&title=0&byline=0&portrait=0'
            },
            {
                name: "Prince's Wharf SA1-2",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-2.jpg"
            },
            {
                name: "Prince's Wharf SA1-3",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-3.jpg"
            },
            {
                name: "Prince's Wharf SA1-5",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-5.jpg"
            },
            {
                name: "Prince's Wharf SA1-6",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-6.jpg"
            },
            {
                name: "Prince's Wharf SA1-7",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-7.jpg"
            },
            {
                name: "Prince's Wharf SA1-8",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-8.jpg"
            },
            {
                name: "Prince's Wharf SA1-11",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-11.jpg"
            },
            {
                name: "Prince's Wharf SA1-12",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-12.jpg"
            },
            {
                name: "Prince's Wharf SA1-13",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-13.jpg"
            },
            {
                name: "Prince's Wharf SA1-14",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-14.jpg"
            },
            {
                name: "Prince's Wharf SA1-17",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-17.jpg"
            },
            {
                name: "Prince's Wharf SA1-18",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-18.jpg"
            },
            {
                name: "Prince's Wharf SA1-20",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-20.jpg"
            },
            {
                name: "Prince's Wharf SA1-21",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-21.jpg"
            },
            {
                name: "Prince's Wharf SA1-22",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-22.jpg"
            },
            {
                name: "Prince's Wharf SA1-24",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-24.jpg"
            },
            {
                name: "Prince's Wharf SA1-25",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-25.jpg"
            },
            {
                name: "Prince's Wharf SA1-26",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-26.jpg"
            },
            {
                name: "Prince's Wharf SA1-27",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-27.jpg"
            },
            {
                name: "Prince's Wharf SA1-28",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-28.jpg"
            },
            {
                name: "Prince's Wharf SA1-29",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-29.jpg"
            },
            {
                name: "Prince's Wharf SA1-31",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-31.jpg"
            },
            {
                name: "Prince's Wharf SA1-33",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-33.jpg"
            },
            {
                name: "Prince's Wharf SA1-34",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-34.jpg"
            },
            {
                name: "Prince's Wharf SA1-35",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-35.jpg"
            },
            {
                name: "Prince's Wharf SA1-36",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-36.jpg"
            },
            {
                name: "Prince's Wharf SA1-37",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-37.jpg"
            },
            {
                name: "Prince's Wharf SA1-38",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-38.jpg"
            },
            {
                name: "Prince's Wharf SA1-39",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-39.jpg"
            },
            {
                name: "Prince's Wharf SA1-41",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-41.jpg"
            },
            {
                name: "Prince's Wharf SA1-43",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-43.jpg"
            },
            {
                name: "Prince's Wharf SA1-44",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-44.jpg"
            },
            {
                name: "Prince's Wharf SA1-48",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-48.jpg"
            },
            {
                name: "Prince's Wharf SA1-49",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-49.jpg"
            },
            {
                name: "Prince's Wharf SA1-50",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-50.jpg"
            },
            {
                name: "Prince's Wharf SA1-52",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-52.jpg"
            },
            {
                name: "Prince's Wharf SA1-54",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-54.jpg"
            },
            {
                name: "Prince's Wharf SA1-57",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-57.jpg"
            },
            {
                name: "Prince's Wharf SA1-61",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-61.jpg"
            },
            {
                name: "Prince's Wharf SA1-63",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-63.jpg"
            },
            {
                name: "Prince's Wharf SA1-64",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-64.jpg"
            },
            {
                name: "Prince's Wharf SA1-65",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-65.jpg"
            },
            {
                name: "Prince's Wharf SA1-66",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-66.jpg"
            },
            {
                name: "Prince's Wharf SA1-70",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-70.jpg"
            },
            {
                name: "Prince's Wharf SA1-72",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-72.jpg"
            },
            {
                name: "Prince's Wharf SA1-73",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-73.jpg"
            },
            {
                name: "Prince's Wharf SA1-74",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-74.jpg"
            },
            {
                name: "Prince's Wharf SA1-76",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-76.jpg"
            },
            {
                name: "Prince's Wharf SA1-78",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-78.jpg"
            },
            {
                name: "Prince's Wharf SA1-79",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-79.jpg"
            },
            {
                name: "Prince's Wharf SA1-80",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-80.jpg"
            },
            {
                name: "Prince's Wharf SA1-82",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-82.jpg"
            },
            {
                name: "Prince's Wharf SA1-85",
                type: 'image',
                src: "/developments/pwsa1/media/Prince's Wharf SA1-85.jpg"
            }
        ],
        colors: {
            background: '#6AC3EA',
            mainText: '#171717',
            subText: '#FFFFFF',
            floorplan: '#6AC3EA'
        }
    },
    {
        id: 'leiros-park',
        name: 'Leiros Park',
        route: 'leiros-park',
        title: 'Register your interest now!',
        mailchimp: 'a569c32cd9',
        housesAvailable: 0,
        futureDevelopment: true,
        front: {
            name: 'Leiros Park, Bryncoch',
            logo: '',
            src: '/developments/comingsoon.png',
            class: 'article--left'
        }
    },
    {
        id: 'bay-view',
        name: 'Bay View',
        route: 'bay-view',
        title: 'A quality development of 13 family homes',
        housesAvailable: 0,
        futureDevelopment: false,
        sections: [
            {
                title: 'On the beach',
                subtitle: 'Aberavon',
                summary:
                    'Taking advantage of the spectacular sea views overlooking Swansea Bay, Bay View is ideally located for exploring the beautiful South Wales countryside; right on your doorstep are three miles of expansive white sands along Aberavon seafront. Margam Park and Afan Forest are popular days out with mountain biking trails, walks and children’s activities.',
                text:
                    '<p>Port Talbot offers a wide range of leisure and retail opportunities including the Aberafan Shopping Centre and Baglan Bay Industrial Park including several supermarkets and out-of-town stores. Bay View is well connected for transport with the M4 just a few minutes away and the main South Wales train line stopping in Port Talbot. Ideal for families, there are many schools in the vicinity including the soon to be unveiled ‘all through’ Ysgol Bae Baglan.</p>',
                media: {
                    name: 'Bay View Aberavon',
                    type: 'image',
                    src: '/developments/bayview/JPEG/Hale_Bay View-22.jpg'
                },
                hImage: '',
                colors: {
                    background: '#FFFFFF',
                    mainText: '#171717',
                    subText: '#6AC3EA'
                }
            }
        ],
        sitePlan: {
            svg: '',
            image: ''
        },
        header: {
            title: 'Bay View',
            subTitle: 'Aberavon',
            logo: '',
            background: {
                name: 'Bay View',
                type: 'image',
                src: '/developments/bayview/JPEG/20170307_133018.jpg'
            },
            class: 'article--left'
        },
        brochure:
            '/developments/bayview/Brochures/Bay View Brochure 06-11-15-PR.pdf',
        media: [
            {
                name: 'Hale Bay View 1',
                type: 'image',
                src: '/developments/bayview/Web/Hale_Bay View-1.jpg'
            },
            {
                name: 'Hale Bay View 2',
                type: 'image',
                src: '/developments/bayview/Web/Hale_Bay View-2.jpg'
            },
            {
                name: 'Hale Bay View 3',
                type: 'image',
                src: '/developments/bayview/Web/Hale_Bay View-3.jpg'
            },
            {
                name: 'Hale Bay View 4',
                type: 'image',
                src: '/developments/bayview/Web/Hale_Bay View-4.jpg'
            },
            {
                name: 'Hale Bay View 5',
                type: 'image',
                src: '/developments/bayview/Web/Hale_Bay View-5.jpg'
            },
            {
                name: 'Hale Bay View 6',
                type: 'image',
                src: '/developments/bayview/Web/Hale_Bay View-6.jpg'
            },
            {
                name: 'Hale Bay View 7',
                type: 'image',
                src: '/developments/bayview/Web/Hale_Bay View-7.jpg'
            },
            {
                name: 'Hale Bay View 9',
                type: 'image',
                src: '/developments/bayview/Web/Hale_Bay View-9.jpg'
            },
            {
                name: 'Hale Bay View 10',
                type: 'image',
                src: '/developments/bayview/Web/Hale_Bay View-10.jpg'
            },
            {
                name: 'Hale Bay View 11',
                type: 'image',
                src: '/developments/bayview/Web/Hale_Bay View-11.jpg'
            }
        ],
        colors: {
            background: '#6AC3EA',
            mainText: '#171717',
            subText: '#FFFFFF'
        }
    },
    {
        id: 'bethany-lane-mumbles',
        name: 'Bathany Lane Mumbles',
        route: 'bethany-lane-mumbles',
        title: 'Just a stones throw from the picturesque village of Mumbles',
        housesAvailable: 0,
        futureDevelopment: false,
        sections: [
            {
                title: 'Village of Mumbles',
                subtitle: 'West Cross',
                summary:
                    "Bethany Lane is located in West Cross, just a stones throw from the picturesque village of Mumbles, the gateway to the Gower peninsula, the UK's first designated area of natural outstanding beauty. Set in a tranquil environment with the beach right on your doorstep, Bethany Lane offers a range of individual luxurious four and five bedroom family homes in a charming location.",
                text:
                    "<p>Mumbles offers a fantastic selection of unique, independent boutiques, traditional pubs and restaurants, and is just a short stroll along the promenade which encompasses Swansea Bay. This scenic walkway and cycle path stretches from Mumbles pier all the way to Swansea marina and city centre.</p><p>Bethany Lane has great local transport links with a regular bus service from Mumbles road, a minutes walk away, and Swansea's railway station is less than six miles away for those travelling further afield. Each home in the development benefits from a private garden, and a designated parking space as well as a garage. Offering everything you need for comfortable living, Bethany Lane is the key to your perfect family home.</p>",
                media: {
                    name: 'Bethany Lane Mumbles',
                    type: 'image',
                    src:
                        '/developments/bethany-lane-mumbles/JPEG/Hale_Bethany Lane-12.jpg'
                },
                hImage: '',
                colors: {
                    background: '#FFFFFF',
                    mainText: '#171717',
                    subText: '#49742C'
                }
            }
        ],
        sitePlan: {
            svg: '',
            image: ''
        },
        header: {
            title: 'Bethany Lane',
            subTitle:
                'Just a stones throw from the picturesque village of Mumbles',
            logo: '',
            background: {
                name: 'Bethany Lane background',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/JPEG/Hale_Bethany Lane-7.jpg'
            },
            class: 'article--left'
        },
        media: [
            {
                name: 'Hale Bathany Lane 2',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-2.jpg'
            },
            {
                name: 'Hale Bathany Lane 5',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-5.jpg'
            },
            {
                name: 'Hale Bathany Lane 7',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-7.jpg'
            },
            {
                name: 'Hale Bathany Lane 8',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-8.jpg'
            },
            {
                name: 'Hale Bathany Lane 10',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-10.jpg'
            },
            {
                name: 'Hale Bathany Lane 12',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-12.jpg'
            },
            {
                name: 'Hale Bathany Lane 14',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-14.jpg'
            },
            {
                name: 'Hale Bathany Lane 16',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-16.jpg'
            },
            {
                name: 'Hale Bathany Lane 19',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-19.jpg'
            },
            {
                name: 'Hale Bathany Lane 24',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-24.jpg'
            },
            {
                name: 'Hale Bathany Lane 25',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-25.jpg'
            },
            {
                name: 'Hale Bathany Lane 26',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-26.jpg'
            },
            {
                name: 'Hale Bathany Lane 27',
                type: 'image',
                src:
                    '/developments/bethany-lane-mumbles/Web/Hale_Bethany Lane-27.jpg'
            }
        ],
        colors: {
            background: '#49742C',
            mainText: '#171717',
            subText: '#FFFFFF'
        }
    },
    {
        id: 'poplars-drive-skewen',
        name: 'Poplars Drive',
        route: 'poplars-drive-skewen',
        title: 'Just a stones throw from the picturesque village of Mumbles',
        housesAvailable: 0,
        futureDevelopment: false,
        brochure:
            '/developments/poplars-drive-skewen/Original Phase Inserts Final PR.pdf',
        sections: [
            {
                title: 'Easy access',
                subtitle: 'Skewen',
                summary:
                    'If you’re looking for a home within easy reach of open countryside, need quick access to the M4 for regular commuting, or want to be close to family-friendly amenities and a vibrant local community, Poplars Drive has it all.',
                text:
                    '<p>Conveniently located on Crymlyn Road on the edge of Skewen in Neath, Poplars Drive is close to J43 and J44 of the M4, and just 15 minutes drive from Swansea City Centre. Within walking distance of the site you’ll find a good range of local shops providing for all your everyday needs and Skewen is also well served bysupermarkets. There are parks, playgrounds and open spaces nearby, and a choice of local schools for all ages. Offering everything you need for an easy and more comfortable life, and with a mix of property types available, Poplars Drive is ideal for families, professionals and retired couples alike.</p>',
                media: {
                    name: 'Poplars drive 360 show home',
                    type: 'youtube',
                    src: 'https://www.youtube.com/embed/V4Bkk2A7z88'
                },
                hImage: '',
                colors: {
                    background: '#FFFFFF',
                    mainText: '#171717',
                    subText: '#97f186'
                }
            }
        ],
        sitePlan: {
            svg: '',
            image: ''
        },
        header: {
            title: 'Poplars Drive',
            subTitle:
                'Conveniently located on Crymlyn Road on the edge of Skewen in Neath',
            logo: '',
            background: {
                name: 'Bethany Lane background',
                type: 'image',
                src: '/developments/poplars-drive-skewen/JPEG/Hale_Skewen-1.jpg'
            },
            class: 'article--left'
        },
        media: [
            {
                name: 'Hale Skewen 3',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-3.jpg'
            },
            {
                name: 'Hale Skewen 4',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-4.jpg'
            },
            {
                name: 'Hale Skewen 6',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-6.jpg'
            },
            {
                name: 'Hale Skewen 8',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-8.jpg'
            },
            {
                name: 'Hale Skewen 10',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-10.jpg'
            },
            {
                name: 'Hale Skewen 11',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-11.jpg'
            },
            {
                name: 'Hale Skewen 12',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-12.jpg'
            },
            {
                name: 'Hale Skewen 14',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-14.jpg'
            },
            {
                name: 'Hale Skewen 16',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-16.jpg'
            },
            {
                name: 'Hale Skewen 17',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-17.jpg'
            },
            {
                name: 'Hale Skewen 18',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-18.jpg'
            },
            {
                name: 'Hale Skewen 19',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-19.jpg'
            },
            {
                name: 'Hale Skewen 20',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-20.jpg'
            },
            {
                name: 'Hale Skewen 21',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-21.jpg'
            },
            {
                name: 'Hale Skewen 22',
                type: 'image',
                src: '/developments/poplars-drive-skewen/Web/Hale_Skewen-22.jpg'
            }
        ],
        colors: {
            background: '#97f186',
            mainText: '#171717',
            subText: '#FFFFFF'
        }
    },
    {
        id: 'waunsterw',
        name: 'Waunsterw',
        route: 'waunsterw',
        title: 'Nestled in the hills above Pontardawe in the Swansea Valley.',
        housesAvailable: 0,
        futureDevelopment: false,
        brochure:
            '/developments/waunsterw/Brochures/Hale-Homes-Waunsterw-Folder-Final.pdf',
        sections: [
            {
                title: 'Quiet family community',
                subtitle: 'Swansea Valley',
                summary:
                    'Waunsterw is a brand new development of seven spacious family homes, nestled in the hills above Pontardawe in the Swansea Valley, yet only 10 minutes from the M4 motorway. With the golden sands of Gower beaches and the rolling hills of Brecon all within easy reach, Waunsterw has exactly what you’re looking for.',
                text:
                    '<p>The town centre, less than a mile away, is home to a range of local shops including a bakery and a butcher as well as banks, several restaurants and pubs. Pontardawe also boasts a leisure centre, a swimming pool and an arts centre where you can see all the latest films. A Tesco superstore is conveniently located just outside the town centre and for a wider range of shops, both Neath town centre and Swansea City Centre are less than a 20 minute drive away.</p><p>For those with families the local area is well served for schools, with Rhydyfro Primary School less than a 10 minute walk away, and the highly rated Cwmtawe Community School for secondary age pupils also just a mile away.</p>',
                media: {
                    name: 'Poplars drive 360 show home',
                    type: 'image',
                    src: '/developments/waunsterw/HR/Waunsterw-42.jpg'
                },
                hImage: '',
                colors: {
                    background: '#FFFFFF',
                    mainText: '#171717',
                    subText: '#78AB46'
                }
            }
        ],
        sitePlan: {
            svg: '',
            image: ''
        },
        header: {
            title: 'Waunsterw',
            subTitle:
                'Nestled in the hills above Pontardawe in the Swansea Valley.',
            logo: '',
            background: {
                name: 'Waunsterw background',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-54.jpg'
            },
            class: 'article--left'
        },
        media: [
            {
                name: 'Waunsterw 2',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-2.jpg'
            },
            {
                name: 'Waunsterw 15',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-15.jpg'
            },
            {
                name: 'Waunsterw 20',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-20.jpg'
            },
            {
                name: 'Waunsterw 23',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-23.jpg'
            },
            {
                name: 'Waunsterw 25',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-25.jpg'
            },
            {
                name: 'Waunsterw 28',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-28.jpg'
            },
            {
                name: 'Waunsterw 34',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-34.jpg'
            },
            {
                name: 'Waunsterw 37',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-37.jpg'
            },
            {
                name: 'Waunsterw 41',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-41.jpg'
            },
            {
                name: 'Waunsterw 42',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-42.jpg'
            },
            {
                name: 'Waunsterw 44',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-44.jpg'
            },
            {
                name: 'Waunsterw 45',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-45.jpg'
            },
            {
                name: 'Waunsterw 48',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-48.jpg'
            },
            {
                name: 'Waunsterw 60',
                type: 'image',
                src: '/developments/waunsterw/HR/Waunsterw-60.jpg'
            }
        ],
        colors: {
            background: '#97f186',
            mainText: '#171717',
            subText: '#FFFFFF'
        }
    }
]

const houseTypes = [
    {
        id: 'the-rioja',
        name: 'The Rioja',
        route: 'the-rioja',
        development: 'princes-wharf',
        keyFacts: [
            '4 bedroom',
            '1 Living',
            '4 bathroom',
            'Garage',
            'Sun lounge'
        ],
        icon: '',
        bedrooms: 4,
        numberAvailable: 0,
        minPrice: 0,
        short: 'A modern, spacious four bedroom home spread over four floors.',
        description:
            '<b>Introducing The Rioja:</b> A modern, spacious four bedroom home spread over four floors. The ground floor includes a double bedroom, family bathroom and access into the integral garage. On the first floor there’s a spacious open plan kitchen/dining space and lounge, whilst on the second floor, both the master and double bedroom feature en-suite bathrooms. All floors are accessed via a central staircase which leads to the third floor with it’s bedroom, shower room, sun lounge and your own private rooftop terrace.',
        brochure: '/houses/rioja/rioja.pdf',
        cardImage: '/houses/rioja/the rioja.jpg',
        media: [
            {
                name: 'Rioja',
                title: 'Internal walkthrough of The Rioja',
                type: 'vimeo',
                src:
                    'https://player.vimeo.com/video/225843597?color=ffffff&title=0&byline=0&portrait=0',
                order: 1
            },
            {
                name: 'kitchen',
                title: 'Rioja kitchen',
                type: 'image',
                src: '/houses/rioja/kitchen.jpg',
                order: 3
            },
            {
                name: 'dining',
                title: 'Rioja dining room',
                type: 'image',
                src: '/houses/rioja/dining.jpg',
                order: 4
            },
            {
                name: 'master',
                title: 'Rioja master bedroom',
                type: 'image',
                src: '/houses/rioja/bedroom 2.jpg',
                order: 5
            },
            {
                name: 'balcony 1',
                title: 'Rioja Balcony 1',
                type: 'image',
                src: '/houses/rioja/balcony 1.jpg',
                order: 6
            },
            {
                name: 'balcony 2',
                title: 'Rioja Balcony 2',
                type: 'image',
                src: '/houses/rioja/balcony 2.jpg',
                order: 7
            },
            {
                name: 'back',
                title: 'Rioja size',
                type: 'image',
                src: '/houses/rioja/back.jpg',
                order: 8
            }
        ],
        livingArea: 179,
        designs: [
            {
                id: 'G',
                name: 'Ground Floor',
                areas: [
                    {
                        name: 'Garage',
                        isInternal: false,
                        length: 5.9,
                        width: 3.0
                    },
                    {
                        name: 'Bedroom 4',
                        isInternal: true,
                        length: 3.3,
                        width: 2.8
                    },
                    {
                        name: 'Bathroom',
                        isInternal: true,
                        length: 2.2,
                        width: 1.9
                    }
                ],
                floorPlan: '/houses/rioja/floorplan-gf.png'
            },
            {
                id: '1',
                name: 'First Floor',
                areas: [
                    {
                        name: 'Lounge',
                        isInternal: true,
                        length: 4.6,
                        width: 3.6
                    },
                    {
                        name: 'Kitchen',
                        isInternal: true,
                        length: 4.6,
                        width: 3.0
                    },
                    {
                        name: 'Dining',
                        isInternal: true,
                        length: 3.7,
                        width: 2.5
                    }
                ],
                floorPlan: '/houses/rioja/floorplan-ff.png'
            },
            {
                id: '2',
                name: 'Second Floor',
                areas: [
                    {
                        name: 'Master Bedroom',
                        isInternal: true,
                        length: 4.6,
                        width: 3.6
                    },
                    {
                        name: 'En-suite',
                        isInternal: true,
                        length: 2.4,
                        width: 1.5
                    },
                    {
                        name: 'Bedroom 2',
                        isInternal: true,
                        length: 4.65,
                        width: 3.3
                    },
                    {
                        name: 'En-suite',
                        isInternal: true,
                        length: 2.4,
                        width: 1.5
                    }
                ],
                floorPlan: '/houses/rioja/floorplan-sf.png'
            },
            {
                id: '3',
                name: 'Third Floor',
                areas: [
                    {
                        name: 'Bedroom 3',
                        isInternal: true,
                        length: 4.65,
                        width: 3.0
                    },
                    {
                        name: 'Shower Room',
                        isInternal: true,
                        length: 2.3,
                        width: 1.5
                    },
                    {
                        name: 'Sun lounge',
                        isInternal: true,
                        length: 3.6,
                        width: 2.6
                    },
                    {
                        name: 'Terrace',
                        isInternal: false,
                        length: 4.6,
                        width: 4.3
                    }
                ],
                floorPlan: '/houses/rioja/floorplan-tf.png'
            }
        ],
        specification: [
            {
                name: 'Bathrooms / en-suites',
                details: [
                    'White china with chrome fittings',
                    'Mains pressure shower in en-suite',
                    'Chrome finish ‘ladder style’ heated towel rail',
                    'Choice of ceramic flooring',
                    'Choice of wall tiling',
                    'Down lighters',
                    'Shaver point'
                ]
            },
            {
                name: 'Kitchen',
                details: [
                    'Hand finished bespoke modern',
                    'fitted kitchens',
                    'Quartz worktop surfaces',
                    'Stainless steel oven, ceramic hob & glass curnved chimney hood',
                    'Integrated dishwasher',
                    'washer/dryer',
                    'fridge-freezer',
                    'microwave',
                    'Down lighters',
                    'Choice of ceramic flooring'
                ]
            },
            {
                name: 'Electrical',
                details: [
                    'Telephone and TV points in lounge and master bedroom',
                    'Mains smoke detectors',
                    'Polished chrome sockets and switches'
                ]
            },
            {
                name: 'External Finishes',
                details: [
                    '1.8 Close board fencing - only when applicable',
                    'Brick driveway'
                ]
            },
            {
                name: 'Interior Finishes',
                details: [
                    'High performance double glazed windows throughout',
                    'Walls finished in natural calico with white ceilings',
                    'Polished chrome door furniture',
                    'Built in wardrobes to all master bedrooms',
                    'Sprinkler system'
                ]
            }
        ],
        plots: [
            {
                id: '1',
                plot: '1',
                price: '395000',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '2',
                plot: '2',
                price: '385000',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '5',
                plot: '5',
                houseTypes: 'the-rioja',
                price: '385000',
                development: 'princes-whard',
                phase: '1',
                status: 'Available'
            },
            {
                id: '6',
                plot: '6',
                houseTypes: 'the-rioja',
                price: '390000',
                development: 'princes-whard',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '7',
                plot: '7',
                houseTypes: 'the-rioja',
                price: '395000',
                development: 'princes-whard',
                phase: '1',
                status: 'Reserved'
            },
            {
                id: '10',
                plot: '10',
                houseTypes: 'the-rioja',
                price: '385000',
                development: 'princes-whard',
                phase: '1',
                status: 'Available'
            },
            {
                id: '11',
                plot: '11',
                houseTypes: 'the-rioja',
                price: '385000',
                development: 'princes-whard',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '12',
                plot: '12',
                houseTypes: 'the-rioja',
                price: '385000',
                development: 'princes-whard',
                phase: '1',
                status: 'Reserved'
            },
            {
                id: '15',
                plot: '15',
                houseTypes: 'the-rioja',
                price: '385000',
                development: 'princes-whard',
                phase: '1',
                status: 'Available'
            },
            {
                id: '16',
                plot: '16',
                houseTypes: 'the-rioja',
                price: '395000',
                development: 'princes-whard',
                phase: '1',
                status: 'Available'
            }
        ]
    },
    {
        id: 'the-merlot',
        name: 'The Merlot',
        route: 'the-merlot',
        development: 'princes-wharf',
        keyFacts: [
            '3 bedroom',
            '1 Living',
            '3 bathroom',
            'Garage',
            'Courtyard'
        ],
        icon: '',
        bedrooms: 3,
        numberAvailable: 0,
        minPrice: 0,
        short:
            'A modern, spacious three bedroom home spread over three floors.',
        description:
            '<b>Introducing The Merlot:</b> A modern, spacious three bedroom home spread over three floors. The ground floor includes a double bedroom, cloakroom and access into the integral garage with some plots having access to a private garden. On the first floor there’s a spacious open plan kitchen/dining space and lounge, whilst the second floor features the Master en-suite and further bedroom along with a family bathroom. All floors are accessed via a central staircase.',
        brochure: 'The Merlot.pdf',
        cardImage: '/houses/merlot/The merlot.jpg',
        media: [
            {
                name: 'the merlot',
                title: 'Merlot front 1',
                type: 'image',
                src: '/houses/merlot/media/merlot 1.jpg',
                order: 1
            },
            {
                name: 'the merlot',
                title: 'Merlot front 2',
                type: 'image',
                src: '/houses/merlot/media/merlot 2.jpg',
                order: 2
            },
            {
                name: 'the merlot',
                title: 'Merlot front 3',
                type: 'image',
                src: '/houses/merlot/media/merlot 3.jpg',
                order: 3
            }
        ],
        livingArea: 126,
        designs: [
            {
                id: 'G',
                name: 'Ground Floor',
                areas: [
                    {
                        name: 'Garage',
                        isInternal: false,
                        length: 6.02,
                        width: 3.08
                    },
                    {
                        name: 'Bedroom 3',
                        isInternal: true,
                        length: 3.77,
                        width: 3.34
                    },
                    {
                        name: 'WC',
                        isInternal: true,
                        length: 1.4,
                        width: 1.36
                    }
                ],
                floorPlan: '/houses/merlot/floorplan-gf.png'
            },
            {
                id: '1',
                name: 'First Floor',
                areas: [
                    {
                        name: 'Lounge',
                        isInternal: true,
                        length: 3.77,
                        width: 3.34
                    },
                    {
                        name: 'Kitchen/Dining',
                        isInternal: true,
                        length: 6.02,
                        width: 3.08
                    }
                ],
                floorPlan: '/houses/merlot/floorplan-ff.png'
            },
            {
                id: '2',
                name: 'Second Floor',
                areas: [
                    {
                        name: 'Master Bedroom',
                        isInternal: true,
                        length: 4.25,
                        width: 3.37
                    },
                    {
                        name: 'En-suite',
                        isInternal: true,
                        length: 2.18,
                        width: 1.65
                    },
                    {
                        name: 'Bedroom 2',
                        isInternal: true,
                        length: 3.77,
                        width: 3.34
                    },
                    {
                        name: 'Bathroom',
                        isInternal: true,
                        length: 3.34,
                        width: 1.63
                    }
                ],
                floorPlan: '/houses/merlot/floorplan-sf.png'
            }
        ],
        specification: [
            {
                name: 'Bathrooms / en-suites',
                details: [
                    'White china with chrome fittings',
                    'Mains pressure shower in en-suite',
                    'Chrome finish ‘ladder style’ heated towel rail',
                    'Choice of ceramic flooring',
                    'Choice of wall tiling',
                    'Down lighters',
                    'Shaver point'
                ]
            },
            {
                name: 'Kitchen',
                details: [
                    'Hand finished bespoke modern',
                    'fitted kitchens',
                    'Quartz worktop surfaces',
                    'Stainless steel oven, ceramic hob & glass curnved chimney hood',
                    'Integrated dishwasher',
                    'washer/dryer',
                    'fridge-freezer',
                    'microwave',
                    'Down lighters',
                    'Choice of ceramic flooring'
                ]
            },
            {
                name: 'Electrical',
                details: [
                    'Telephone and TV points in lounge and master bedroom',
                    'Mains smoke detectors',
                    'Polished chrome sockets and switches'
                ]
            },
            {
                name: 'External Finishes',
                details: [
                    '1.8 Close board fencing - only when applicable',
                    'Brick driveway'
                ]
            },
            {
                name: 'Interior Finishes',
                details: [
                    'High performance double glazed windows throughout',
                    'Walls finished in natural calico with white ceilings',
                    'Polished chrome door furniture',
                    'Built in wardrobes to all master bedrooms',
                    'Sprinkler system'
                ]
            }
        ],
        plots: [
            {
                id: '17',
                plot: '17',
                price: '250000',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '18',
                plot: '18',
                price: '250000',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '19',
                plot: '19',
                price: '250000',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '20',
                plot: '20',
                price: '250000',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '21',
                plot: '21',
                price: '250000',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '22',
                plot: '2',
                price: '250000',
                phase: '1',
                status: 'Sold'
            }
        ]
    },
    {
        id: 'the-shiraz',
        name: 'The Shiraz',
        route: 'the-shiraz',
        development: 'princes-wharf',
        keyFacts: [
            '3 bedroom',
            '1 Living',
            '2 bathroom',
            'Garage',
            'Balcony',
            'Courtyard'
        ],
        icon: '',
        bedrooms: 3,
        numberAvailable: 0,
        minPrice: 0,
        short:
            'A modern and spacious detached three bedroom home is spread over three floors.',
        description:
            '<b>Introducing The Shiraz:</b> This modern and spacious detached three bedroom home is spread over three floors. The ground floor includes the master en-suite bedroom, cloakroom and access into the integral garage as well as to the garden from the patio doors. On the first floor there’s a spacious split kitchen/dining and lounge with patio doors leading to the terrace. The second floor features two further double bedrooms along with a family bathroom.',
        brochure: 'The Shiraz.pdf',
        cardImage: '/houses/shiraz/the shiraz.jpg',
        media: [
            {
                name: 'the shiraz 1',
                title: 'Shiraz back',
                type: 'image',
                src: '/houses/shiraz/media/shiraz 1.jpg',
                order: 1
            },
            {
                name: 'the shiraz 2',
                title: 'Shiraz front',
                type: 'image',
                src: '/houses/shiraz/media/shiraz 2.jpg',
                order: 2
            },
            {
                name: 'the shiraz 3',
                title: 'Shiraz balcony',
                type: 'image',
                src: '/houses/shiraz/media/shiraz 3.jpg',
                order: 3
            }
        ],
        livingArea: 137,
        designs: [
            {
                id: 'G',
                name: 'Ground Floor',
                areas: [
                    {
                        name: 'Garage',
                        isInternal: false,
                        length: 6.02,
                        width: 3.09
                    },
                    {
                        name: 'Master Bedroom',
                        isInternal: true,
                        length: 4.04,
                        width: 3.35
                    },
                    {
                        name: 'Dressing Room',
                        isInternal: true,
                        length: 2.23,
                        width: 1.5
                    },
                    {
                        name: 'En-suite',
                        isInternal: true,
                        length: 2.23,
                        width: 1.37
                    },
                    {
                        name: 'WC',
                        isInternal: true,
                        length: 2.29,
                        width: 0.93
                    }
                ],
                floorPlan: '/houses/shiraz/floorplan-gf.png'
            },
            {
                id: '1',
                name: 'First Floor',
                areas: [
                    {
                        name: 'Lounge',
                        isInternal: true,
                        length: 4.69,
                        width: 3.77
                    },
                    {
                        name: 'Kitchen/Dining',
                        isInternal: true,
                        length: 4.13,
                        width: 4.04
                    },
                    {
                        name: 'Terrace',
                        isInternal: false,
                        length: 4.91,
                        width: 2.01
                    }
                ],
                floorPlan: '/houses/shiraz/floorplan-ff.png'
            },
            {
                id: '2',
                name: 'Second Floor',
                areas: [
                    {
                        name: 'Bedroom 2',
                        isInternal: true,
                        length: 4.04,
                        width: 2.69
                    },
                    {
                        name: 'Bedroom 3',
                        isInternal: true,
                        length: 3.82,
                        width: 3.77
                    },
                    {
                        name: 'Bathroom',
                        isInternal: true,
                        length: 2.2,
                        width: 2.51
                    }
                ],
                floorPlan: '/houses/shiraz/floorplan-sf.png'
            }
        ],
        specification: [
            {
                name: 'Bathrooms / en-suites',
                details: [
                    'White china with chrome fittings',
                    'Mains pressure shower in en-suite',
                    'Chrome finish ‘ladder style’ heated towel rail',
                    'Choice of ceramic flooring',
                    'Choice of wall tiling',
                    'Down lighters',
                    'Shaver point'
                ]
            },
            {
                name: 'Kitchen',
                details: [
                    'Hand finished bespoke modern',
                    'fitted kitchens',
                    'Quartz worktop surfaces',
                    'Stainless steel oven, ceramic hob & glass curnved chimney hood',
                    'Integrated dishwasher',
                    'washer/dryer',
                    'fridge-freezer',
                    'microwave',
                    'Down lighters',
                    'Choice of ceramic flooring'
                ]
            },
            {
                name: 'Electrical',
                details: [
                    'Telephone and TV points in lounge and master bedroom',
                    'Mains smoke detectors',
                    'Polished chrome sockets and switches'
                ]
            },
            {
                name: 'External Finishes',
                details: [
                    '1.8 Close board fencing - only when applicable',
                    'Brick driveway'
                ]
            },
            {
                name: 'Interior Finishes',
                details: [
                    'High performance double glazed windows throughout',
                    'Walls finished in natural calico with white ceilings',
                    'Polished chrome door furniture',
                    'Built in wardrobes to all master bedrooms',
                    'Sprinkler system'
                ]
            }
        ],
        plots: [
            {
                id: '23',
                plot: '23',
                price: '295000',
                phase: '1',
                status: 'Sold'
            }
        ]
    },
    {
        id: 'the-bordeaux',
        name: 'The Bordeaux',
        route: 'the-bordeaux',
        development: 'princes-wharf',
        keyFacts: [
            '3 bedroom',
            '1 Living',
            '3 bathroom',
            'Garage',
            'Sun lounge'
        ],
        icon: '',
        bedrooms: 3,
        numberAvailable: 0,
        minPrice: 0,
        short: 'A modern, spacious three bedroom home spread over four floors.',
        description:
            'Introducing The Bordeaux: A modern, spacious three bedroom home spread over four floors. The ground floor includes a double bedroom, family bathroom and access into the integral garage. On the first floor there’s a spacious open plan kitchen/dining space and lounge, whilst the second floor features the Master and further bedroom, both of which are en-suite. All floors are accessed via a central staircase which leads to your own private sun lounge and rooftop terrace.',
        brochure: 'The Bordeaux.pdf',
        cardImage: '/houses/bordeaux/the bordeaux.jpg',
        media: [
            {
                name: 'the bordeaux 1',
                title: 'The Bordeaux 1',
                type: 'image',
                src: '/houses/bordeaux/media/bordeaux 1.jpg',
                order: 1
            },
            {
                name: 'the bordeaux 2',
                title: 'The Bordeaux 2',
                type: 'image',
                src: '/houses/bordeaux/media/bordeaux 2.jpg',
                order: 2
            },
            {
                name: 'the bordeaux 3',
                title: 'The Bordeaux 3',
                type: 'image',
                src: '/houses/bordeaux/media/bordeaux 3.jpg',
                order: 3
            }
        ],
        livingArea: 147,
        designs: [
            {
                id: 'G',
                name: 'Ground Floor',
                areas: [
                    {
                        name: 'Garage',
                        isInternal: false,
                        length: 5.99,
                        width: 3.08
                    },
                    {
                        name: 'Bedroom 3',
                        isInternal: true,
                        length: 3.25,
                        width: 3.06
                    },
                    {
                        name: 'Bathroom',
                        isInternal: true,
                        length: 2.2,
                        width: 1.98
                    }
                ],
                floorPlan: '/houses/bordeaux/floorplan-gf.png'
            },
            {
                id: '1',
                name: 'First Floor',
                areas: [
                    {
                        name: 'Lounge',
                        isInternal: true,
                        length: 4.65,
                        width: 3.06
                    },
                    {
                        name: 'Kitchen',
                        isInternal: true,
                        length: 4.62,
                        width: 2.36
                    },
                    {
                        name: 'Dining',
                        isInternal: true,
                        length: 3.75,
                        width: 2.47
                    }
                ],
                floorPlan: '/houses/bordeaux/floorplan-ff.png'
            },
            {
                id: '2',
                name: 'Second Floor',
                areas: [
                    {
                        name: 'Master Bedroom',
                        isInternal: true,
                        length: 4.62,
                        width: 3.06
                    },
                    {
                        name: 'En-suite',
                        isInternal: true,
                        length: 2.46,
                        width: 1.63
                    },
                    {
                        name: 'Bedroom 2',
                        isInternal: true,
                        length: 4.62,
                        width: 2.36
                    },
                    {
                        name: 'En-suite',
                        isInternal: true,
                        length: 2.46,
                        width: 1.76
                    }
                ],
                floorPlan: '/houses/bordeaux/floorplan-sf.png'
            },
            {
                id: '3',
                name: 'Third Floor',
                areas: [
                    {
                        name: 'Sun lounge',
                        isInternal: true,
                        length: 4.6,
                        width: 2.09
                    },
                    {
                        name: 'Terrace',
                        isInternal: false,
                        length: 4.69,
                        width: 4.34
                    }
                ],
                floorPlan: '/houses/bordeaux/floorplan-tf.png'
            }
        ],
        specification: [
            {
                name: 'Bathrooms / en-suites',
                details: [
                    'White china with chrome fittings',
                    'Mains pressure shower in en-suite',
                    'Chrome finish ‘ladder style’ heated towel rail',
                    'Choice of ceramic flooring',
                    'Choice of wall tiling',
                    'Down lighters',
                    'Shaver point'
                ]
            },
            {
                name: 'Kitchen',
                details: [
                    'Hand finished bespoke modern',
                    'fitted kitchens',
                    'Quartz worktop surfaces',
                    'Stainless steel oven, ceramic hob & glass curnved chimney hood',
                    'Integrated dishwasher',
                    'washer/dryer',
                    'fridge-freezer',
                    'microwave',
                    'Down lighters',
                    'Choice of ceramic flooring'
                ]
            },
            {
                name: 'Electrical',
                details: [
                    'Telephone and TV points in lounge and master bedroom',
                    'Mains smoke detectors',
                    'Polished chrome sockets and switches'
                ]
            },
            {
                name: 'External Finishes',
                details: [
                    '1.8 Close board fencing - only when applicable',
                    'Brick driveway'
                ]
            },
            {
                name: 'Interior Finishes',
                details: [
                    'High performance double glazed windows throughout',
                    'Walls finished in natural calico with white ceilings',
                    'Polished chrome door furniture',
                    'Built in wardrobes to all master bedrooms',
                    'Sprinkler system'
                ]
            }
        ],
        plots: [
            {
                id: '3',
                plot: '3',
                price: '299000',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '4',
                plot: '4',
                price: '299000',
                phase: '1',
                status: 'Reserved'
            },
            {
                id: '8',
                plot: '8',
                price: '299000',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '9',
                plot: '9',
                price: '299000',
                phase: '1',
                status: 'Sold'
            },

            {
                id: '13',
                plot: '13',
                price: '299000',
                phase: '1',
                status: 'Sold'
            },
            {
                id: '14',
                plot: '14',
                price: '299000',
                phase: '1',
                status: 'Sold'
            }
        ]
    }
]

const liveDevs = []
developments.forEach(dev => {
    const id = dev.id
    const count = houseTypes.filter(item => {
        return item.development === id
    }).length

    dev.housesAvailable = count
    if (count > 0) {
        liveDevs.push(dev.id)
    }
})

houseTypes.forEach(house => {
    let minPrice = 0
    let available = 0
    house.plots.forEach((plot, i) => {
        if (i === 0) {
            minPrice = plot.price
        }
        if (plot.status === 'Available') {
            available += 1
            if (plot.price < minPrice) {
                minPrice = plot.price
            }
        }

        house.live = liveDevs.indexOf(house.development) >= 0
    })

    house.numberAvailable = available
    house.minPrice = minPrice
})

const policies = [
    {
        id: 'cookie',
        title: 'Cookies',
        html:
            '<h2>What Are Cookies</h2><p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or <em>break</em> certain elements of the sites functionality.</p><p>For more general information on cookies see the <a href="https://en.wikipedia.org/wiki/HTTP_cookie">Wikipedia article on HTTP Cookies.</a></p><h2>How We Use Cookies</h2><p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p><h2>Disabling Cookies</h2><p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p><h2>The Cookies We Set</h2><ul><li><b>Email newsletters related cookies</b><p>This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</p></li><li><b>Forms related cookies</b><p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p></li><li><b>Site preferences cookies</b><p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p></li></ul><h2>Third Party Cookies</h2><p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p><p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p><p>For more information on <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">Google Analytics cookies.</a></p><h2>More Information</h2><p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren\'t sure whether you need or not it\'s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. </p><p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p><ul><li>Email: <a href="emailto:enquries@hale.homes">enquries@hale.homes</a></li><li>Phone: <a href="tel:+441792462877">+44 (0)1792 462 877</a></li></ul>'
    },
    {
        id: 'privacy',
        title: 'Privacy',
        html:
            "<p>This policy sets out how we handle the Personal Data of our customers, suppliers, employees, workers and other third parties. The below definitions apply to this policy:</p><ul><li><b>Data Controller</b>: the person or organisation that determines when, why and how to process Personal Data. It is responsible for establishing practices and policies in line with the GDPR. We are the Data Controller of all Personal Data relating to our Company and Personal Data used in our business for our own commercial purposes.</li><li><b>Data Protection Officer (DPO)</b>: the person appointed by us with responsibility for data protection compliance.<p>That person is <b>Ruth Jones</b>.</p></li><li><b>Data Subject</b>: a living, identified or identifiable individual about whom we hold Personal Data.</li><li><b>General Data Protection Regulation (GDPR)</b>: the General Data Protection Regulation ((EU) 2016/679).</li><li><b>Personal Data</b>: any information identifying a Data Subject or information relating to a Data Subject that we can identify (directly or indirectly) from that data alone or in combination with other identifiers we possess or can reasonably access. Personal Data includes Sensitive Personal Data but excludes anonymous data or data that has had the identity of an individual permanently removed. Personal data can be factual (for example, a name, email address, location or date of birth) or an opinion about that person's actions or behaviour.</li><li><b>Personal Data Breach</b>: any act or omission that compromises the security, confidentiality, integrity or availability of Personal Data or the physical, technical, administrative or organisational safeguards that we or our third-party service providers put in place to protect it. The loss, or unauthorised access, disclosure or acquisition, of Personal Data is a Personal Data Breach.</li><li><b>Processing or Process</b>: any activity that involves the use of Personal Data. It includes obtaining, recording or holding the data, or carrying out any operation or set of operations on the data including organising, amending, retrieving, using, disclosing, erasing or destroying it. Processing also includes transmitting or transferring Personal Data to third parties.</li><li><b>Sensitive Personal Data</b>: information revealing racial or ethnic origin, political opinions, religious or similar beliefs, trade union membership, physical or mental health conditions, sexual life, sexual orientation, biometric or genetic data, and Personal Data relating to criminal offences and convictions.</li></ul><p>This policy applies to all Personal Data we Process regardless of the media on which that data is stored or whether it relates to past or present employees, workers, customers, clients or supplier contacts, shareholders, website users or any other Data Subject.</p><p>This policy applies to all staff. You must read, understand and comply with this policy when Processing Personal Data on our behalf. This policy sets out what we expect from you. Your compliance with this policy is mandatory. Any breach of this policy may result in disciplinary action.<h2>Scope</h2><p>We recognise that the correct and lawful treatment of Personal Data will maintain confidence in the organisation and will provide for successful business operations. Protecting the confidentiality and integrity of Personal Data is a critical responsibility that we take seriously at all times.</p><p>The DPO is responsible for overseeing this policy and any queries you have regarding this policy should be directed to the DPO.</p><h2>Lawfulness and fairness</h2><p>Personal data must be Processed lawfully, fairly and in a transparent manner in relation to the Data Subject.</p><p>The GDPR allows Processing for specific purposes, some of which are set out below:</p><ul><li>(a)  the Data Subject has given his or her consent;</li><li>(b)  the Processing is necessary for the performance of a contract with the Data Subject;</li><li>(c)   to meet our legal compliance obligations;</li><li>(d)  to pursue our legitimate interests for purposes where they are not overridden because the Processing prejudices the interests or fundamental rights and freedoms of Data Subjects.</li></ul><p>You must identify and document the legal ground being relied on for each Processing activity.</p><h2>Consent</h2><p>A Data Controller must only process Personal Data on the basis of one or more of the lawful bases set out in the GDPR, which include consent.</p><p>A Data Subject consents to Processing of their Personal Data if they indicate agreement clearly either by a statement or positive action to the Processing. Consent requires affirmative action so silence, pre-ticked boxes or inactivity are unlikely to be sufficient. If consent is given in a document which deals with other matters, then the consent must be kept separate from those other matters.</p><p>Data Subjects must be easily able to withdraw consent to Processing at any time and withdrawal must be promptly honoured. Consent may need to be refreshed if you intend to Process Personal Data for a different and incompatible purpose which was not disclosed when the Data Subject first consented.<p><p>Unless we can rely on another legal basis of Processing, explicit consent is usually required for Processing Sensitive Personal Data.<p><p>You will need to evidence consent captured and keep records of all consents so that the Company can demonstrate compliance with consent requirements.<p><h2>Transparency (notifying data subjects)</h2><p>The GDPR requires us to provide detailed, specific information to Data Subjects depending on whether the information was collected directly from Data Subjects or from elsewhere. Such information must be provided through appropriate notices which must be concise, transparent, intelligible, easily accessible, and in clear and plain language so that a Data Subject can easily understand them.</p><p>Whenever we collect Personal Data directly from Data Subjects we must provide the Data Subject with all the information required by the GDPR including the identity of the Data Controller and DPO, how and why we will use, process, disclose, protect and retain that Personal Data through a notice which must be presented when the Data Subject first provides the Personal Data.</p><p>When Personal Data is collected indirectly you must provide the Data Subject with all the information required by the GDPR as soon as possible after collecting/receiving the data. You must also check that the Personal Data was collected by the third party in accordance with the GDPR and on a basis which contemplates our proposed Processing of that Personal Data.</p><h2>Purpose limitation</h2><p>Personal Data must be collected only for specified, explicit and legitimate purposes. It must not be further Processed in any manner incompatible with those purposes.</p><p>You cannot use Personal Data for new, different or incompatible purposes from that disclosed when it was first obtained unless you have informed the Data Subject of the new purposes and they have consented where necessary.</p><h2>Data minimisation</h2><p>Personal Data must be adequate, relevant and limited to what is necessary in relation to the purposes for which it is Processed.</p><p>You may only Process Personal Data when performing your job if it requires it. You cannot Process Personal Data for any reason unrelated to your job.</p><p>You may only collect Personal Data that you require for your job: do not collect excessive data. Ensure any Personal Data collected is adequate and relevant for the intended purposes.<p><p>You must ensure that when Personal Data is no longer needed for specified purposes, it is deleted or anonymised.</p><h2>Accuracy</h2><p>Personal Data must be accurate and, where necessary, kept up to date. It must be corrected or deleted without delay when inaccurate.</p><p>You will ensure that the Personal Data we use and hold is accurate, complete, kept up to date and relevant to the purpose for which we collected it. You must check the accuracy of any Personal Data at the point of collection and at regular intervals afterwards. You must take all reasonable steps to destroy or amend inaccurate or out-of-date Personal Data.</p><h2>Storage limitation</h2><p>Personal Data must not be kept in an identifiable form for longer than is necessary for the purposes for which the data is processed.</p><p>You must not keep Personal Data in a form which permits the identification of the Data Subject for longer than needed for the legitimate business purpose or purposes for which we originally collected it including for the purpose of satisfying any legal, accounting or reporting requirements.</p><p>The Company will maintain retention policies and procedures to ensure Personal Data is deleted after a reasonable time for the purposes for which it was being held, unless a law requires such data to be kept for a minimum time.</p><p>You will take all reasonable steps to destroy or erase from our systems all Personal Data that we no longer require in accordance with all the Company's applicable records retention schedules and policies. This includes requiring third parties to delete such data where applicable.</p><p>You will ensure Data Subjects are informed of the period for which data is stored and how that period is determined in any applicable notice.</p><h2>Protecting Personal Data</h2><p>Personal Data must be secured by appropriate technical and organisational measures against unauthorised or unlawful Processing, and against accidental loss, destruction or damage.</p><p>We will develop, implement and maintain safeguards appropriate to our size, scope and business, our available resources, the amount of Personal Data that we own or maintain on behalf of others and identified risks (including use of encryption where applicable). We will evaluate and test the effectiveness of those safeguards. You are responsible for protecting the Personal Data we hold. You must implement reasonable and appropriate security measures against unlawful or unauthorised Processing of Personal Data and against the accidental loss of, or damage to, Personal Data. You must exercise particular care in protecting Sensitive Personal Data from loss and unauthorised access, use or disclosure.</p><p>You must follow all procedures and technologies we put in place to maintain the security of all Personal Data from the point of collection to the point of destruction. You may only transfer Personal Data to third-party service providers who agree to comply with the required policies and procedures and who agree to put adequate measures in place, as requested.</p><p>You must maintain data security by protecting the confidentiality, integrity and availability of the Personal Data, defined as follows:</p><ul><li>(a)  Confidentiality means that only people who have a need to know and are authorised to use the Personal Data can access it.</li><li>(b)  Integrity means that Personal Data is accurate and suitable for the purpose for which it is processed.</li><li>(c)   Availability means that authorised users are able to access the Personal Data when they need it for authorised purposes.</li></ul><h2>Reporting a Personal Data Breach</h2><p>The GDPR requires us to notify Personal Data Breaches to the regulator and, in certain instances, the Data Subject.</p><p>We have put in place procedures to deal with any suspected Personal Data Breach and will notify Data Subjects or any applicable regulator where we are legally required to do so.<p><p>If you know or suspect that a Personal Data Breach has occurred, do not attempt to investigate the matter yourself. Immediately contact the DPO and follow their instructions. You should preserve all evidence relating to the potential Personal Data Breach.</p><h2>Transfer limitation</h2><p>The GDPR restricts data transfers to countries outside the EEA (the EU countries and Iceland, Lichtenstein and Norway) in order to ensure that the level of data protection afforded to individuals by the GDPR is not undermined.</p><p>You are not permitted to transfer Personal Data outside the EEA and should you be required to do so as part of your job you should seek guidance first from the DPO.</p><h2>Data Subject's rights and requests</h2><p>Data Subjects have rights when it comes to how we handle their Personal Data. These include rights to:</p><ul><li>(a)  withdraw consent to Processing at any time;</li><li>(b)  receive certain information about Processing activities;</li><li>(c)   request access to their Personal Data that we hold;</li><li>(d)  prevent our use of their Personal Data for direct marketing purposes;</li><li>(e)  ask us to erase Personal Data if it is no longer necessary in relation to the purposes for which it was collected or Processed or to rectify inaccurate data or to complete incomplete data;</li><li>(f)    restrict Processing in specific circumstances;</li><li>(g)  challenge Processing which has been justified on the basis of our legitimate interests or in the public interest;</li><li>(h)  request a copy of an agreement under which Personal Data is transferred outside of the EEA;</li><li>(i)    prevent Processing that is likely to cause damage or distress to the Data Subject or anyone else;</li><li>(j)    be notified of a Personal Data Breach which is likely to result in high risk to their rights and freedoms; and</li><li>(k)   make a complaint to the supervisory authority.</li></ul><p>You must verify the identity of an individual requesting data under any of the rights listed above.</p><p>You must immediately forward any Data Subject request you receive to the DPO.</p><h2>Accountability</h2><p>As a Data Controller we must implement appropriate technical and organisational measures in an effective manner, to ensure compliance with data protection principles. We are responsible for, and must be able to demonstrate, compliance with the data protection principles.</p><h2>Record keeping</h2><p>The GDPR requires us to keep full and accurate records of all our data Processing activities.</p><p>You must keep and maintain accurate corporate records reflecting our Processing including records of Data Subjects' consents and procedures for obtaining consents.</p><p>These records should include, at a minimum, the name and contact details of the Data Controller and the DPO, clear descriptions of the Personal Data types, Data Subject types, Processing activities, Processing purposes, third-party recipients of the Personal Data, Personal Data storage locations, Personal Data transfers, the Personal Data's retention period and a description of the security measures in place.</p><h2>Privacy By Design and Data Protection Impact Assessment</h2><p>We are required to implement privacy by design measures when Processing Personal Data by implementing appropriate technical and organisational measures in an effective manner, to ensure compliance with data privacy principles.</p><p>You must assess what privacy by design measures can be implemented on all programs/systems/processes that Process Personal Data by taking into account the following:</p><ul><li>(a)  the state of the art;</li><li>(b)  the cost of implementation;</li><li>(c)   the nature, scope, context and purposes of Processing; and</li><li>(d)  the risks of varying likelihood and severity for rights and freedoms of Data Subjects posed by the Processing.</li></ul><p>Data controllers must also conduct data privacy impact assessments (DPIA) in respect to high risk Processing. A DPIA are tools and assessments used to identify and reduce risks of a data processing activity.</p><p>You should conduct a DPIA (and discuss your findings with the DPO) when implementing major system or business change programs involving the Processing of Personal Data.</p><p>For more information about what should be included in a DPIA please contact the DPO.</p><h2>Direct marketing</h2><p>We are subject to certain rules and privacy laws when marketing to our customers.</p><p>The right to object to direct marketing must be explicitly offered to the Data Subject in an intelligible manner so that it is clearly distinguishable from other information.</p><p>A Data Subject's objection to direct marketing must be promptly honoured. If a customer opts out at any time, their details should be suppressed as soon as possible. Suppression involves retaining just enough information to ensure that marketing preferences are respected in the future.</p><h2>Sharing Personal Data</h2><p>Generally we are not allowed to share Personal Data with third parties unless certain safeguards and contractual arrangements have been put in place.</p><p>You may only share the Personal Data we hold with another employee or agent if the recipient has a job-related need to know the information and the transfer complies with GDPR.</p><p>You may only share the Personal Data we hold with third parties, such as our service providers if:</p><ul><li>(a)  they have a need to know the information for the purposes of providing the contracted services;</li><li>(b)  sharing the Personal Data complies with the notice provided to the Data Subject and, if required, the Data Subject's consent has been obtained;</li><li>(c)   the third party has agreed to comply with the required data security standards, policies and procedures and put adequate security measures in place;</li><li>(d)  the transfer complies with any applicable cross border transfer restrictions; and</li><li>(e)  a fully executed written contract that contains GDPR approved third party clauses has been obtained.</li></ul>"
    }
]

const settings = [
    {
        id: 'prices',
        min: [
            '£100,000',
            '£110,000',
            '£120,000',
            '£130,000',
            '£140,000',
            '£150,000',
            '£160,000',
            '£170,000',
            '£180,000',
            '£190,000',
            '£200,000',
            '£210,000',
            '£220,000',
            '£230,000',
            '£240,000',
            '£250,000',
            '£300,000',
            '£350,000',
            '£400,000',
            '£450,000',
            '£500,000'
        ],
        max: [
            '£110,000',
            '£120,000',
            '£130,000',
            '£140,000',
            '£150,000',
            '£160,000',
            '£170,000',
            '£180,000',
            '£190,000',
            '£200,000',
            '£210,000',
            '£220,000',
            '£230,000',
            '£240,000',
            '£250,000',
            '£300,000',
            '£350,000',
            '£400,000',
            '£450,000',
            '£500,000',
            '£700,000',
            '£800,000',
            '£900,000',
            '£1,000,000'
        ]
    },
    {
        id: 'contacts',
        phone: {
            display: '+44 (0)1792 462 877',
            link: 'tel:+441792462877',
            target: '',
            icon: 'phone-square',
            order: 1
        },
        email: {
            display: 'info@hale.homes',
            link: 'emailto:info@hale.homes',
            target: '',
            icon: 'envelope-square',
            order: 2
        },
        facebook: {
            display: 'facebook',
            link: 'https://www.facebook.com/HaleHomesWales/',
            target: '_blank',
            icon: ['fab', 'facebook'],
            order: 3
        },
        twitter: {
            display: 'twitter',
            link: 'https://twitter.com/HaleHomesWales',
            target: '_blank',
            icon: ['fab', 'twitter-square'],
            order: 4
        }
    }
]
const seedData = () => {
    const variables = [
        {
            collection: 'pages',
            data: pages
        },
        {
            collection: 'developments',
            data: developments
        },
        {
            collection: 'types',
            data: houseTypes
        },
        {
            collection: 'policies',
            data: policies
        },
        {
            collection: 'settings',
            data: settings
        }
    ]
    // Get a reference to the database service
    const db = admin.firestore()
    variables.forEach(v => {
        v.data.forEach(d => {
            console.log('uploading ' + v.collection + ': ' + d.id) //eslint-disable-line
            db.collection(v.collection)
                .doc(d.id)
                .set(d)
        })
    })
}

seedData()
