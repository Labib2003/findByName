const products = [
    {
        "name": "Basic Hammer",
        "image": "https://i.ibb.co/Jtc3fwK/hammer1.jpg",
        "description": "A durable hammer with premium rubber grip and overstrike protection. Ideal for basic woodworking and household repairs.",
        "min_order_quantity": 100,
        "available_quantity": 10000,
        "per_unit_price": 20
    },
    {
        "name": "Tinner's Hammer",
        "image": "https://i.ibb.co/PGP2JMr/hammer2.jpg",
        "description": "A durable hammer built form one single solid block of steel. Ideal for forming and shaping sheet metal, striking punches.",
        "min_order_quantity": 200,
        "available_quantity": 1000,
        "per_unit_price": 50
    },
    {
        "name": "Hand Saw",
        "image": "https://i.ibb.co/YWM5N5x/saw1.jpg",
        "description": "The hand saw has an exclusive tooth geometry for a fast clean cut. Ergonomically designed bi-material handle for comfort and control.",
        "min_order_quantity": 50,
        "available_quantity": 2000,
        "per_unit_price": 20
    },
    {
        "name": "Hacksaw",
        "image": "https://i.ibb.co/Cb7Ws8Z/saw2.jpg",
        "description": "High-speed steel coping saw blades cut through most materials with ease. This coping saw has an ergonomic ProTouch handle to give added comfort.",
        "min_order_quantity": 100,
        "available_quantity": 20000,
        "per_unit_price": 30
    },
    {
        "name": "Philips Screwdriver",
        "image": "https://i.ibb.co/LCsPRV5/sd1.jpg",
        "description": "Includes industrial strength heat treated bits: 3/8-Inch, 5/16-Inch and 1/4-Inch nut drivers. Blast finish bit tips provide a firm hold and reduce cam-out.",
        "min_order_quantity": 100,
        "available_quantity": 20000,
        "per_unit_price": 30
    },
    {
        "name": "Flat head Screwdriver",
        "image": "https://i.ibb.co/DfQ9m40/sd2.jpg",
        "description": "Compact design features standard 1-1/4-Inch shaft allowing easy access to tight work spaces Blast finish bit tips provide a firm hold and reduce cam-out.",
        "min_order_quantity": 100,
        "available_quantity": 10000,
        "per_unit_price": 25
    }
];

const findByName = (name) => {
    const result = [];
    for (const product of products) {
        if(product.name.toLowerCase().includes(name.toLowerCase())){
            result.push(product);
        }
    }
    if (!result.length){
        return '0 matches found.'
    }
    return result;
}

console.log(findByName('screw'));
