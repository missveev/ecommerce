import pasta1 from 'src/assets/productImages/pasta1.jpeg';
import pasta2 from 'src/assets/productImages/pasta2.jpeg';
import pasta3 from 'src/assets/productImages/pasta.jpeg';
import cereal1 from 'src/assets/productImages/cereal1.jpeg';
import cereal2 from 'src/assets/productImages/cereal2.jpeg';
import cereal3 from 'src/assets/productImages/cereal3.png';
import grain1 from 'src/assets/productImages/grain1.jpeg';
import grain2 from 'src/assets/productImages/grain2.png';
import grain3 from 'src/assets/productImages/grain3.jpeg';
import flour1 from 'src/assets/productImages/flour1.png';
import flour2 from 'src/assets/productImages/flour2.png';
import oil1 from 'src/assets/productImages/oil1.jpeg';
import oil2 from 'src/assets/productImages/oil2.jpeg';
import oil3 from 'src/assets/productImages/oil3.jpeg';
import noodles1 from 'src/assets/productImages/noodle1.jpeg';
import noodles2 from 'src/assets/productImages/noodle2.jpeg';
import herb1 from 'src/assets/productImages/herb1.jpeg';
import herb2 from 'src/assets/productImages/herb2.jpeg';
import laundry1 from 'src/assets/productImages/laundry1.jpeg';
import laundry2 from 'src/assets/productImages/laundry2.png';
import laundry3 from 'src/assets/productImages/laundry3.png';
import laundry4 from 'src/assets/productImages/laundry4.png';
import laundry5 from 'src/assets/productImages/laundry5.jpeg';
import kitchen from 'src/assets/productImages/kitchen.jpeg';
import kitchen1 from 'src/assets/productImages/kitchen1.jpeg';
import kitchen2 from 'src/assets/productImages/kitchen2.jpeg';
import kitchen3 from 'src/assets/productImages/kitchen3.jpeg';
import kitchen4 from 'src/assets/productImages/kitchen4.png';
import snack from 'src/assets/productImages/snack.jpeg';
import snack1 from 'src/assets/productImages/snack1.jpeg';
import snack2 from 'src/assets/productImages/snack3.jpeg';
import snack3 from 'src/assets/productImages/snack4.png';
import choc1 from 'src/assets/productImages/choc1.jpeg';
import choc2 from 'src/assets/productImages/choc2.png';
import snack4 from 'src/assets/productImages/snack4.png';
import drink1 from 'src/assets/productImages/drink1.png';
import drink2 from 'src/assets/productImages/drink2.jpeg';
import drink3 from 'src/assets/productImages/drink3.jpeg';
import wine1 from 'src/assets/productImages/wine1.jpeg';
import wine2 from 'src/assets/productImages/wine2.jpeg';
import drink4 from 'src/assets/productImages/drink4.png';
const SHOP_DATA = [
    {
        id: 1,
        title: 'Food Cupboard',
        routeName: 'foodstuff',
        items: [
            {
                id: 1,
                name: 'Pasta 1',
                imageUrl: 'pasta1',
                price: 800
            },
            {
                id: 2,
                name: 'Pasta 2',
                imageUrl: 'pasta2',
                price: 800
            },

            {
                id: 3,
                name: 'Pasta 3',
                imageUrl: 'pasta3',
                price: 800
            },

            {
                id: 4,
                name: 'cereal 1',
                imageUrl: 'cereal1',
                price: 2500
            },
            {
                id: 5,
                name: 'cereal 2',
                imageUrl: 'cereal2',
                price: 2500
            },
            {
                id: 6,
                name: 'cereal 3',
                imageUrl: 'cereal3',
                price: 2500
            },
            {
                id: 7,
                name: 'Grain 1',
                imageUrl: 'grain1',
                price: 1000
            },
            {
                id: 8,
                name: 'Grain 2',
                imageUrl: 'grain2',
                price: 1000
            },
            {
                id: 9,
                name: 'Grain 3',
                imageUrl: 'grain3',
                price: 1000
            },
            {
                id: 10,
                name: 'Flour 1',
                imageUrl: 'flour1',
                price: 250
            },
            {
                id: 11,
                name: 'Flour 2',
                imageUrl: 'flour2',
                price: 250
            },
            {
                id: 12,
                name: 'Oil 1',
                imageUrl: 'oil1',
                price: 2500
            },
            {
                id: 13,
                name: 'Oil 2',
                imageUrl: 'oil2',
                price: 2500
            },
            {
                id: 14,
                name: 'Oil 3',
                imageUrl: 'oil3',
                price: 2500
            },
            {
                id: 15,
                name: 'Noodles 1',
                imageUrl: 'noodles1',
                price: 250
            },
            {
                id: 16,
                name: 'Noodles 2',
                imageUrl: 'noodles2',
                price: 250
            },
            {
                id: 17,
                name: 'Herbs 1',
                imageUrl: 'herb1',
                price: 400
            },
            {
                id: 18,
                name: 'Herbs 2',
                imageUrl: 'herb2',
                price: 400
            }
        ]
    },
    {
        id: 2,
        title: 'HOUSEHOLD CLEANING',
        routeName: 'household',
        items: [
            {
                id: 19,
                name: 'Laundry 1',
                imageUrl: 'laundry1',
                price: 1000
            },
            {
                id: 20,
                name: 'Laundry 2',
                imageUrl: 'laundry2',
                price: 1000
            },
            {
                id: 21,
                name: 'Laundry 3',
                imageUrl: 'laundry3',
                price: 1000
            },
            {
                id: 22,
                name: 'Laundry 4',
                imageUrl: 'laundry4',
                price: 1000
            },
            {
                id: 23,
                name: 'Laundry 5',
                imageUrl: 'laundry5',
                price: 1000
            }
        ]
    },
    {
        id: 3,
        title: 'HOME&KITCHEN',
        routeName: 'kitchen',
        items: [
            {
                id: 24,
                name: 'Kitchen',
                imageUrl: 'kitchen',
                price: 10000
            },
            {
                id: 25,
                name: 'Kitchen 1',
                imageUrl: 'kitchen1',
                price: 10000
            },
            {
                id: 26,
                name: 'Kitchen 2',
                imageUrl: 'kitchen2',
                price: 10000
            },
            {
                id: 27,
                name: 'Kitchen 3',
                imageUrl: 'kitchen3',
                price: 10000
            },
            {
                id: 28,
                name: 'Kitchen 4',
                imageUrl: 'kitchen4',
                price: 10000
            }
        ]
    },
    {
        id: 4,
        title: 'Snacks',
        routeName: 'snacks',
        items: [
            {
                id: 29,
                name: 'Snacks',
                imageUrl: 'snack',
                price: 500
            },
            {
                id: 30,
                name: 'Snacks 1',
                imageUrl: 'snack1',
                price: 500
            },
            {
                id: 31,
                name: 'Snacks 2',
                imageUrl: 'snack2',
                price: 500
            },
            {
                id: 32,
                name: 'Snacks 3',
                imageUrl: 'snack3',
                price: 500
            },
            {
                id: 33,
                name: 'Snacks 4',
                imageUrl: 'snack4',
                price: 500
            },
            {
                id: 34,
                name: 'Snacks 5',
                imageUrl: 'snack5',
                price: 500
            },
            {
                id: 35,
                name: 'Chocolate',
                imageUrl: 'choc1',
                price: 500
            },
            {
                id: 36,
                name: 'Chocolate 1',
                imageUrl: 'choc2',
                price: 500
            }
        ]
    },
    {
        id: 5,
        title: 'DRINKS',
        routeName: 'drinks',
        items: [
            {
                id: 37,
                name: 'Drink 1',
                imageUrl: 'drink1',
                price: 1500
            },
            {
                id: 38,
                name: 'Drink 2',
                imageUrl: 'drink2',
                price: 1500
            },
            {
                id: 39,
                name: 'Drink 3',
                imageUrl: 'drink3',
                price: 1500
            },
            {
                id: 40,
                name: 'Drink 4',
                imageUrl: 'drink4',
                price: 1500
            },
            {
                id: 41,
                name: 'Wine 1',
                imageUrl: 'wine1',
                price: 4500
            },
            {
                id: 42,
                name: 'Wine 2',
                imageUrl: 'wine2',
                price: 4500
            }
        ]
    }
];

export default SHOP_DATA;

