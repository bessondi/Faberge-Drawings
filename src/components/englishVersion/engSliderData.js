import cropSizeRenoir from "../../media/images/compressed/Renoir.jpg";
import renoir1 from "../../media/images/mosaic/Renoir/Renoir_01.jpg";
import renoir2 from "../../media/images/mosaic/Renoir/Renoir_02.jpg";
import renoir3 from "../../media/images/mosaic/Renoir/Renoir_03.jpg";
import renoir4 from "../../media/images/mosaic/Renoir/Renoir_04.jpg";
import renoir5 from "../../media/images/mosaic/Renoir/Renoir_05.jpg";
import renoir6 from "../../media/images/mosaic/Renoir/Renoir_06.jpg";
import renoir7 from "../../media/images/mosaic/Renoir/Renoir_07.jpg";
import renoir8 from "../../media/images/mosaic/Renoir/Renoir_08.jpg";
import renoir9 from "../../media/images/mosaic/Renoir/Renoir_09.jpg";
import renoir10 from "../../media/images/mosaic/Renoir/Renoir_10.jpg";
import renoir11 from "../../media/images/mosaic/Renoir/Renoir_11.jpg";
import renoir12 from "../../media/images/mosaic/Renoir/Renoir_12.jpg";
import renoir13 from "../../media/images/mosaic/Renoir/Renoir_13.jpg";
import renoir14 from "../../media/images/mosaic/Renoir/Renoir_14.jpg";
import renoir15 from "../../media/images/mosaic/Renoir/Renoir_15.jpg";
import renoir16 from "../../media/images/mosaic/Renoir/Renoir_16.jpg";
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
                        'picture': renoir1
                    },
                    {
                        'index': 1,
                        'picture': renoir2
                    },
                    {
                        'index': 2,
                        'picture': renoir3
                    },
                    {
                        'index': 3,
                        'picture': renoir4
                    },
                    {
                        'index': 4,
                        'picture': renoir5
                    },
                    {
                        'index': 5,
                        'picture': renoir6
                    },
                    {
                        'index': 6,
                        'picture': renoir7
                    },
                    {
                        'index': 7,
                        'picture': renoir8
                    },
                    {
                        'index': 8,
                        'picture': renoir9
                    },
                    {
                        'index': 9,
                        'picture': renoir10
                    },
                    {
                        'index': 10,
                        'picture': renoir11
                    },
                    {
                        'index': 11,
                        'picture': renoir12
                    },
                    {
                        'index': 12,
                        'picture': renoir13
                    },
                    {
                        'index': 13,
                        'picture': renoir14
                    },
                    {
                        'index': 14,
                        'picture': renoir15
                    },
                    {
                        'index': 15,
                        'picture': renoir16
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
                'soundtrack': {
                    'sound': cityNoise,
                    'title': 'Square noise'
                },
                'textArea': {
                    'author': 'Pierre-Auguste Renoir (1841-1919)',
                    'pictureTitle': 'Square of Saint Trinity in Paris',
                    'year': '1893',
                    'typeOfCanvas': 'Oil on canvas',
                    'info': 'Although Renoir displayed a talent for his work, he frequently tired of the subject matter and sought refuge in the galleries of the Louvre. The owner of the factory recognized his apprentice’s talent and communicated this to Renoir’s family. Following this, Renoir started taking lessons to prepare for entry into Ecole des Beaux Arts.'
                }
            }
        },


    ]
};

export default SliderData;