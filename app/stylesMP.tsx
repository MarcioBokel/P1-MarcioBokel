import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 5,
      paddingHorizontal: 20
  },

header: {
  width: '100%',
  height: 80,
  paddingTop: 32,
  marginBottom: 0,
  backgroundColor: '#00008B',
  alignItems: 'center'
},

headerText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
  verticalAlign: 'auto'
},

containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 1
},

buttonDados: {
  width: '50%',
  height: 60,
  backgroundColor: '#A9A9A9',
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderRadius: 10

},

buttonTextDados: {
  color: 'white',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 'bold'
},

buttonMeuPlano: {
  width: '50%',
  height: 60,
  backgroundColor: '#FFFFFF',
  paddingVertical: 7,
  paddingHorizontal: 20,
  borderRadius: 10,
  borderColor: '#A9A9A9',
  borderWidth: 1

},

buttonTextMeuPlano: {
  color: '#4169E1',
  justifyContent: 'center',
  textAlign: 'auto',
  fontSize: 18,
  fontWeight: 'bold',
  paddingTop: 8
},

BoxMeuPlano: {
  width: '100%',
  height: 80,
  paddingTop: 20,
  marginBottom: 0,
  backgroundColor: '#00008B',
  alignItems: 'center'
},

BoxMeuPlanoTextoMeuPlano: {
  color: '#808080',
  textAlign: 'auto',
  fontSize: 12,
  fontWeight: 'bold',
  paddingTop: 0
},

BoxMeuPlanoTextoTimControle: {
  color: 'white',
  textAlign: 'auto',
  fontSize: 18,
  fontWeight: 'bold',
  paddingTop: 0
},

BoxAppsInclusos: {
  width: '100%',
  height: 50,
  paddingTop: 2,
  marginBottom: 0,
  backgroundColor: 'white',
  borderRadius: 10,
  borderColor: '#A9A9A9',
  borderWidth: 1

},

BoxAppsInclusosText: {
  color: 'black',
  textAlign: 'left',
  textAlignVertical: 'center',
  fontSize: 14,
  fontWeight: 'bold',
  paddingTop: 12,
  paddingLeft: 20
},

BoxMessenger: {
  //flex:1,
  flexDirection: "row",
  justifyContent: 'flex-start',
  width: '100%',
  height: 50,
  paddingTop: 8,
  marginBottom: 4,
  backgroundColor: 'white',
  borderRadius: 10,
  borderColor: '#A9A9A9',
  borderWidth: 1
},

imageMessenger: {
  width: 50,
  height: 30,
  justifyContent: 'space-between',
  resizeMode: 'contain',
  paddingHorizontal:0,
  paddingVertical: 35,
  paddingBottom: 0,
  marginLeft: 5,
  position: 'absolute'
},

BoxMessengerText: {
  color: 'black',
  fontSize: 14,
  fontWeight: 'bold',
  position: 'absolute',
  paddingLeft: 60,
  paddingVertical: 1
  
},

BoxMessengerSubText: {
  color: 'black',
  fontSize: 12,
  fontWeight: 'bold',
  position: 'absolute',
  paddingLeft: 60,
  paddingVertical: 16
  
},

BoxTelegram: {
 // flex:1,
  flexDirection: "row",
  //justifyContent: 'flex-start',
  width: '100%',
  height: 50,
  paddingTop: 8,
  marginBottom: 4,
  backgroundColor: 'white',
  borderRadius: 10,
  borderColor: '#A9A9A9',
  borderWidth: 1
},

imageTelegram: {
  width: 50,
  height: 30,
  justifyContent: 'space-between',
  resizeMode: 'contain',
  paddingHorizontal:0,
  paddingVertical: 35,
  paddingBottom: 0,
  marginLeft: 5,
  marginTop: 0,
  marginBottom: 8,
  position: 'absolute'
},

BoxTelegramText: {
  color: 'black',
  fontSize: 14,
  fontWeight: 'bold',
  position: 'absolute',
  paddingLeft: 60,
  paddingVertical: 2
  
},

BoxTelegramSubText: {
  color: 'black',
  fontSize: 12,
  fontWeight: 'bold',
  position: 'absolute',
  paddingLeft: 60,
  paddingVertical: 16
  
},

BoxFacebook: {
  
  flexDirection: "row",
  //justifyContent: 'flex-start',
  width: '100%',
  height: 50,
  paddingTop: 8,
  marginBottom: 4,
  backgroundColor: 'white',
  borderRadius: 10,
  borderColor: '#A9A9A9',
  borderWidth: 1
},

imageFacebook: {
  width: 40,
  height: 0,
  justifyContent: 'space-between',
  resizeMode: 'contain',
  paddingHorizontal:0,
  paddingVertical: 35,
  paddingBottom: 0,
  marginLeft: 10,
  marginTop: 6,
  position: 'absolute'
},

BoxFacebookText: {
  color: 'black',
  fontSize: 14,
  fontWeight: 'bold',
  position: 'absolute',
  paddingLeft: 60,
  paddingVertical: 10
  
},

BoxFacebookSubText: {
  color: 'black',
  fontSize: 12,
  fontWeight: 'bold',
  position: 'absolute',
  paddingLeft: 60,
  paddingVertical: 25
  
},

rodape: {
  flex:1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  height: 80,
  paddingTop: 1,
  marginBottom: 0,
  backgroundColor: '#FFFFFF',
  alignItems: 'center'
},

imageHome: {
  width: 50,
  height: 50,
 justifyContent: 'space-between',
  //resizeMode: 'contain',
  position: 'relative',
  marginTop:2,
  marginLeft: 0
},

imageContas: {
  width: 50,
  height: 50,
  justifyContent: 'space-between',
  //resizeMode: 'contain',
  position: 'relative',
  marginTop:2,
  marginLeft: 0
},

imagePerfil: {
  width: 45,
  height: 45,
  justifyContent: 'space-between',
  //resizeMode: 'contain',
  position: 'relative',
  marginTop:2,
  marginLeft: 0
},

imageMenu: {
  width: 50,
  height: 50,
  justifyContent: 'space-between',
  //resizeMode: 'contain',
  position: 'relative',
  marginTop:2,
  marginLeft: 0
},
    
});