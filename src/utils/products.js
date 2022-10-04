const products = [
  {id:1 , title:'Intel I7', category:'Proce', description:'a', price: 100, pictureUrl:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18879_Procesador_Intel_Core_i7_10700K_5.1GHz_Turbo_1200_Comet_Lake_c3f07566-med.jpg' ,stock:'n'},
  {id:2 , title:'AMD Ryzen 5', category:'Proce', description:'a', price: 100, pictureUrl:' https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22254_Procesador_AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-med.jpg' ,stock:'n'},
  {id:3 , title:'Nvidia rtx 3090', category:'GPU', description:'a', price: 100, pictureUrl:' https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32388_Placa_de_Video_Zotac_GeForce_RTX_3090_24GB_GDDR6X_Trinity_c3f00609-med.jpg' ,stock:'n'},
  {id:4 , title:'AMD rx 6900', category:'GPU', description:'a', price: 100, pictureUrl:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27351_Placa_de_Video_XFX_Radeon_RX_6800_XT_CORE_16GB_GDDR6_Speedster_MERC_319_dd36dcea-med.jpg' ,stock:'n'},
];



export const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000)
  })

  return promise
};

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id))
    setTimeout(() => {
      return resolve(result);
    }, 2000)
  })

  return promise
};

export const getProductsByCategory = (categoryId) => {
  const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
      return resolve(results);
    }, 2000)
  })

  return promise
};