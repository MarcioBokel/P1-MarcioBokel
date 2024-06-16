import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 5,
      paddingHorizontal: 20
  },

  containerNumeroCelular: {
      flex: 1,
      flexDirection: "row",
      backgroundColor:'#dcdcdc',
      color: '#dcdcdc',
      padding: Platform.OS === 'ios' ? 15 : 10,
      marginTop: 10,
      borderRadius: 7
      },

      containerSenhaCelular: {
        flex: 1,
        flexDirection: "row",
        backgroundColor:'#dcdcdc',
        color: '#dcdcdc',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 20,
        borderRadius: 7
        },

    image: {
    width: 230,
    height: 100,
    marginLeft:25,
    resizeMode: 'contain',
    justifyContent: 'center'
    },

    inputSenha: {
      flex: 1,
      flexDirection: "row",
      backgroundColor:'#dcdcdc',
      color: '#dcdcdc',
      fontSize: 15,
      padding: Platform.OS === 'ios' ? 15 : 10,
      marginTop: 0,
      borderRadius: 0
    },

    image2: {
      flexDirection: "row",
      justifyContent: 'space-between',
      width: 35,
      height: 30,
      resizeMode: 'contain',
      paddingHorizontal:0,
      paddingVertical: 15
      },

      image3: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 35,
        height: 30,
        resizeMode: 'contain',
        paddingHorizontal:0,
        paddingVertical: 15
        },

    button: {
      backgroundColor: '#A9A9A9',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      
    },
   
    button2: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'blue',
      borderWidth: 2,
      marginTop:30
      
    },
    buttonText2: {
      color: 'blue',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      
    },

    botaoConectadoSenha: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 10
    },

    checkConectado: {
      fontSize: 11,
      fontWeight: 'bold',
      color: 'black'
    },

    linkSenha: {
      fontSize: 11,
      fontWeight: 'bold',
      color: 'blue'
    }


   
    
});