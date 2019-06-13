import p1 from "../../media/images/mosaic/p2/Renoir_01.jpg";
import p2 from "../../media/images/mosaic/p2/Renoir_02.jpg";
import p3 from "../../media/images/mosaic/p2/Renoir_03.jpg";
import p4 from "../../media/images/mosaic/p2/Renoir_04.jpg";
import p5 from "../../media/images/mosaic/p2/Renoir_05.jpg";
import p6 from "../../media/images/mosaic/p2/Renoir_06.jpg";
import p7 from "../../media/images/mosaic/p2/Renoir_07.jpg";
import p8 from "../../media/images/mosaic/p2/Renoir_08.jpg";
import p9 from "../../media/images/mosaic/p2/Renoir_09.jpg";
import p10 from "../../media/images/mosaic/p2/Renoir_10.jpg";
import p11 from "../../media/images/mosaic/p2/Renoir_11.jpg";
import p12 from "../../media/images/mosaic/p2/Renoir_12.jpg";
import p13 from "../../media/images/mosaic/p2/Renoir_13.jpg";
import p14 from "../../media/images/mosaic/p2/Renoir_14.jpg";
import p15 from "../../media/images/mosaic/p2/Renoir_15.jpg";
import p16 from "../../media/images/mosaic/p2/Renoir_16.jpg";
import cropSizeRenoir from "../../media/images/compressed/Renoir.jpeg";
import cityNoise from '../../media/sounds/CityNoise.mp3';

const SliderData = {
    'slides': [
        {
            "index": 0,
            'pictureData': {
                'cropSize': cropSizeRenoir,
                'textArea': {
                    'author': 'Pierre-Auguste Renoir (1841-1919)',
                    'pictureTitle': 'Square of Saint Trinity in Paris',
                    'year': '1893',
                    'typeOfCanvas': 'Oil on canvas',
                    'info': 'Pierre-Auguste Renoir was born in Limoges, Haute-Vienne, France, in 1841. His father, Léonard Renoir, was a tailor of modest means, so in 1844, Renoir\'s family moved to Paris in search of more favorable prospects. The location of their home, in rue d’Argenteuil in central Paris, placed Renoir in proximity to the Louvre. Although the young Renoir had a natural proclivity for drawing, he exhibited a greater talent for singing. '
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
                'soundtrack': cityNoise,
                'textArea': {
                    'author': 'Pierre-Auguste Renoir (1841-1919)',
                    'pictureTitle': 'Square of Saint Trinity in Paris',
                    'year': '1893',
                    'typeOfCanvas': 'Oil on canvas',
                    'info': 'Although Renoir displayed a talent for his work, he frequently tired of the subject matter and sought refuge in the galleries of the Louvre. The owner of the factory recognized his apprentice’s talent and communicated this to Renoir’s family. Following this, Renoir started taking lessons to prepare for entry into Ecole des Beaux Arts.'
                }
            }
        }
    ]
};

export default SliderData;