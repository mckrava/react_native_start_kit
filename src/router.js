import React, { Component } from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';


import MainLanding from './containers/main_page';

import { Container } from 'native-base';
import Drawer from 'react-native-drawer';
import SideMenu from './containers/common/side_menu';
import { connect } from 'react-redux';
import { appDrawerSet } from './actions/root_actions';


import {
    COLOR_SF_DARK_GRAY
} from './constants/colors';

class RouterComponent extends Component {

    render(){

        return (
            <Container>

                <Drawer
                    ref={(ref) => { this.props.appDrawerSet(ref) }}
                    open={false}
                    type="overlay"
                    onOpen={() => { console.log('drawer OPENED'); }}
                    onClose={() => { console.log('drawer CLOSED'); }}
                    content={<SideMenu />}
                    tapToClose
                    openDrawerOffset={0.2}
                    panCloseMask={0.2}
                    negotiatePan
                    styles={ drawerStyles }
                    tweenHandler={(ratio) => ({
                        main: { opacity: Math.max(0.54, 1 - ratio) }
                    })}
                >

                    <Router sceneStyle={{ backgroundColor: '#f1f1f1' }}>
                        <Scene key="root" >
                            <Scene key="main">
                                <Scene
                                    key="mainLanding"
                                    component={MainLanding}
                                    title="TestApp"
                                    hideNavBar={true}
                                    initial
                                />
                            </Scene>
                        </Scene>
                    </Router>
                </Drawer>
            </Container>

        );
    }

};

const drawerStyles = {
    drawer: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        backgroundColor: '#000',
        elevation: 10
    },
    main: { paddingLeft: 0 }
};

export default connect(null, { appDrawerSet })(RouterComponent);

