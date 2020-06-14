import React, {Component} from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

class Contacts extends Component{
    state ={
        latitude: 50.4501,
        longitude: 30.5234
    };
    componentDidMount() {
        Geolocation.getCurrentPosition((position) => {
            console.log(position);
            this.setState({
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
            })
        }, (err) => {
            console.log(err);
        }, { enableHighAccuracy: true, timeout: 2000, maximumAge: 3600000 });

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
