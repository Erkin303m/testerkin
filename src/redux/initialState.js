const initialState = {
    shoes: [
        { name: "Nike 350", price: 360, like: false, korzina: false, img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46a4791f-2429-4e06-86be-bb445f797ac5/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-bolt-6X41B1.png' },
        { name: "Adidas 350", price: 360, like: true, korzina: false, img:"https://content.rozetka.com.ua/goods/images/big/161869240.jpg"},
        { name: "Nike Air", price: 360, like: false, korzina: false, img: "https://stiliaga.com.ua/pics/prod/big/1391_48525.jpg" },
        { name: "Nike 350", price: 360, like: false, korzina: false, img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2fa5f6af-5982-4b42-8370-34c300aadcd2/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B1%D1%83%D1%82%D1%81%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%B3%D1%80%D1%8B-%D0%BD%D0%B0-%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC-%D0%B3%D0%B0%D0%B7%D0%BE%D0%BD%D0%B5-mercurial-superfly-8-elite-km-ag-M5ftqv.png"},
        { name: "Nike 350", price: 360, like: false, korzina: false, img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e09aabb2-e95f-4433-be1d-ea7adeff4897/%D0%B1%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-zoom-freak-3-mqwPKf.png" },
        { name: "Nike 350", price: 360, like: false, korzina: false, img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46a4791f-2429-4e06-86be-bb445f797ac5/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-bolt-6X41B1.png' },
        { name: "Adidas 350", price: 360, like: true, korzina: false, img: "https://content.rozetka.com.ua/goods/images/big/161869240.jpg" },
        { name: "Nike Air", price: 360, like: false, korzina: false, img: "https://stiliaga.com.ua/pics/prod/big/1391_48525.jpg" },
        { name: "Nike 350", price: 360, like: false, korzina: false, img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2fa5f6af-5982-4b42-8370-34c300aadcd2/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B1%D1%83%D1%82%D1%81%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%B3%D1%80%D1%8B-%D0%BD%D0%B0-%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC-%D0%B3%D0%B0%D0%B7%D0%BE%D0%BD%D0%B5-mercurial-superfly-8-elite-km-ag-M5ftqv.png" },
        { name: "Nike 350", price: 360, like: false, korzina: false, img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e09aabb2-e95f-4433-be1d-ea7adeff4897/%D0%B1%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-zoom-freak-3-mqwPKf.png" }
    ]
};

export default initialState;