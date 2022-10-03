const products = [
  {id:1 , title:'Intel I7', description:'a', price: 100, pictureUrl:'https://www.intel.la/content/dam/www/central-libraries/us/en/images/2022-08/rpl-desktop-chip-angle-3-white.png.rendition.intel.web.1648.927.png' ,stock:'n'},
  {id:2 , title:'AMD Ryzen 5', description:'a', price: 100, pictureUrl:' https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-5-3600-0.jpg' ,stock:'n'},
  {id:3 , title:'Nvidia rtx 3090', description:'a', price: 100, pictureUrl:' https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-rtx-3090-24gb-evga-ftw3-ultra-icx3-argb-0.jpg' ,stock:'n'},
  {id:4 , title:'AMD rx 6900', description:'a', price: 100, pictureUrl:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-radeon-rx-6900-xt-16gb-asrock-phantom-gaming-d-oc-0.jpg' ,stock:'n'},
];





export const getProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000);
  })

  return promise;
}

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find(product => product.id === id);
    setTimeout(() => {
      return resolve(result);
    })
  })

  return promise;
}