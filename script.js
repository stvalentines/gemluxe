const sweaters = [
    {
      image: "001.JPG",
      description: "Моносерьга 'Цветочек'",
      price: 800
    },
    {
      image: "002.JPG",
      description: "Моносерьга 'Призрак'",
      price: 850
    },
    {
      image: "003.JPG",
      description: "Чокер с цветочком",
      price: 1000
    },
    {
      image: "004.JPG",
      description: "Кольцо 'Сердечко'",
      price: 1200
    },
    {
      image: "005.JPG",
      description: "Кольцо 'Котик'",
      price: 1000
    },
    {
      image: "006.JPG",
      description: "Кольцо из уф. смолы",
      price: 1500
    },
    {
        image: "007.JPG",
        description: "Моносерьга-сборка",
        price: 650
      },
      {
        image: "008.JPG",
        description: "Моносерьга с ракушкой",
        price: 800
      },
      {
        image: "009.JPG",
        description: "Моносерьга 'Котик' со звёздочкой",
        price: 850
      }
      
  ];
  
  // Функция для создания блока с информацией об украшении
  function createProductBlock(sweater) {
    const block = document.createElement("div");
    block.classList.add("product-block");
  
    const image = document.createElement("img");
    image.src = sweater.image;
    block.appendChild(image);
  
    const description = document.createElement("h3");
    description.textContent = sweater.description;
    block.appendChild(description);
  
    const price = document.createElement("p");
    price.textContent = `Цена: ${sweater.price} руб.`;
    block.appendChild(price);
    return block;}
    const productContainer = document.getElementById("product-container");

sweaters.forEach(sweater => {
  const productBlock = createProductBlock(sweater);
  productContainer.appendChild(productBlock);
});