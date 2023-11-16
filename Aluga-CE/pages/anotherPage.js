import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TestPage = () => {
  const [storyIndex, setStoryIndex] = useState(0);

  const stories = [
    {
      text: 'Você está em uma encruzilhada. Qual caminho você escolhe?',
      options: ['Ir para a esquerda', 'Ir para a direita'],
    },
    {
      text: 'Você encontra um rio. O que você faz?',
      options: ['Cruzar o rio 🌊', 'Seguir o rio 🚶'],
    },
    {
      text: 'Você chega a uma floresta escura. O que você quer fazer?',
      options: ['Explorar a floresta 🌲', 'Evitar a floresta ⛔'],
    },
    {
      text: 'Enquanto explora a floresta, você ouve um som estranho. O que você faz?',
      options: ['Investigar o som 🔍', 'Ignorar e continuar ⏭️'],
    },
    {
      text: 'Você encontra uma caverna misteriosa. Deseja entrar?',
      options: ['Entrar na caverna ⛰️', 'Continuar a jornada ➡️'],
    },
    {
      text: 'Dentro da caverna, você se depara com uma criatura assustadora. 😱',
      options: ['Lutar contra a criatura ⚔️', 'Tentar negociar 🤝'],
    },
    {
      text: 'A criatura aceita negociar. Ela oferece um artefato mágico em troca da sua liberdade. O que você faz?',
      options: ['Aceitar a oferta e obter o artefato 🌟', 'Recusar e continuar a jornada ➡️'],
    },
    {
      text: 'Com o artefato mágico, você ganha poderes incríveis. O que você deseja fazer?',
      options: ['Tornar-se o governante da terra 👑', 'Usar os poderes para o bem 🌈'],
    },
    {
      text: 'Seus atos benevolentes com os poderes mágicos trazem prosperidade à terra. Você vive uma vida feliz. 🌟',
      options: ['Fim da história'],
    },
    {
      text: 'Seus atos de conquista causam caos e destruição. Você enfrenta a ira dos habitantes e perece. ☠️',
      options: ['Fim da história'],
    },
    {
      text: 'Você decide continuar sem o artefato mágico. A criatura permite sua saída. Você continua a jornada. ➡️',
      options: ['Fim da história'],
    },
  ];

  const handleOptionPress = (index) => {
    if (stories[storyIndex + 1]) {
      setStoryIndex(storyIndex + 1);
    } else {
      setStoryIndex(0);
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>PDM</Text>
      </View>

      {/* body */}
      <View style={styles.body}>
        <Text style={styles.storyText}>{stories[storyIndex].text}</Text>
        {stories[storyIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleOptionPress(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}></Text>
      </View>

      {/* botao flutuandte */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setStoryIndex(0)}
      >
        <Text style={styles.floatingButtonText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Alterado para preto
  },
  header: {
    backgroundColor: '#2A2A2A',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  storyText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white', // Alterado para branco
  },
  optionButton: {
    backgroundColor: 'white', // Alterado para branco
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    color: 'black', // Alterado para preto
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#2A2A2A',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
  floatingButton: {
    position: 'absolute',
    backgroundColor: '#2A2A2A',
    width: 90,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    elevation: 3,
  },
  floatingButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default TestPage;
