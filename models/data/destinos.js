export let destinos = [
    {
        id: "bariloche",
        title: "Bariloche",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://anduma.tur.ar/wp-content/uploads/2021/04/faf36f_323792ea108e49378282fe19bc560c51_mv2.jpg",
        packages: [
            {
                title: "Bariloche",
                plane: "Available",
                time: [
                    {
                        start_date: "08/12/2023",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "15/12/2023" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 495,
                hotel: [
                    {
                        check_in: "09/12/2023 - 07:00 am",
                        check_out: "16/12/2023 - 10:00 am"
                    }
                ]
            },
            {
                train: "Not Available",
                time: {
                    start_date: " Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
            {
                bus: "Available",
                time: {
                    start_date: "20/12/2023",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "25/12/2023" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 340,
                hotel: "Not Available"
            },
        ],
        category_id: "Mountains and Adventure Sports",
        seller_id: "raul",
        pages: [
            "https://images.unsplash.com/photo-1617548438104-286c90f80710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyaWxvY2hlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "https://getwalls.io/media/large/2020/07/san-carlos-de-bariloche-hd-4k-wallpapers-for-apple-watch-iphone-large-934416058.jpg",
            "https://anduma.tur.ar/wp-content/uploads/2021/04/faf36f_323792ea108e49378282fe19bc560c51_mv2.jpg",
        ],
        price: 1050,
    },


    {
        id: "Las Cataratas del Iguazú",
        title: "Las Cataratas del Iguazú",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://c4.wallpaperflare.com/wallpaper/447/232/16/iguazu-national-park-south-america-iguazu-river-misiones-wallpaper-preview.jpg",
        packages: [
            {
                title: "Las Cataratas del Iguazú",
                plane: "Available",
                time: [
                    {
                        start_date: "02/02/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "09/02/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 489,
                hotel: [
                    {
                        check_in: "03/02/2024 - 07:00 am",
                        check_out: "10/02/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: " Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Available",
                time: {
                    start_date: "20/02/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "10/02/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 440,
                hotel: [
                    {
                        check_in: "21/02/2024 - 07:00 am",
                        check_out: "21/02/2024 - 10:00 am"
                    }
                ]
            },
        ],
        category_id: "Nature and Wildlife",
        seller_id: "adrian",
        pages: [
            "https://c0.wallpaperflare.com/preview/654/738/493/nature-summer-water-river.jpg",
            "https://i.postimg.cc/BbXRYTHz/shingeki-no-kyojin-001-02.png",
            "https://dailyweb.com.ar/data/img_cont/img_imagenes/img_gr/42711.jpg",
        ],
        price: 500,
    },


    {
        id: "Calafate",
        title: "Calafate",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://viatgesrovira.com/wp-content/uploads/2020/01/CALAFATE.jpg",
        packages: [
            {
                title: "Calafate",
                plane: "Available",
                time: [
                    {
                        start_date: "12/03/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "20/03/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 1098,
                hotel: [
                    {
                        check_in: "13/03/2024 - 07:00 am",
                        check_out: "21/03/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "20/02/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "10/02/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 850,
                hotel: [
                    {
                        check_in: "21/02/2024 - 07:00 am",
                        check_out: "21/02/2024 - 10:00 am"
                    }
                ]
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        category_id: "Mountains and Adventure Sports",
        seller_id: "julia",
        pages: [
            "https://www.wendywutours.com.au/resource/upload/2001/banner-el-calafate.jpg.webp",
            "https://i.ytimg.com/vi/0qe4rStwiHY/maxresdefault.jpg",
            "https://www.infobae.com/new-resizer/81HARaBEGXhTg3SeYG5MRMJ8J18=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/OKNR6K64A5EXREH3LME2OCNQXM.jpg",
        ],
        price: 1200,
    },


    {
        id: "Parque Nacional El Leoncito",
        title: "Parque Nacional El Leoncito",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://1.bp.blogspot.com/-2-6kA3yOl7s/XPfBKGn-SEI/AAAAAAAAG3A/v2YK8ruMUPsCplnd4otTciCFLDh31XATgCPcBGAYYCw/s1600/Parque%2Bnacional%2Bel%2Bleoncito%2Bactividades%2Binformacion%2Btrekking%2Bvisitas.jpg",
        packages: [
            {
                title: "Parque Nacional El Leoncito",
                plane: "Not Available",
                time: [
                    {
                        start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                train: "Available",
                time: {
                    start_date: "22/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "29/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 648,
                hotel: [
                    {
                        check_in: "23/06/2024 - 07:00 am",
                        check_out: "30/06/2024 - 10:00 am"
                    }
                ]
            },

            {
                bus: "Available",
                time: {
                    start_date: "22/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "30/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 568,
                hotel: "Not Available"
            },
        ],
        category_id: "Nature and Wildlife",
        seller_id: "julia",
        pages: [
            "https://cdn-sp.radionacional.com.ar/wp-content/uploads/2019/07/El-leoncito.jpg",
            "https://www.telesoldiario.com/content/bucket/5/414625w850h521c.jpg.webp",
        ],
        price: 700,
    },


    {
        id: "Parque Nacional Chaco",
        title: "Parque Nacional Chaco",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://www.serargentino.com/public/images/2020/07/15947388080-parque_nacional_chaco_casa_guardaparque-773x458.jpg",
        packages: [
            {
                title: "Parque Nacional Chaco",
                plane: "Not Available",
                time: [
                    {
                        start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                train: "Available",
                time: {
                    start_date: "22/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "29/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 648,
                hotel: [
                    {
                        check_in: "23/06/2024 - 07:00 am",
                        check_out: "30/06/2024 - 10:00 am"
                    }
                ]
            },

            {
                bus: "Available",
                time: {
                    start_date: "22/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "30/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 568,
                hotel: "Not Available"
            },
        ],
        category_id: "Nature and Wildlife",
        seller_id: "javier",
        pages: [
            "https://www.industriaambiental.com.ar/images/articulos/19/chaco.jpg",
            "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/DLPWBHNQSFA7NJSWZY4BUTEDPY.jpg", "https://destinonea.com/download/multimedia.normal.94f7a5b27c9eb7dc.656c2070616c6d6172206c6167756e615f6e6f726d616c2e6a7067.jpg"
        ],
        price: 600,
    },


    {
        id: "Puerto Madryn",
        title: "Puerto Madryn",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://millasxelmundo.com/wp-content/uploads/2021/11/img_9476.png",
        packages: [
            {
                title: "Puerto Madryn",
                plane: "Available",
                time: [
                    {
                        start_date: "13/08/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "25/08/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 569,
                hotel: [
                    {
                        check_in: "14/08/2024 - 07:00 am",
                        check_out: "25/08/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Available",
                time: {
                    start_date: "15/07/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "27/07/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 497,
                hotel: [
                    {
                        check_in: "16/07/2024 - 07:00 am",
                        check_out: "28/07/2024 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "javier",
        category_id: "Nature and Wildlife",
        pages: [
            "https://turismo-en-argentina.com/wp-content/uploads/2017/11/0022958511.jpg",
            "https://www.trips-southamerica.com/wp-content/uploads/Whale-watching-sailing-1.jpg"
        ],
        price: 600,
    },


    {
        id: "Palermo",
        title: "Palermo",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://turismo.buenosaires.gob.ar/sites/turismo/files/planetario_agua_1200_2.jpg",
        packages: [
            {
                title: "Palermo",
                plane: "Available",
                time: [
                    {
                        start_date: "07/09/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "24/09/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 589,
                hotel: [
                    {
                        check_in: "08/09/2024 - 07:00 am",
                        check_out: "25/09/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Available",
                time: {
                    start_date: "05/09/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "15/09/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 557,
                hotel: [
                    {
                        check_in: "07/09/2024 - 07:00 am",
                        check_out: "16/09/2024 - 10:00 am"
                    }
                ]
            },

            {
                bus: "Available",
                time: {
                    start_date: "09/09/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "24/09/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 497,
                hotel: [
                    {
                        check_in: "11/09/2024 - 07:00 am",
                        check_out: "25/09/2024 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "javier",
        category_id: "City and Urban Tourism",
        pages: [
            "https://media.a24.com/p/d134afdadd5ff4dbb2a7ffcd1f20aac5/adjuntos/296/imagenes/008/810/0008810835/1200x675/smart/flor-palermojpg.jpg",
            "https://turismo.buenosaires.gob.ar/sites/turismo/files/styles/carousell_atractivo/public/jarin_japones_puente_2_1200.jpg?itok=0HECfrxO"
        ],
        price: 650,
    },


    {
        id: "La Cumbrecita",
        title: "La Cumbrecita",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://i.postimg.cc/xdz8jS3z/lacumbrecita.png",
        packages: [
            {
                title: "La Cumbrecita",
                plane: "Available",
                time: [
                    {
                        start_date: "13/04/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "30/04/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 514,
                hotel: [
                    {
                        check_in: "13/04/2024 - 07:00 am",
                        check_out: "30/04/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Available",
                time: {
                    start_date: "05/08/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "15/08/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 489,
                hotel: [
                    {
                        check_in: "06/08/2024 - 07:00 am",
                        check_out: "16/08/2024 - 10:00 am"
                    }
                ]
            },

            {
                bus: "Available",
                time: {
                    start_date: "15/12/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "02/01/2025" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 457,
                hotel: [
                    {
                        check_in: "16/12/2024 - 07:00 am",
                        check_out: "02/01/2025 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "javier",
        category_id: "Nature and Wildlife",
        pages: [
            "https://media.lacapital.com.ar/p/4d351e29c618e7ea5de0a365b3fde843/adjuntos/203/imagenes/100/030/0100030171/1200x675/smart/78131685jpg.jpg",
            "https://www.lacumbrecita.gob.ar/images/btn/rincon-cascada.jpg"
        ],
        price: 550,
    },


    {
        id: "Termas de Federación",
        title: "Termas de Federación",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://revistauncamino.com.ar/wp-content/uploads/2020/01/TERMAS-FEDERACION-3.jpg",
        packages: [
            {
                title: "Termas de Federacion",
                plane: "Not Available",
                time: [
                    {
                        start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Available",
                time: {
                    start_date: "03/05/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "17/05/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 457,
                hotel: [
                    {
                        check_in: "04/05/2024 - 07:00 am",
                        check_out: "17/05/2025 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "julia",
        category_id: "Nature and Wildlife",
        pages: [
            "https://media.lacapital.com.ar/p/ad98062fd17618bfde5d8360aeac2fab/adjuntos/205/imagenes/029/158/0029158216/1200x675/smart/termasjpg.jpg",
            "https://www.welcomeargentina.com/blog/imagenes/784-2.jpg"
        ],
        price: 550,
    },


    {
        id: "Purmamarca",
        title: "Purmamarca",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://i.ytimg.com/vi/sjUrN5FNR0k/maxresdefault.jpg",
        packages: [
            {
                title: "Purmamarca",
                plane: "Not Available",
                time: [
                    {
                        start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                train: "Available",
                time: {
                    start_date: "17/07/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "04/07/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 489,
                hotel: [
                    {
                        check_in: "18/07/2024 - 07:00 am",
                        check_out: "04/07/2025 - 10:00 am"
                    }
                ]
            },

            {
                bus: "Available",
                time: {
                    start_date: "04/03/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "17/03/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 457,
                hotel: [
                    {
                        check_in: "05/03/2024 - 07:00 am",
                        check_out: "17/03/2024 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "julia",
        category_id: "Nature and Wildlife",
        pages: [
            "https://media-cdn.tripadvisor.com/media/photo-s/22/37/11/51/vista.jpg",
            "https://espaciopurmamarca.com/wp-content/uploads/2019/08/unnamed.png"
        ],
        price: 650,
    },


    {
        id: "San Martín de los Andes",
        title: "San Martín de los Andes",
        contienent: "South America",
        country: "Argentina",
        cover_photo:
            "https://www.rionegro.com.ar/wp-content/uploads/2022/04/00000000000000-7.jpg",
        packages: [
            {
                title: "San Martin de los Andes",
                plane: "Available",
                time: [
                    {
                        start_date: "05/11/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "17/11/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 987,
                hotel: [
                    {
                        check_in: "05/11/2024 - 07:00 am",
                        check_out: "17/11/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Available",
                time: {
                    start_date: "17/07/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "04/07/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 865,
                hotel: [
                    {
                        check_in: "18/07/2024 - 07:00 am",
                        check_out: "04/07/2025 - 10:00 am"
                    }
                ]
            },

            {
                bus: "Available",
                time: {
                    start_date: "04/03/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "17/03/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 794,
                hotel: [
                    {
                        check_in: "05/03/2024 - 07:00 am",
                        check_out: "17/03/2024 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "julia",
        category_id: "Nature and Wildlife",
        pages: [
            "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/San-Marti%CC%81n-de-los%20Andes.jpg",
            "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2022/04/San-Martin-de-los-Andes-EPU.jpg?fit=1600%2C1200&ssl=1"
        ],
        price: 1050,
    },


    {
        id: "Ushuaia",
        title: "Ushuaia",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://media.viajando.travel/p/ed55770f8c8875de65e4e0dae5a314f6/adjuntos/236/imagenes/000/490/0000490331/1200x675/smart/ushuaia.jpg",
        packages: [
            {
                title: "Ushuaia",
                plane: "Available",
                time: [
                    {
                        start_date: "17/09/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "31/09/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 1187,
                hotel: [
                    {
                        check_in: "17/09/2024 - 07:00 am",
                        check_out: "31/09/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Available",
                time: {
                    start_date: "17/07/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "04/07/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 1065,
                hotel: [
                    {
                        check_in: "24/10/2024 - 07:00 am",
                        check_out: "06/10/2024 - 10:00 am"
                    }
                ]
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "End of the World and Extreme Nature",
        pages: [
            "https://www.cronista.com/files/image/295/295641/5ffe0a00e808f.jpg",
            "https://media.staticontent.com/media/pictures/3c387a50-2517-44c1-856b-87e2d906d03b"
        ],
        price: 1200,
    },


    {
        id: "Tower Eiffel",
        title: "Tower Eiffel",
        continent: "Europe",
        country: "France",
        cover_photo:
            "https://rare-gallery.com/uploads/posts/380788-4k-wallpaper.jpg",
        packages: [
            {
                title: "Ushuaia",
                plane: "Available",
                time: [
                    {
                        start_date: "06/04/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "21/04/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2389,
                hotel: [
                    {
                        check_in: "06/04/2024 - 07:00 am",
                        check_out: "21/04/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldwidetravel.tips%2Ffrance%2Fparis%2Feiffel-tower-in-paris%2F&psig=AOvVaw36r7zAQC0KWJzrrlUfnEOm&ust=1681268489188000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiSpffroP4CFQAAAAAdAAAAABAE",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.toureiffel.paris%2Fen%2Fthe-monument%2Flights&psig=AOvVaw36r7zAQC0KWJzrrlUfnEOm&ust=1681268489188000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiSpffroP4CFQAAAAAdAAAAABAK"
        ],
        price: 2500,
    },


    {
        id: "Cancun",
        title: "Cancun",
        continent: "South America",
        country: "Mexico",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblogs.portafolio.co%2Ftop-10-las-mejores-playas-cancun-debes-visitar&psig=AOvVaw0EwPrLcRiWdrjW9h-julse&ust=1681269077575000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDj8MLtoP4CFQAAAAAdAAAAABAE",
        packages: [
            {
                title: "Cancun",
                plane: "Available",
                time: [
                    {
                        start_date: "06/01/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "24/01/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2589,
                hotel: [
                    {
                        check_in: "06/01/2024 - 07:00 am",
                        check_out: "24/01/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.vivaaerobus.com%2Fplayas-de-cancun%2F&psig=AOvVaw0EwPrLcRiWdrjW9h-julse&ust=1681269077575000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDj8MLtoP4CFQAAAAAdAAAAABAK",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.vivaaerobus.com%2Fplayas-de-cancun%2F&psig=AOvVaw0EwPrLcRiWdrjW9h-julse&ust=1681269077575000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDj8MLtoP4CFQAAAAAdAAAAABAQ"
        ],
        price: 2700,
    },


    {
        id: "Venecia",
        title: "Venecia",
        continent: "Europe",
        country: "Italy",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpuzzlefactory.pl%2Fes%2Frompecabezas%2Fjugar%2Fpaisajes%2F226532-paisaje-de-venecia&psig=AOvVaw0BQaBphgyimdbEmaQGX80_&ust=1681269273768000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIj5p6DuoP4CFQAAAAAdAAAAABAK",
        packages: [
            {
                title: "Venecia",
                plane: "Available",
                time: [
                    {
                        start_date: "14/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "30/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2638,
                hotel: [
                    {
                        check_in: "14/06/2024 - 07:00 am",
                        check_out: "30/06/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Ffotos%2Fvenecia-italia&psig=AOvVaw0BQaBphgyimdbEmaQGX80_&ust=1681269273768000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIj5p6DuoP4CFQAAAAAdAAAAABAQ",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fviajes.nationalgeographic.com.es%2Fa%2Fvenecia-ciudad-italiana-suenos_12411&psig=AOvVaw0BQaBphgyimdbEmaQGX80_&ust=1681269273768000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIj5p6DuoP4CFQAAAAAdAAAAABAW"
        ],
        price: 2800,
    },


    {
        id: "Cairo",
        title: "Cairo",
        continent: "Africa",
        country: "Egipto",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-premium%2Fvista-centro-ciudad-cairo-al-atardecer-egipto_13138018.htm&psig=AOvVaw29jomu0mMrCA49wX0RraGX&ust=1681269737616000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiyvf3voP4CFQAAAAAdAAAAABAK",
        packages: [
            {
                title: "Cairo",
                plane: "Available",
                time: [
                    {
                        start_date: "14/09/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "31/09/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2638,
                hotel: [
                    {
                        check_in: "14/09/2024 - 07:00 am",
                        check_out: "31/09/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fafrica-cairo-ciudad-built-structure-building-exterior-city-wallpaper-cnoxu&psig=AOvVaw29jomu0mMrCA49wX0RraGX&ust=1681269737616000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiyvf3voP4CFQAAAAAdAAAAABAQ",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.best-wallpaper.net%2FEgypt-Cairo-pyramid-desert_wallpapers.html&psig=AOvVaw29jomu0mMrCA49wX0RraGX&ust=1681269737616000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiyvf3voP4CFQAAAAAdAAAAABAW"
        ],
        price: 2800,
    },


    {
        id: "Los Angeles",
        title: "Los Angeles",
        continent: "North America",
        country: "United States",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.expedia.mx%2Ffotos%2Fcondado-de-los-angeles%2Flos-angeles.d178280&psig=AOvVaw22DrZYAdQOmuthC1SYflai&ust=1681270010422000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDS2v_woP4CFQAAAAAdAAAAABAE",
        packages: [
            {
                title: "Los Angeles",
                plane: "Available",
                time: [
                    {
                        start_date: "02/03/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "21/03/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2238,
                hotel: [
                    {
                        check_in: "02/03/2024 - 07:00 am",
                        check_out: "21/03/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.viajarlosangeles.com%2Fque-visitar-los-angeles.php&psig=AOvVaw22DrZYAdQOmuthC1SYflai&ust=1681270010422000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDS2v_woP4CFQAAAAAdAAAAABAK",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.viajarlosangeles.com%2Fque-visitar-los-angeles.php&psig=AOvVaw22DrZYAdQOmuthC1SYflai&ust=1681270010422000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDS2v_woP4CFQAAAAAdAAAAABAQ"
        ],
        price: 2400,
    },


    {
        id: "Miami",
        title: "Miami",
        continent: "North America",
        country: "United States",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lanacion.com.ar%2Festados-unidos%2Fcuales-son-las-seis-mejores-playas-de-miami-entre-surf-naturaleza-y-compras-nid12102022%2F&psig=AOvVaw1kK8DLMlGOZRjfC4uccH2P&ust=1681270151268000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjP6sLxoP4CFQAAAAAdAAAAABAE",
        packages: [
            {
                title: "Los Angeles",
                plane: "Available",
                time: [
                    {
                        start_date: "14/01/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "27/01/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 1838,
                hotel: [
                    {
                        check_in: "14/01/2024 - 07:00 am",
                        check_out: "27/01/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infobae.com%2Famerica%2Feeuu%2F2022%2F10%2F31%2Fmiami-7-lugares-para-tomar-fotos-poco-conocidos%2F&psig=AOvVaw1kK8DLMlGOZRjfC4uccH2P&ust=1681270151268000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjP6sLxoP4CFQAAAAAdAAAAABAK",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.viajarmiami.com%2Fque-visitar.php&psig=AOvVaw1kK8DLMlGOZRjfC4uccH2P&ust=1681270151268000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjP6sLxoP4CFQAAAAAdAAAAABAQ"
        ],
        price: 2000,
    },


    {
        id: "Bangkok",
        title: "Bangkok",
        continent: "Asia",
        country: "Thailand",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixelz.cc%2Fimages%2Fwat-arun-buddhist-temple-bangkok-thailand-uhd-4k-wallpaper%2F&psig=AOvVaw3HlwvM8C4fqc3LlyE98z29&ust=1681270446364000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjRxM_yoP4CFQAAAAAdAAAAABAE",
        packages: [
            {
                title: "Bangkok",
                plane: "Available",
                time: [
                    {
                        start_date: "27/05/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "10/05/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 3638,
                hotel: [
                    {
                        check_in: "27/05/2024 - 07:00 am",
                        check_out: "10/05/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgorunningtours.com%2Frun%2Fbangkok-old-town-walk-4k%2F&psig=AOvVaw3HlwvM8C4fqc3LlyE98z29&ust=1681270446364000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjRxM_yoP4CFQAAAAAdAAAAABAL",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgorunningtours.com%2Frun%2Fbangkok-old-town-walk-4k%2F&psig=AOvVaw3HlwvM8C4fqc3LlyE98z29&ust=1681270446364000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjRxM_yoP4CFQAAAAAdAAAAABAX"
        ],
        price: 4000,
    },


    {
        id: "Baviera",
        title: "Baviera",
        continent: "Europe",
        country: "Germany",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vivodeviajes.com%2Falemania%2Fbaviera%2F&psig=AOvVaw13xy6rxWDtHUxDd3Yci1yq&ust=1681312071158000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjkhNiNov4CFQAAAAAdAAAAABAE",
        packages: [
            {
                title: "Baviera",
                plane: "Available",
                time: [
                    {
                        start_date: "13/08/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "30/08/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 3638,
                hotel: [
                    {
                        check_in: "13/08/2024 - 07:00 am",
                        check_out: "30/08/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com.ve%2FLocationPhotoDirectLink-g187309-d2059399-i69043214-Pure_Bavaria_Tours-Munich_Upper_Bavaria_Bavaria.html&psig=AOvVaw13xy6rxWDtHUxDd3Yci1yq&ust=1681312071158000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjkhNiNov4CFQAAAAAdAAAAABAK",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.10wallpaper.com%2Fes%2Fview%2FBavaria_Germany_Wallpaper.html&psig=AOvVaw13xy6rxWDtHUxDd3Yci1yq&ust=1681312071158000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjkhNiNov4CFQAAAAAdAAAAABAR"
        ],
        price: 4000,
    },


    {
        id: "Istambul",
        title: "Istambul",
        continent: "Asia & Europe",
        country: "Turkey",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.best-wallpaper.net%2FTurkey-Istanbul-beautiful-city-scenery-sunset-buildings-houses-river_wallpapers.html&psig=AOvVaw0GQqegalSTVWe9EWuesZiT&ust=1681312409072000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLD5lvmOov4CFQAAAAAdAAAAABAE",
        packages: [
            {
                title: "Istambul",
                plane: "Available",
                time: [
                    {
                        start_date: "04/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "17/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 4138,
                hotel: [
                    {
                        check_in: "04/08/2024 - 07:00 am",
                        check_out: "17/08/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fes%2Fhd-wallpaper-desktop-kxioj&psig=AOvVaw0GQqegalSTVWe9EWuesZiT&ust=1681312409072000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLD5lvmOov4CFQAAAAAdAAAAABAJ",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F822118106981293839%2F&psig=AOvVaw0GQqegalSTVWe9EWuesZiT&ust=1681312409072000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLD5lvmOov4CFQAAAAAdAAAAABAP"
        ],
        price: 4300,
    },


    {
        id: "Beijing",
        title: "Beijing",
        continent: "Asia",
        country: "China",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pxfuel.com%2Fes%2Ffree-photo-juley&psig=AOvVaw0URG5nZnHeKch61oMg70jy&ust=1681312930622000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi79_GQov4CFQAAAAAdAAAAABAK",
        packages: [
            {
                title: "Beijing",
                plane: "Available",
                time: [
                    {
                        start_date: "13/07/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "27/07/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 4438,
                hotel: [
                    {
                        check_in: "13/07/2024 - 07:00 am",
                        check_out: "27/07/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fes%2Fhd-wallpaper-desktop-fjmkj&psig=AOvVaw0URG5nZnHeKch61oMg70jy&ust=1681312930622000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi79_GQov4CFQAAAAAdAAAAABAE",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.best-wallpaper.net%2FShenwumen-trees-yellow-leaves-river-autumn-Beijing-China_wallpapers.html&psig=AOvVaw0URG5nZnHeKch61oMg70jy&ust=1681312930622000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi79_GQov4CFQAAAAAdAAAAABAQ"
        ],
        price: 4600,
    },


    {
        id: "London",
        title: "London",
        continent: "Europe",
        country: "England",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.best-wallpaper.net%2FLondon-England-Big-Ben-river-bridge-dusk-lights_wallpapers.html&psig=AOvVaw1b4dW6UG5h0NfrkcqphuPq&ust=1681313190769000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCID79-2Rov4CFQAAAAAdAAAAABAE",
        packages: [
            {
                title: "England",
                plane: "Available",
                time: [
                    {
                        start_date: "26/10/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "07/11/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 4138,
                hotel: [
                    {
                        check_in: "26/10/2024 - 07:00 am",
                        check_out: "07/11/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.solofondos.com%2Ffondos-pantalla-londres.html&psig=AOvVaw1b4dW6UG5h0NfrkcqphuPq&ust=1681313190769000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCID79-2Rov4CFQAAAAAdAAAAABAK",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fes%2Fhd-wallpaper-desktop-pbnsl&psig=AOvVaw1b4dW6UG5h0NfrkcqphuPq&ust=1681313190769000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCID79-2Rov4CFQAAAAAdAAAAABAQ"
        ],
        price: 4300,
    },


    {
        id: "Sidney",
        title: "Sidney",
        continent: "Oceania",
        country: "Australia",
        cover_photo:
            "https://tipsparatuviaje.com/wp-content/uploads/2019/08/opera-de-sidney-australia.jpg",
        packages: [
            {
                title: "Sidney",
                plane: "Available",
                time: [
                    {
                        start_date: "26/10/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "07/11/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 3738,
                hotel: [
                    {
                        check_in: "26/10/2024 - 07:00 am",
                        check_out: "07/11/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgrowproexperience.com%2Faustralia%2Fque-ver-en-sydney%2F&psig=AOvVaw3acg49tF5GJReDVaquxE1I&ust=1681313449379000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLD7y-mSov4CFQAAAAAdAAAAABAE",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgrowproexperience.com%2Faustralia%2Fque-ver-en-sydney%2F&psig=AOvVaw3acg49tF5GJReDVaquxE1I&ust=1681313449379000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLD7y-mSov4CFQAAAAAdAAAAABAJ"
        ],
        price: 3800,
    },


    {
        id: "Moscu",
        title: "Moscu",
        continent: "Europe",
        country: "Rusia",
        cover_photo:
            "https://tipsparatuviaje.com/wp-content/uploads/2019/08/plaza-roja-moscu-rusia.jpg",
        packages: [
            {
                title: "Moscu",
                plane: "Available",
                time: [
                    {
                        start_date: "26/11/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "05/12/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 4038,
                hotel: [
                    {
                        check_in: "26/11/2024 - 07:00 am",
                        check_out: "05/12/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.best-wallpaper.net%2FRussia-Moscow-Palace-cathedral-bridge-lights_wallpapers.html&psig=AOvVaw2l8EYi_-LEoQ7aaiZg9KaV&ust=1681313809454000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjt75SUov4CFQAAAAAdAAAAABAK",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallspic.com%2Fes%2Ftag%2Fel_kremlin_de_moscu%2F3840x2160&psig=AOvVaw2l8EYi_-LEoQ7aaiZg9KaV&ust=1681313809454000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjt75SUov4CFQAAAAAdAAAAABAQ"
        ],
        price: 4200,
    },


    {
        id: "Orlando",
        title: "Orlando",
        continent: "North America",
        country: "United States",
        cover_photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperbetter.com%2Fes%2Fhd-wallpaper-akubi&psig=AOvVaw3uJaY1cxQEyErcGD5snRZy&ust=1681314995778000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjp1sqYov4CFQAAAAAdAAAAABAF",
        packages: [
            {
                title: "Orlando",
                plane: "Available",
                time: [
                    {
                        start_date: "13/03/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "30/03/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2338,
                hotel: [
                    {
                        check_in: "13/03/2024 - 07:00 am",
                        check_out: "30/03/2024 - 10:00 am"
                    }
                ]
            },

            {
                train: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
                bus: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fes%2Fhd-wallpaper-desktop-optva&psig=AOvVaw3uJaY1cxQEyErcGD5snRZy&ust=1681314995778000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjp1sqYov4CFQAAAAAdAAAAABAL",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fes%2Fhd-wallpaper-desktop-fvgwk&psig=AOvVaw3uJaY1cxQEyErcGD5snRZy&ust=1681314995778000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjp1sqYov4CFQAAAAAdAAAAABAR"
        ],
        price: 2500,
    },

];
