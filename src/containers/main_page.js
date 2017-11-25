import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import HamburgerButton from '../containers/common/hamburger';

import { initCurrentRoute } from '../actions/root_actions';

import { Content, Button, Header, Text, Left, Body, Right, Tab, Tabs } from 'native-base';
// import { Actions } from 'react-native-router-flux';
// import Icon from 'react-native-vector-icons/Ionicons';


import {
    COLOR_SF_RED,
    COLOR_SF_DARK_GRAY,
    COLOR_SF_GRAY_ULTRA_LIGHT
} from '../constants/colors';

// import {
//     SEARCH_DRAWER,
//     BUTTON_TRANSPARENT
// } from '../constants/styles';

class MainLanding extends Component {

    constructor(props) {
        super(props);


        this.state = {
            open_listing_search: false,
            search_drawer_inst: null
        };

    }

    componentWillMount() {
        this.props.initCurrentRoute(this.props.name);
    }


    renderHeaderControls() {

        return (
            <View style={{ flexDirection: 'row' }}>
                <HamburgerButton/>
            </View>
        )

    }

    renderHeader(){
        return (
            <Header hasTabs androidStatusBarColor="rgba(164, 43, 41, 0.7)" style={{ backgroundColor: COLOR_SF_RED, elevation: 0 }}>
                <Left>

                </Left>
                <Body style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>{ this.props.title }</Text>
                </View>
                </Body>
                <Right>
                    { this.renderHeaderControls() }
                </Right>

            </Header>
        )
    }

    render() {

        const {
            navTabs,
            navTabText,
            activeNavTab,
            activeNavTabText,
            bannerLogo
        } = style;

        return (
            <View style={{ flex: 1 }}>

                { this.renderHeader() }

                {/*/!*<TopImageBanner/>*!/*/}


                {/*<View style={{ flex: 1 }}>*/}

                    {/*<Tabs >*/}
                        {/*<Tab tabStyle={ navTabs } textStyle={ navTabText } activeTabStyle={ activeNavTab } activeTextStyle={ activeNavTabText } heading="Looking for a flat">*/}
                            {/*<SearcherTab parent_path={this.props.name}/>*/}
                        {/*</Tab>*/}
                        {/*<Tab tabStyle={ navTabs } textStyle={ navTabText } activeTabStyle={ activeNavTab } activeTextStyle={ activeNavTabText } heading="Getting paid when I move out">*/}
                            {/*<TenantTab/>*/}
                        {/*</Tab>*/}
                        {/*<Tab tabStyle={ navTabs } textStyle={ navTabText } activeTabStyle={ activeNavTab } activeTextStyle={ activeNavTabText } heading="Renting my property">*/}
                            {/*<LandlordTab/>*/}
                        {/*</Tab>*/}
                    {/*</Tabs>*/}

                {/*</View>*/}

                {/*<SocialShareFAB/>*/}


            </View>

        )
    }

}

const style = {
    navTabs: {
        backgroundColor: COLOR_SF_RED
    },
    navTabText: {
        color: COLOR_SF_GRAY_ULTRA_LIGHT,
        textAlign: 'center',
        fontSize: 14
    },
    activeNavTab: {
        // backgroundColor: COLOR_SF_RED
        backgroundColor: 'rgba(164, 43, 41, 0.7)'
    },
    activeNavTabText: {
        color: '#fff',
        // color: COLOR_SF_RED,
        textAlign: 'center',
        fontSize: 14
    },
    bannerLogo: {
        // flex: 1,
        height: 30,
        width: 120,
        // marginTop: -50
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    drawerStyles: {
        drawer: {
            shadowColor: '#000000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 10,
            backgroundColor: 'rgba(164, 43, 41, 0.9)'

        },
        main: {
            paddingBottom: 0
        }
    }
};


const mapStateToProps = state => {

    const { root_reducer } = state;

    return { ...root_reducer };
};

export default connect(mapStateToProps, { initCurrentRoute })(MainLanding);
