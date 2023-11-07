import Item from 'components/item'
const ItemList = ({ list }) => (
  <ul>
    {list.map(item => (
      <Item key={item.id} name={item.name} />
    ))}
  </ul>
)

export default ItemList
