import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, ScrollView, Image} from 'react-native';
import Constants from './../utilities/Constants';
import {callRemoteMethod} from '../utilities/WebServiceHandler';
import Styles from './Styles';

const SecondScreen = ({route}) => {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = () => {
    const endpoint =
      Constants.URL.BASE_URL +
      'movie/' +
      route.params.id +
      '?' +
      Constants.URL.API_KEY;
    callRemoteMethod(
      this,
      endpoint,
      {},
      'getMovieDetailsCallback',
      'GET',
      true,
    );
  };

  getMovieDetailsCallback = response => {
    setMovieDetails(response);
  };

  return (
    <View style={{backgroundColor: Constants.Colors.Grey}}>
      <StatusBar
        backgroundColor={Constants.Colors.Cyan}
        barStyle="light-content"
      />
      <ScrollView style={Styles.movieCard} showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={Styles.image}
            source={{
              uri:
                movieDetails.poster_path != null
                  ? Constants.URL.IMAGE_URL + movieDetails.poster_path
                  : Constants.URL.PLACEHOLDER_IMAGE,
            }}
          />
          <Text style={Styles.movieTitle}>{movieDetails.original_title}</Text>
        </View>
        <View style={Styles.rowStyle}>
          <Text style={Styles.viewFlex}>{Constants.Strings.STATUS}</Text>
          <Text style={Styles.viewFlex}>{movieDetails.status}</Text>
        </View>
        <View style={Styles.rowStyle}>
          <Text style={Styles.viewFlex}>{Constants.Strings.RATINGS}</Text>
          <Text style={Styles.viewFlex}>{movieDetails.vote_average}</Text>
        </View>
        <View style={Styles.rowStyle}>
          <Text style={Styles.viewFlex}>{Constants.Strings.RUNTIME}</Text>
          <Text style={Styles.viewFlex}>{movieDetails.runtime} min</Text>
        </View>
        <View style={Styles.rowStyle}>
          <Text style={Styles.viewFlex}>{Constants.Strings.LANGUAGE}</Text>
          <Text style={Styles.viewFlex}>{movieDetails.original_language}</Text>
        </View>
        <View style={Styles.overViewMargin}>
          <Text style={{flex: 0.2}}>{Constants.Strings.OVERVIEW}</Text>
        </View>
        <View style={Styles.overViewMargin}>
          <Text style={Styles.overViewStyle}>{movieDetails.overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SecondScreen;
