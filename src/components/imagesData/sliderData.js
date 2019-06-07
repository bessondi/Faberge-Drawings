import p1 from "../../images/mosaic/p2/Renoir_01.jpg";
import p2 from "../../images/mosaic/p2/Renoir_02.jpg";
import p3 from "../../images/mosaic/p2/Renoir_03.jpg";
import p4 from "../../images/mosaic/p2/Renoir_04.jpg";
import p5 from "../../images/mosaic/p2/Renoir_05.jpg";
import p6 from "../../images/mosaic/p2/Renoir_06.jpg";
import p7 from "../../images/mosaic/p2/Renoir_07.jpg";
import p8 from "../../images/mosaic/p2/Renoir_08.jpg";
import p9 from "../../images/mosaic/p2/Renoir_09.jpg";
import p10 from "../../images/mosaic/p2/Renoir_10.jpg";
import p11 from "../../images/mosaic/p2/Renoir_11.jpg";
import p12 from "../../images/mosaic/p2/Renoir_12.jpg";
import p13 from "../../images/mosaic/p2/Renoir_13.jpg";
import p14 from "../../images/mosaic/p2/Renoir_14.jpg";
import p15 from "../../images/mosaic/p2/Renoir_15.jpg";
import p16 from "../../images/mosaic/p2/Renoir_16.jpg";
import cropSizeRenoir from "../../images/cropImages/Renoir-compressor.jpeg";

const SliderData = {
    'path': [
        {
            'prevPath': '/',
            'nextPath': '/slider-2'
        },
        {
            'prevPath': '/slider',
            'nextPath': '/slider-3'
        },
        {
            'prevPath': '/',
            'nextPath': '/slider-4'
        },
        {
            'prevPath': '/slider',
            'nextPath': '/slider-5'
        },
        {
            'prevPath': '/',
            'nextPath': '/slider-6'
        }
    ],
    'slides': [
        {
            "index": 0,
            'pictureData': {
                'cropSize': cropSizeRenoir,
                'textArea': {
                    'author': 'Пьер Огюст Ренуар (1841-1919)',
                    'pictureTitle': 'Площадь перед церковью Святой Троицы в Париже',
                    'year': '1893',
                    'typeOfCanvas': 'Холст, масло',
                    'info': 'Особое место среди представленных в Верхней буфетной картин занимает «Площадь перед церковью Святой Троицы в Париже». Она написана Пьером Огюстом Ренуаром – живописцем, графиком и скульптором, одним из основателей и самых видных представителей импрессионизма. Художнику на основе пленэрных впечатлений мастерски удалось передать динамичную атмосферу большого города.'
                }
            }
        },
        {
            "index": 1,
            'pictureData': {
                    'parts': [
                        {
                            'index': 0,
                            'picture': p1
                        },
                        {
                            'index': 1,
                            'picture': p2
                        },
                        {
                            'index': 2,
                            'picture': p3
                        },
                        {
                            'index': 3,
                            'picture': p4
                        },
                        {
                            'index': 4,
                            'picture': p5
                        },
                        {
                            'index': 5,
                            'picture': p6
                        },
                        {
                            'index': 6,
                            'picture': p7
                        },
                        {
                            'index': 7,
                            'picture': p8
                        },
                        {
                            'index': 8,
                            'picture': p9
                        },
                        {
                            'index': 9,
                            'picture': p10
                        },
                        {
                            'index': 10,
                            'picture': p11
                        },
                        {
                            'index': 11,
                            'picture': p12
                        },
                        {
                            'index': 12,
                            'picture': p13
                        },
                        {
                            'index': 13,
                            'picture': p14
                        },
                        {
                            'index': 14,
                            'picture': p15
                        },
                        {
                            'index': 15,
                            'picture': p16
                        }
                    ],
                    'partSize': {
                        'width': 600,
                        'height': 503
                    },
                    'fullSize': {
                        'width': 2400,
                        'height': 2010
                    },
                    'position': {
                        'top': 1200,
                        'left': 1000,
                    },
                'textArea': {
                    'author': 'Пьер Огюст Ренуар (1841-1919)',
                    'pictureTitle': 'Площадь перед церковью Святой Троицы в Париже',
                    'year': '1893',
                    'typeOfCanvas': 'Холст, масло',
                    'info': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt eum, explicabo facilis iste labore molestias nam, nesciunt nobis perferendis possimus quam qui sed sequi sint, tempore tenetur vel voluptatibus?'
                }
            }
        }
    ]
};

export default SliderData;