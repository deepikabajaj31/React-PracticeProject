
import classes from './AvailableItems.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_Items = [
  {
    id: 'm1',
    name: 'Classic Coffee Powder',
    description: 'NESCAFE brings you coffee at its Best',
    price: 6.00,
  },
  {
    id: 'm2',
    name: 'Mother Dairy Toned Milk(500 ml)',
    description: 'Mother Dairy ensures the quality and purity of milk ',
    price: 0.32,
  },
  {
    id: 'm3',
    name: 'Ashirvaad Atta(5 kg)',
    description: 'Healthy,contains 0% Maida and is 100% Sampoorna Atta',
    price: 4.00,
  },
  {
    id: 'm4',
    name: 'Rozana Basmati Rice(5 kg)',
    description: 'Healthy...Tasty',
    price: 5.97,
  },
  {
    id: 'm5',
    name: 'Onion,Potato,Tomato',
    description: 'Combo-1kg each',
    price: 1.40,
  },
  {
    id: 'm6',
    name: ' Fortune Pure Mustard Oil',
    description: 'Keeps your heart healthy',
    price: 2.18,
  },


];

const AvailableItems = () => {
  const itemsList = DUMMY_Items.map((item)=><MealItem
   key ={item.id}
   id={item.id}
    name={item.name} 
    description ={item.description}
    price ={item.price}/>);
  return <section className={classes.items}>
    <Card>
    <ul>
    {itemsList}
    </ul>
    </Card>
    
  </section>
};

export default AvailableItems;