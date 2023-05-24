import React, { useRef } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';

const LeftDrawer = () => {
  const drawerWidth = 300; // Width of the drawer
  const drawerRef = useRef(null); // Create a ref for the drawer

  // Function to open the drawer
  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  // Function to close the drawer
  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={drawerWidth}
      drawerPosition={'left'}
      renderNavigationView={() => (
        <View>
          <Text>Drawer Content</Text>
        </View>
      )}
    >
      <View>
        <Text onPress={openDrawer}>Open Drawer</Text>
      </View>
      <View>
        <Text>Main Content</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

export default LeftDrawer;
