export const categories=['All creations','Birthday Cakes','Wedding Cakes','Custom Orders','Gift Hampers','Cupcakes & Treats'];
export const cakesData=[
{id:'rose',name:'A little romance',category:'Custom Orders',image:'rose-cake',description:'Roses, delicate pearls and gold-toned details for a beautiful celebration.',price:4500},
{id:'heart',name:'Love, in every detail',category:'Birthday Cakes',image:'birthday-heart',description:'A heart-filled birthday arrangement with matching cupcakes.',price:3500},
{id:'garden',name:'The flower garden',category:'Birthday Cakes',image:'garden-cake',description:'A letter-shaped celebration dressed in colourful floral decoration.',price:5500},
{id:'silver',name:'Made just for you',category:'Custom Orders',image:'silver-cake',description:'A personalised statement cake inspired by the things they love.',price:4500},
{id:'chocolate',name:'Chocolate wishes',category:'Birthday Cakes',image:'chocolate-cake',description:'A chocolate celebration with a handwritten birthday message.',price:3000},
{id:'hamper',name:'The thoughtful gift',category:'Gift Hampers',image:'gift-hamper',description:'Treats and personal touches for a special someone.',price:4500},
{id:'bouquet',name:'A sweeter bouquet',category:'Gift Hampers',image:'chocolate-bouquet',description:'Favourite chocolates, thoughtfully wrapped for a sweet surprise.',price:2500},
{id:'treats',name:'Little moments of joy',category:'Cupcakes & Treats',image:'gift-collection',description:'Cakes, cupcakes and treats for a memorable little moment.',price:2500},
{id:'giftbox',name:'All their favourites',category:'Gift Hampers',image:'hamper-detail',description:'A personal gift box designed around their favourite treats.',price:3500}];
export const offerings=[{name:'Basic custom cake',servings:'2–4 servings',price:2500,image:'chocolate-cake'},{name:'Premium custom cake',servings:'5–8 servings',price:4500,image:'rose-cake'},{name:'Luxury custom cake',servings:'10+ servings',price:7500,image:'garden-cake'},{name:'Gift hampers',servings:'Tailored to your occasion',price:3500,image:'gift-hamper'}];
export const flavors=['Vanilla','Chocolate','Red velvet','Coffee'];
export const money=n=>'PKR '+Number(n).toLocaleString('en-PK');
export const estimate=o=>(o.type==='Gift hamper'?3500:o.type==='Cupcakes & treats'?2500:({small:2500,medium:4500,large:7500}[o.size]||2500))+(o.finish==='Floral & gold details'?1500:o.finish==='Personalised topper'?800:0)+(o.flavor==='Red velvet'?500:0);
