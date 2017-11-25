import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, Badge } from 'native-base';

class HamburgerButton extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {
            buttonStyle
        } = styles;

        const customButtonStyles = this.props.customStyle ? this.props.customStyle : {};


        return (
            <View>
                <Button
                    onPress={ () => this.props.app_drawer.open() }
                    style={{ ...buttonStyle, ...customButtonStyles }}>

                    <Icon name="md-menu" size={30} color={ '#fff' } style={{ marginBottom: 2 }} />
                </Button>
            </View>
        )
    }

};

const styles = {
    buttonStyle: {
        backgroundColor: 'transparent',
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0
    }
};

const mapStateToProps = state => {

    const { root_reducer } = state;

    return { ...root_reducer };
};


export default connect(mapStateToProps)(HamburgerButton);