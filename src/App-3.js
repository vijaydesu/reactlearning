/*
For each loop
And if condition
*/
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


export default function MyProfile() {
  const listItems = products.map(product =>
    <li key={product.id}
    style={{
      color : product.isFruit ? 'magenta' : 'blue'
    }}>
      {product.title}
    </li>
  )
  return (
    <>
    <h1>Product List - {products.length}</h1>
   <ul>{listItems}</ul>   
    </>
  );
}
