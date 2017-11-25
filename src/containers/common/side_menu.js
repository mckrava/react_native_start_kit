

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Thumbnail, Button, Left, Body, Right, Badge, Text, List, ListItem, Footer, FooterTab } from 'native-base';

import {
    COLOR_SF_RED,
    COLOR_SF_GRAY_ULTRA_LIGHT,
    COLOR_SF_GRAY,
    COLOR_SF_DARK_GRAY,
    COLOR_SF_RED_TRANSPARENT,
    COLOR_SF_RED_LIGHT_TRANSPARENT
} from '../../constants/colors';

class SideMenu extends Component  {

    constructor(props){
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {

    }

    onMenuClick(callback){
        this.props.app_drawer.close();
        callback();
    }

    renderMenuItem(title, route_key, isBadged){


        const {
            menuItem,
            menuItemActive,
            menuItemText,
            menuItemTextActive
        } = styles;

        // let renderBedge = () => {
        //     if (isBadged && this.props.favourite_listings_scope.length > 0) {
        //         return (
        //             <Badge style={{ position: 'absolute', top: -3, right: 5 }}>
        //                 <Text>
        //                     { this.props.favourite_listings_scope.length }
        //                 </Text>
        //             </Badge>
        //         )
        //     } else {
        //         return (
        //             <View></View>
        //         )
        //     }
        // };

        if (this.props.current_route === route_key) {
            return (
                <ListItem style={menuItemActive}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={menuItemTextActive}>{ title }</Text>
                        {/*{ renderBedge() }*/}
                    </View>
                </ListItem>
            );
        } else {
            return (
                <ListItem style={menuItem}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={menuItemText}>{ title }</Text>
                        {/*{ renderBedge() }*/}
                    </View>
                </ListItem>
            );
        }

    }

    render(){

        // const drawer = context.drawer;

        let {
            mainContainer,
            drawerHeader,
            drawerBody,
            menuItemText,
            drawerHeaderLogo
        } = styles;

        return (
            <ScrollView style={ mainContainer }>

                <View style={ drawerHeader }>
                    {/*<Image*/}
                        {/*style={ drawerHeaderLogo }*/}
                        {/*source={ require("../../img/logo_transparent_white.png") }*/}
                        {/*resizeMode={Image.resizeMode.contain}*/}
                    {/*/>*/}
                </View>

                <View style={ drawerBody }>
                    <List>
                        <TouchableWithoutFeedback onPress={ () => this.onMenuClick( () => Actions.main() ) }>
                            { this.renderMenuItem('Home', 'mainLanding') }
                        </TouchableWithoutFeedback>

                    </List>
                </View>
            </ScrollView>
        )
    }

};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    drawerHeader: {
        height: 150,
        flex: 1,
        backgroundColor: COLOR_SF_RED
    },
    drawerBody: {
        backgroundColor: '#fff',
        flex: 1
    },
    menuItem: {
        marginLeft: 0,
        paddingLeft: 17
    },
    menuItemActive: {
        marginLeft: 0,
        paddingLeft: 17,
        backgroundColor: 'rgba(164, 43, 41, 0.1)'
    },
    menuItemText: {
        color: COLOR_SF_DARK_GRAY,
    },
    menuItemTextActive: {
        color: COLOR_SF_RED,
        fontWeight: '600'
    },
    drawerHeaderLogo: {
        flex: 1,
        // height: 20,
        width: null,
        marginLeft: 40,
        marginRight: 40
    }
});


const mapStateToProps = state => {

    const { root_reducer } = state;

    return { ...root_reducer };
};

export default connect(mapStateToProps)(SideMenu);
