import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
        <List component="nav">
            <ListItem button onClick={()=> console.log('featured')}>
                Event starts end
            </ListItem>
            <ListItem button onClick={()=> console.log('featured')}>
                Info
            </ListItem>
            <ListItem button onClick={()=> console.log('featured')}>
                Highlights
            </ListItem>
            <ListItem button onClick={()=> console.log('featured')}>
                Pricing
            </ListItem>
            <ListItem button onClick={()=> console.log('featured')}>
                Location
            </ListItem>

        </List>
        </Drawer>
    );
};

export default SideDrawer;