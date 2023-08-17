import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {callRemoteMethod} from '../utilities/WebServiceHandler';
import Constants from './../utilities/Constants';
import {renderIf} from '../utilities/CommonMethods';
import Styles from './Styles';
import {customAlert} from './../utilities/CommonMethods';

const MainScreen = ({navigation}) => {
  const [movieList, setMovieList] = useState([]);
  const [searchText, setSearchText] = useState('a');
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    searchButtonPressed();
  }, []);

  const searchButtonPressed = () => {
    if (searchText.length) {
      const endpoint =
        Constants.URL.BASE_URL +
        Constants.URL.SEARCH_QUERY +
        searchText +
        '&' +
        Constants.URL.API_KEY;
      callRemoteMethod(this, endpoint, {}, 'searchCallback', 'GET', true);
    } else {
      customAlert(Constants.Strings.MSG);
    }
  };

  searchCallback = response => {
    console.log('response--->', response);
    if (response.results.length) {
      setNoData(false);
      setMovieList(response.results);
    } else {
      setMovieList([]);
      setNoData(true);
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={Constants.Colors.Cyan}
        barStyle="light-content"
      />
      <View style={{backgroundColor: Constants.Colors.Grey}}>
        <View style={Styles.cardView}>
          <View style={{margin: 10}}>
            <TextInput
              placeholder={Constants.Strings.PLACEHOLDER}
              onChangeText={text => setSearchText(text)}
              underlineColorAndroid={Constants.Colors.Transparent}
              style={Styles.textInput}
            />
            <View style={Styles.textView} />
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => searchButtonPressed()}
              style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>
                {Constants.Strings.SEARCH_BUTTON}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {renderIf(
        noData,
        <Text style={{textAlign: 'center'}}>No data found.</Text>,
      )}
      {renderIf(
        movieList.length,
        <ScrollView
          style={Styles.movieList}
          showsVerticalScrollIndicator={false}>
          <View>
            {movieList.map(function (obj, i) {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SecondScreen', {id: obj.id})
                  }
                  key={i}
                  style={Styles.touchableStyle}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={Styles.image}
                      source={{
                        uri:
                          obj.poster_path != null
                            ? Constants.URL.IMAGE_URL + obj.poster_path
                            : Constants.URL.PLACEHOLDER_IMAGE,
                      }}
                    />
                    <View style={Styles.columnView}>
                      <Text numberOfLines={3} style={Styles.titleView}>
                        {obj.original_title}
                      </Text>
                      <View style={Styles.rowView}>
                        <Text>{Constants.Strings.RELEASE_DATE}</Text>
                        <Text>{obj.release_date}</Text>
                      </View>
                      <View style={Styles.rowView}>
                        <Text numberOfLines={5} style={Styles.overViewStyle}>
                          {obj.overview}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={Styles.lineView} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>,
      )}
    </View>
  );
};

export default MainScreen;
