# 🎮 Perfil da Hornet - Hollow Knight: Silksong

![Version](https://img.shields.io/badge/version-1.0.0-red.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue.svg)
![Expo](https://img.shields.io/badge/Expo-~54.0-black.svg)

Aplicativo mobile desenvolvido com **React Native** e **Expo** que apresenta o perfil detalhado da personagem **Hornet**, protagonista de _Hollow Knight: Silksong_. O app permite visualizar e editar informações sobre a personagem de forma interativa.

## ✨ Funcionalidades

- 📱 **Visualização de Perfil**: Exibe informações detalhadas sobre a Hornet
- ✏️ **Edição de Perfil**: Permite editar todos os campos do perfil da personagem
- 🎨 **Interface Temática**: Design inspirado no universo de Hollow Knight
- 📐 **Navegação Fluida**: Navegação entre telas com React Navigation
- 🌐 **Multiplataforma**: Funciona em iOS, Android e Web

## 🚀 Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)** `0.81.5` - Framework para desenvolvimento mobile
- **[Expo](https://expo.dev/)** `~54.0` - Plataforma para desenvolvimento React Native
- **[React Navigation](https://reactnavigation.org/)** `7.x` - Sistema de navegação
  - Native Stack Navigator para navegação entre telas
- **[React](https://react.dev/)** `19.1.0` - Biblioteca JavaScript para UI

## 📂 Estrutura do Projeto

```
profile-app/
├── App.js                      # Componente principal e configuração de navegação
├── index.js                    # Ponto de entrada da aplicação
├── app.json                    # Configurações do Expo
├── package.json                # Dependências e scripts
├── assets/                     # Recursos estáticos
│   ├── hornet.png             # Imagem da personagem
│   └── favicon.png            # Ícone do app
└── screens/                    # Telas da aplicação
    ├── ProfileScreen.js       # Tela de visualização do perfil
    └── EditProfileScreen.js   # Tela de edição do perfil
```

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (opcional, mas recomendado)
- Para iOS: [Xcode](https://developer.apple.com/xcode/) (apenas macOS)
- Para Android: [Android Studio](https://developer.android.com/studio)

## 🏃 Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/LevyTavares/profile-app.git
cd profile-app
```

### 2. Instale as dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 3. Inicie o projeto

```bash
npm start
```

ou

```bash
expo start
```

### 4. Execute em uma plataforma

Após iniciar o servidor de desenvolvimento, você pode:

- **Android**: Pressione `a` no terminal ou execute `npm run android`
- **iOS**: Pressione `i` no terminal ou execute `npm run ios` (apenas macOS)
- **Web**: Pressione `w` no terminal ou execute `npm run web`
- **Dispositivo físico**: Escaneie o QR Code com o app [Expo Go](https://expo.dev/client)

## 📱 Telas do Aplicativo

### ProfileScreen

Tela principal que exibe todas as informações da Hornet:

- Nome e título
- Origem e região
- Aparência física
- Papel na narrativa
- Armas e habilidades
- Personalidade
- Curiosidades

### EditProfileScreen

Tela de edição com formulário completo para modificar:

- Todos os campos do perfil
- Validação em tempo real
- Salvamento com navegação de volta

## 🎯 Scripts Disponíveis

```json
{
  "start": "expo start", // Inicia o servidor de desenvolvimento
  "android": "expo start --android", // Abre no emulador Android
  "ios": "expo start --ios", // Abre no simulador iOS
  "web": "expo start --web" // Abre no navegador
}
```

## 🎨 Características de Design

- Paleta de cores inspirada em Hollow Knight
- Tipografia clara e legível
- Layout responsivo para diferentes tamanhos de tela
- Feedback visual em interações
- Componentes estilizados com StyleSheet do React Native

## 🔧 Configurações

O arquivo `app.json` contém as configurações do Expo:

- Ícone e splash screen personalizados
- Suporte a orientação portrait
- Nova arquitetura React Native habilitada
- Configurações específicas para iOS e Android

## 📝 Informações da Personagem

O perfil inclui dados detalhados sobre a **Hornet**:

- **Origem**: Hallownest
- **Região**: Kingdom's Edge / Deepnest
- **Papel**: Guardiã e testadora dos segredos de Hallownest
- **Arma**: Agulha (needle) + Seda (silk)
- **Habilidades**: Ataques rápidos, combos aéreos, movimentos acrobáticos

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👤 Autores

**Levy Tavares**
**Guilherme Lopes**

- GitHub: [@LevyTavares](https://github.com/LevyTavares)
- GitHub: [@guithunder](https://github.com/guithunder)

## 🎮 Sobre Hollow Knight

_Hollow Knight_ é um jogo metroidvania desenvolvido pela Team Cherry. _Silksong_ é a aguardada continuação que tem a Hornet como protagonista.

---

⚔️ _"Shaw!"_ - Hornet
