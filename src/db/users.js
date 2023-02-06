const users = [
  {
    id: 1,
    name: 'Elon Musk',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905822/Clon%20Facebook/profile-picture/elon-musk_xwac49.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904853/Clon%20Facebook/post/post-elon-musk_uwjgf6.jpg',
      description: 'Starship launch attempt soon'
    },
    storie: {
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905712/Clon%20Facebook/stories/storie-elon-musk_t1gykw.png'
    }
  },
  {
    id: 2,
    name: 'Mark Zuckerberg',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/mark-zuckerberg_vxt9bj.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904854/Clon%20Facebook/post/post-mark-zuckerberg_kwew9x.jpg',
      description:
        "Happy New Year! Here's to all of the adventures and love coming in 2023."
    },
    storie: {
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905712/Clon%20Facebook/stories/storie-mark-zuckerberg_xrmwlq.png'
    }
  },
  {
    id: 3,
    name: 'Tim Cook',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/tim-cook_r7tg6b.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904852/Clon%20Facebook/post/post-tim-cook_diy7th.jpg',
      description:
        'It’s always such a joy to visit with the team at Apple Marunouchi. Thanks for sharing your incredible energy and passion — and for helping our customers this busy holiday season.'
    }
  },
  {
    id: 4,
    name: 'Satya Nadella',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/satya-nadella_nockb8.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904852/Clon%20Facebook/post/post-satya-nadella_af2slr.jpg',
      description:
        'Thank you Narendra Modi for an insightful meeting. It’s inspiring to see the government’s deep focus on sustainable and inclusive economic growth led by digital transformation and we’re looking forward to helping India realize the Digital India vision and be a light for the world'
    }
  },
  {
    id: 5,
    name: 'Vitalik Buterin',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/vitalik-buterin_nahhh1.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904853/Clon%20Facebook/post/post-vitalik-buterin_iwxnen.jpg',
      description:
        'The Vatican: 2.2 popes per square kilometer\n\nBogota: 2 POAPs per square meter'
    }
  },
  {
    id: 6,
    name: 'Freddy Vega',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905822/Clon%20Facebook/profile-picture/freddy-vega_reacrs.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904854/Clon%20Facebook/post/post-freddy-vega_dbgfyn.jpg',
      description:
        '#PlatziConf me enseñó que nuestra misión no es un sueño: LATAM será potencia en tecnología.\n\nEl talento latino es gente buena, de bondad.\nCuriosa, incansable y enfocada.\n\nCon problemas y dolores, pero la resiliencia de arreglar cada uno de ellos.\n\nCero dudas.\n\nA trabajar.'
    },
    storie: {
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905713/Clon%20Facebook/stories/storie-feddy-vega_hmnhzw.png'
    }
  },
  {
    id: 7,
    name: 'Marcos Galperin',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905820/Clon%20Facebook/profile-picture/marcos-galperin_nmt6tl.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904854/Clon%20Facebook/post/post-marcos-galperin_xebbgh.jpg',
      description:
        'Primera factura cobrada por Mercado Libre, 28/4/2000. AR$10.5 pesos que equivalían a US$10.5. Un premio al héroe que vino a la oficina y nos pagó! En los últimos 12 meses MELI facturó +US$10 billones. #perseverancia #resiliencia #consistencia'
    }
  },
  {
    id: 8,
    name: 'Santiago Siri',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/santi-siri_dv6ufk.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904852/Clon%20Facebook/post/post-santi-siri_dy2lox.jpg',
      description: 'gm sirs'
    },
    storie: {
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905712/Clon%20Facebook/stories/storie-santi-siri_ijrmar.png'
    }
  },
  {
    id: 9,
    name: 'Miguel Ángel Durán',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/miguel-angel-duran_vdnrvy.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904855/Clon%20Facebook/post/post-miguel-angel-duran_b3dnh6.jpg',
      description:
        '¡Arrancamos el curso de REACT desde CERO y GRATUITO!\n\nDesde cero, paso a paso y con proyectos prácticos.\n\nHOY es la primera clase. ¡VENTE!\n\n➡️ https://twitch.tv/midudev'
    }
  },
  {
    id: 10,
    name: 'Brais Moure',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/brais-moure_opzlet.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904852/Clon%20Facebook/post/post-brais-moure_em7kgj.jpg',
      description:
        '¡Mañana lunes toca resolver este reto de programación en directo y publicar uno nuevo! 💪'
    }
  },
  {
    id: 11,
    name: 'Diego De Granda',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905822/Clon%20Facebook/profile-picture/diego-de-granda_f3srzn.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904853/Clon%20Facebook/post/post-diego-de-granda_ndcpew.png',
      description:
        'Ya pueden ver acá mi segmento del #platziLive de la semana pasada donde hablo de "El futuro es para los creadores de tecnología" 👇🏽 @platzi https://youtu.be/FLjUYMTaBeM'
    }
  },
  {
    id: 12,
    name: 'Oscar Barajas',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/oscar-barajas_ay6xmf.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904854/Clon%20Facebook/post/post-oscar-barajas_yzqjbh.jpg',
      description: 'Cerrando el año 🏖️💚'
    }
  },
  {
    id: 13,
    name: 'Nicolás Schürmann',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/nicolas-schurmann_iviscy.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904854/Clon%20Facebook/post/post-nicolas-schurmann_nwmovf.jpg',
      description:
        'Pronto!, quizá hoy o mañana, tengo conexión a internet lenta donde estoy :('
    }
  },
  {
    id: 14,
    name: 'Estafany Aguilar',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905822/Clon%20Facebook/profile-picture/estefany-aguilar_nk9gxa.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904854/Clon%20Facebook/post/post-estefany-aguilar_jxtgcw.jpg',
      description:
        '🎥✨🎉 Yujuuuu !!! Terminamos de grabar 2 nuevos y espectaculares cursos !!!  Los van a amar ❤️❤️❤️'
    }
  },
  {
    id: 15,
    name: 'Lucas Dalto',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905820/Clon%20Facebook/profile-picture/lucas-dalto_uqdnl3.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904854/Clon%20Facebook/post/post-lucas-dalto_yt661j.jpg',
      description: 'El mejor curso de Python - Enero 2023'
    }
  },
  {
    id: 16,
    name: 'Xavier Reyes Ochoa',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/xavier-reyes-ochoa_jjjsqp.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904852/Clon%20Facebook/post/post-xavier-reyes-ochoa_hqebmv.jpg',
      description:
        '¿Invierto en el Metaverso? Yo creo que si. Hay inversión por parte de Meta, es un área que recién está iniciando y no ha sido explotada, y conozco a expertos que creen que es como el Internet en los 90s.\n\n#metaverso #desarrolloweb\n#softwareengineer #html #css #javascript'
    }
  },
  {
    id: 17,
    name: 'Carlos Azaustre',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905821/Clon%20Facebook/profile-picture/carlos-azaustre_lh4f6r.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904853/Clon%20Facebook/post/post-carlos-azaustre_gjnv1p.jpg',
      description:
        '¿Qué nos depara el futuro del desarrollo web en el 2023?\n\nEn este vídeo, te presento el stack y tendencias que marcarán el rumbo de la industria en 2023.\n\n 🔗 https://rli.to/yQUIX\n\nDale RT y 💛 para ayudar a más gente'
    }
  },
  {
    id: 18,
    name: 'Carlos Santana',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905822/Clon%20Facebook/profile-picture/carlos-santana_gnzws0.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904853/Clon%20Facebook/post/post-carlos-santana_uauve0.jpg',
      description:
        'Madre mía tremenda esquizofrenia le están generando al pobre ChatGPT teniendo que operar en su "cabeza" con la información actualizada vs su comportamiento limitado!'
    }
  },
  {
    id: 19,
    name: 'Javier Santaolalla',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905820/Clon%20Facebook/profile-picture/javier-santaolalla_l2kzso.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904854/Clon%20Facebook/post/post-javier-santaolalla_npacw1.jpg',
      description:
        'He ganado el premio del @CPAN_spain al mejor trabajo de divulgación sobre el boson de Higgs con mi nuevo libro y no puedo ser más feliz. Es un reconocimiento que viene de gente que tanto admiro en investigación en física. Me ha llenado de ganas de seguir con esto. Gracias'
    }
  },
  {
    id: 20,
    name: 'José Luis Crespo',
    'profile-picture':
      'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673905820/Clon%20Facebook/profile-picture/jose-luis-crespo_fn4pzq.png',
    post: {
      liked: false,
      img: 'https://res.cloudinary.com/francocarballar/image/upload/f_auto/v1673904854/Clon%20Facebook/post/post-jose-luis-crespo_osiibd.jpg',
      description:
        '¡NUEVO PODCAST! Hoy hablamos sobre el origen del Universo, el Big Bang, la Inflación Cósmica y cómo podemos usarla para tener acceso a un “acelerador de partículas” ultrapoderoso.\n\n🔴YT: https://youtu.be/bmXMmd91zx8\n\n🟢Spotify: https://open.spotify.com/episode/1lfaXStNRm71jiLmEPdvgs\n\n🟠Ivoox: https://go.ivoox.com/rf/97717881'
    }
  }
]

export { users }
