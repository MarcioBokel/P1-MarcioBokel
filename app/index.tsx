import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Image1 from "../src/assets/images/MeuTIM.png";
import Image2 from "../src/assets/images/iconCelular.png";
import Image3 from "../src/assets/images/iconSenha.png";
import { styles } from "./styles";

export default function Index() { 

  const EntrarButton = () => { }
  const handlePress = () => {};
 
  return (

      <View
        style={styles.container}>
        
        <Image style={styles.image}source={Image1} />

        <View style={styles.containerNumeroCelular}>
          <View style={styles.image2}>
              <Image style={styles.image2}source={Image2} />
          </View>
              <TextInput placeholder={'Número com DDD'}
                        placeholderTextColor={'#777'}
                        textAlign="left"
                        onPress={handlePress}
                        keyboardType="phone-pad"/>     
        </View>

        <View style={styles.containerSenhaCelular}>
            <View style={styles.image2}>
              <Image style={styles.image3}source={Image3} />
            </View>
          <TextInput style={styles.inputSenha} placeholder={'Senha'}
                      placeholderTextColor={'#777'}
                      textAlign="left"
                      onPress={handlePress}
                      keyboardType="visible-password"/>

        </View>
        <View style={styles.botaoConectadoSenha}>
          <Text style={styles.checkConectado}>Manter-me conectado</Text>
          <Text style={styles.linkSenha}>Não sei minha senha</Text>
        </View>

          <View>
              <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>     
          </View>

          <View>
              <TouchableOpacity style={styles.button2} onPress={handlePress}>
                <Text style={styles.buttonText2}>ENTRAR NO TIM ULTRAFIBRA</Text>
            </TouchableOpacity>     
          </View>

       </View>

  )
};