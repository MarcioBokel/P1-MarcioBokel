import { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ImageMessenger from "../src/assets/images/iconMessenger.png";
import ImageTelegram from "../src/assets/images/iconTelegram.png";
import ImageFacebook from "../src/assets/images/iconFacebook.png";
import IconHome from "../src/assets/images/iconHome.png";
import IconContas from "../src/assets/images/iconContas.png";
import IconPerfil from "../src/assets/images/iconPerfil.png";
import IconMenu from "../src/assets/images/iconMenu.png";
import { styles } from "./styles";




export default function Index() { 
  const handlePress = () => {};

  const Header = () => {
  return (
    <View style={styles.header}>
    <Text style={styles.headerText}> MEU PERFIL</Text>
    </View>
    )
 }

  const Footer = () => {
  return (
    <View style={styles.rodape}>
       <Image style={styles.imageHome}source={IconHome} />
       <Image style={styles.imageContas}source={IconContas} />
       <Image style={styles.imagePerfil}source={IconPerfil} />
       <Image style={styles.imageMenu}source={IconMenu} />
     </View>
    );
 };
 
  return (

      <View
        style={styles.container}>
        <Header />
      
        <View>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttonDados} onPress={handlePress}>
            <Text style={styles.buttonTextDados}>Dados</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMeuPlano} onPress={handlePress}>
            <Text style={styles.buttonTextMeuPlano}>Meu Plano</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxMeuPlano}>
            <Text style={styles.BoxMeuPlanoTextoMeuPlano}>MEU PLANO</Text>
            <Text style={styles.BoxMeuPlanoTextoTimControle}>TIM CONTROLE B</Text>

          </View>

        </View>
          
        <View style={styles.BoxAppsInclusos}>
            <View>
              <Text style={styles.BoxAppsInclusosText}>APPS INCLUSOS</Text>
            </View>
          </View>
      
          <View style={styles.BoxMessenger}>
            <View>
              <Image style={styles.imageMessenger}source={ImageMessenger} />
              <Text style={styles.BoxMessengerText}>Messenger </Text>
              <Text style={styles.BoxMessengerSubText}>assinatura inclusa</Text>
            </View>
          </View>

          <View style={styles.BoxTelegram}>
            <View>
              <Image style={styles.imageTelegram}source={ImageTelegram} />
              <Text style={styles.BoxTelegramText}>TELEGRAM </Text>
              <Text style={styles.BoxTelegramSubText}>assinatura inclusa</Text>
            </View>
          </View>

          <View style={styles.BoxFacebook}>
            
              <Image style={styles.imageFacebook}source={ImageFacebook} />
              <Text style={styles.BoxFacebookText}>FACEBOOK </Text>
              <Text style={styles.BoxFacebookSubText}>a vontade por 3 meses</Text>
            
          </View>

          <Footer />
          
        </View>

  )
};