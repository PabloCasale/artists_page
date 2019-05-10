import React from 'react';

import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElements = (element) => {
        scroller.scrollTo(element,{
            duration:1000,
            delay:100,
            smooth:true,
            offset:-80
        });props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
        <List component="nav">
            <ListItem button onClick={()=> scrollToElements('featured')}>
                <i class="fa fa-home fa-2x" aria-hidden="true"></i>
            </ListItem>
            <ListItem button onClick={()=> scrollToElements('info')}>
                <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>
            </ListItem>
            <ListItem button onClick={()=> scrollToElements('highlights')}>
            <i class="fas fa-tags fa-2x"></i>
            </ListItem>
            <ListItem button onClick={()=> scrollToElements('pricing')}>
            <i class="fas fa-money-bill-wave fa-2x"></i>
            </ListItem>
            <ListItem button onClick={()=> scrollToElements('location')}>
            <i class="fas fa-search-location fa-2x"></i>
            </ListItem>

        </List>
        </Drawer>
    );
};

export default SideDrawer;