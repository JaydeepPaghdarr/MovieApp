import { StyleSheet } from "react-native";
import Constants from './../utilities/Constants';

export default (Styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    margin: 10,
    elevation: 5
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    backgroundColor: "#02ADAD",
    width: 80,
    borderRadius: 10
  },
  buttonText: { 
    color: "white", 
    margin: 5, 
    alignSelf: "center" 
  },
  lineView: { 
    height: 2, 
    marginTop: 10, 
    backgroundColor: "#EDEDED" 
  },
  movieList: { 
    marginLeft: 10, 
    marginRight: 10, 
    backgroundColor: "white", 
    elevation: 10 
  },
  image: { 
    width: 120, 
    height: 180, 
    marginLeft: 5, 
    marginRight: 20 
  },
  rowView: { 
    flexDirection: "row", 
    marginTop: 10 
  },
  titleView: {
    fontSize: 17, 
    width: '70%'
  },
  touchableStyle: {
    margin: 10, 
    marginBottom: 5
  },
  textInput: {
    height: 50, 
    fontSize: 18
  },
  textView: {
    height: 1,
    backgroundColor: Constants.Colors.Grey,
    margin: 0,
  },
  columnView: {
    flexDirection: 'column', 
    width:"75%"
  },
  overViewMargin: {
    margin: 10
  },
  overViewStyle: {
    flexWrap: 'wrap', 
    flex: 0.8
  }
}));
