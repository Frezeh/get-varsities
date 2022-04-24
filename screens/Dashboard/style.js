import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInputContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 10px 16px;
    flexDirection: 'row',
    width: 220,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'gray',
    alignItems: 'center',
    paddingHorizontal: 2,
    marginBottom: 10,
    marginLeft: 15,
    marginTop: 20,
  },
  textInput: {
    width: '80%',
    height: '100%',
    marginLeft: 5,
    color: 'white'
  },
  verticalSepperatorLine: {
    height: 1,
    backgroundColor: 'rgba(50,52,54,0.2)',
    marginTop: 10,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    // flexWrap: 'wrap',
  },
  headerImage: {
    backgroundColor: '#ddd',
    width: 40,
    height: 40,
    borderRadius: 27.5,
    // overflow: 'hidden',
    marginLeft: 10,
  },
  headerTitleContainer: {
    padding: 10,
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerSubtitle: {
    color: '#252525',
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    color: 'grey',
    fontSize: 14,
  },
  date: {
    color: 'grey',
    fontSize: 12,
    alignSelf: 'flex-end',
    // marginLeft: 50,
  },
  messages: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#323436',
    margin: 5,
  },
  messageSubtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#A1A1A1',
    letterSpacing: 0.1,
    margin: 10,
  },
  solid: {
    width: 100,
    height: 40,
    backgroundColor: '#FD2E60',
    // padding: 15,
    justifyContent: 'center',
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 2,
    marginBottom: 10,
    marginLeft: 15,
    marginTop: 20,
  },
  solidText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.1,
    color: '#FFFFFF',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default styles;
