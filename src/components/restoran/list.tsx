import { useState, useEffect } from 'react';
import { List, ListItem, Stack, Typography } from '@mui/material';
import axios from 'axios';

interface MenuListProps {
  restaurantName: string;
  menuType: 'makanan' | 'minuman';
}

interface RestaurantData {
  makanan: string;
  minuman: string;
}

export default function MenuList({ restaurantName, menuType }: MenuListProps) {
  const [menuItems, setMenuItems] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<RestaurantData>(`https://tripselbe.fly.dev/restoran/${restaurantName}`);
        console.log('Response:', response.data);
        const data = response.data;
        // Extract the menu items based on the menuType prop
        const items = data[menuType].split(',').map(item => item.trim());
        console.log('Menu items:', items);
        setMenuItems(items);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };
  
    fetchData();
  }, [restaurantName, menuType]);

  return (
    <Stack height={'610px'} width={'100%'} border={' 2.5px solid var(--Primary-Color---Red-3, #FF010C);'} borderRadius={'40px'} sx={{backgroundColor:'#EC000C'}}>
      <Typography fontSize={'42px'} fontWeight={700} textAlign={'center'} color={'#FFF'} paddingTop={'20px'} paddingBottom={'20px'}>
        {menuType}
      </Typography>
      <Stack justifyContent={'center'} alignItems={'center'} height={'100%'} sx={{backgroundColor:'white'}} borderRadius={' 0 0 40px 40px'}>
        <List sx={{justifyContent:'center', alignItems:'center'}}>
          {menuItems.map((item, index) => (
            <ListItem key={index} sx={{justifyContent:'center', alignItems:'center'}}>
              <Typography fontSize={'38px'} fontWeight={400} color={'#04214C'} textAlign={'center'}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
}
