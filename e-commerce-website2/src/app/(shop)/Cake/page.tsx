import Cards from '@/components/Cards'
import React from 'react'
import Cake1 from "../../(public)/cake1-img.jpg";
import Cake2 from "../../(public)/cake2-img.jpg";
import Cake3 from "../../(public)/cake3-img.jpg";
import Cake4 from "../../(public)/cake4-img.jpg";
import Cake5 from "../../(public)/cake5-img.jpeg";
import Cake6 from "../../(public)/cake6-img.jpg";
import Cake7 from "../../(public)/cake7-img.jpg";
import Cake8 from "../../(public)/cake8-img.jpg";
function Cake() {
  return (
    <div>
      <h1 id='cake-heading'>Cakes</h1>
        {/* 1st row */}
        <div id='cakes'>
      <Cards
      imageSource={Cake1}
      cakeName='Chocolate CupCakes'
      cakeDescription='Tasty and Delicious cupCakes fills with Chocolate'
      />
       <Cards
      imageSource={Cake4}
      cakeName='Christmas Cakes'
      cakeDescription='Festive and delightful Christmas cake, bursting with holiday flavors and joy'
      />
       <Cards
      imageSource={Cake3}
      cakeName='Red Velvet CupCakes'
      cakeDescription='Luxurious and moist Red Velvet Cupcake with a hint of cocoa and creamy frosting'
      />
       <Cards
      imageSource={Cake2}
      cakeName='Chocolate CupCakes'
      cakeDescription='Soft and fluffy vanilla cake topped with colorful, festive sprinkles for a delightful treat'
      />
    </div>

    {/* 2nd row */}
    <div id='cakes'>
      <Cards
      imageSource={Cake5}
      cakeName='Strawberry Cake'
      cakeDescription='Sweet and moist strawberry cake, layered with fresh strawberry flavor—perfect for celebrating special moments.'
      />
       <Cards
      imageSource={Cake6}
      cakeName='Purple Macrons Cakes'
      cakeDescription='Delicate and decadent purple macarons, stacked on a rich, creamy cake an elegant treat for any occasion'
      />
       <Cards
      imageSource={Cake8}
      cakeName='Heart Shaped Strawbery Cake'
      cakeDescription='Rich and indulgent dark chocolate cake, filled with fresh strawberries and shaped with love perfect for any romantic celebration'
      />
       <Cards
      imageSource={Cake7}
      cakeName='Rainbow Cake'
      cakeDescription='Vibrant layers of colorful cake, stacked together with creamy frosting bringing joy and sweetness to every bite'
      />
    </div>
    </div>
  )
}

export default Cake
