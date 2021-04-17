module.exports = class DB {
  async getProduts() {
    return Promise.resolve(
      [
        {
          "name": "FAKE Apple iPhone XR (Red, 128 GB)",
          "specs": "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor",
          "price": "$750",
          "image": "https://i.imgur.com/KFojDGa.jpg"
        },
        {
          "name": "FAKE Apple iPhone XS (Silver, 64 GB)",
          "specs": "64 GB ROM | 14.73 cm (5.8 inch) Super Retina HD Display 12MP + 12MP | 7MP Front Camera A12 Bionic Chip Processor",
          "price": "$900",
          "image": "https://i.imgur.com/KFojDGa.jpg"
        },
        {
          "name": "FAKE Apple iPhone XS Max (Gold, 64 GB)",
          "specs": "64 GB ROM | 16.51 cm (6.5 inch) Super Retina HD Display 12MP + 12MP | 7MP Front Camera A12 Bionic Chip Processor",
          "price": "$900",
          "image": "https://i.imgur.com/KFojDGa.jpg"
        },
        {
          "name": "FAKE OnePlus 7 Pro (Almond, 256 GB)",
          "specs": "Rear Camera|48MP (Primary)+ 8MP (Tele-photo)+16MP (ultrawide)| Front Camera|16 MP POP-UP Camera|8GB RAM|Android pie",
          "price": "$1,200",
          "image": "https://i.imgur.com/6IUbEME.jpg"
        }
      ]
    )
  }
}