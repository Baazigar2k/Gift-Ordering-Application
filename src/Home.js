import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637__480.jpg"
          alt="ShopNSurprise"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Gold Floral Vanddanam"
            price={311.96}
            rating={5}
            image="https://www.wellendorff.com/gfx_content/ringe/brillant-romeo/470x320-Ring-Brillant-Romeo-WG.png"
          />
          <Product
            id="49538094"
            title="Classic Combination Tshirt men wear"
            price={29.0}
            rating={4}
            image="https://cpimg.tistatic.com/04253906/b/4/Cricket-T-Shirt-w410.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="
            Riiffs Incense Gold Perfume For Men And Women 100 ML EDP at Rs 1400/piece | Fragrance Perfume"
            price={199.99}
            rating={3}
            image="https://5.imimg.com/data5/PN/HZ/HQ/SELLER-11554839/riiffs-incense-gold-perfume-for-men-and-women-100-ml-edp-500x500.png"
          />
          <Product
            id="23445930"
            title="19323 White Canvas Shoes"
            price={98.99}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0590/3225/products/7_clipped_rev_4_grande.png?v=1553526865"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://resource.logitech.com/w_420,h_420,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mobility/slim-folio-pro/gallery/slim-folio-pro-gallery-1-01.png?v=1"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Cartier Tank Men Wear Watch 75%"
            price={194.98}
            rating={4}
            image="https://www.thewatchblog.co.uk/wp-content/uploads/2016/11/152.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
