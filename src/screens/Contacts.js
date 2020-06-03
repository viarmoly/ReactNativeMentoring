import React, {Component} from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


class Contacts extends Component{
    state ={
        latitude: 50.4501,
        longitude: 30.5234
    }
    componentDidMount() {
        Geolocation.getCurrentPosition(info => this.setState({
            latitude:info.coords.latitude,
            longitude:info.coords.longitude
        }));

    }

    render(){
        const {latitude, longitude} = this.state;
        return(
            <>
                <MapView style={{flex:1}}
                         showsUserLocation={true}
                         followsUserLocation={true}
                         initialRegion={{
                             latitude: latitude,
                             longitude: longitude,
                             latitudeDelta: .005,
                             longitudeDelta: .005
                         }}
                />
            </>
        )
    }
};

export default Contacts;
