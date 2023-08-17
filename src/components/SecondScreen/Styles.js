import {StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
  movieCard: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'white',
    elevation: 10,
  },
  image: {
    width: 160, 
    height: 220, 
    marginLeft: 5, 
    margin: 20
  },
  rowStyle: {
    flexDirection: 'row', 
    margin: 10
  },
  movieTitle: {
    fontSize: 16, 
    margin: 5, 
    fontWeight: 'bold'
  },
  viewFlex: {
    flex: 0.5
  },
  overViewMargin: {
    margin: 10
  },
  overViewStyle: {
    flexWrap: 'wrap', 
    flex: 0.8
  }
});
