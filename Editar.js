import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function EditProfileScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleEditProfile = () => {
    // Implement logic to update user profile here
    const updatedUserProfile = {
      fullName,
      email,
      phone,
      cep,
      street,
      number,
      city,
      state,
      username,
      currentPassword,
      newPassword,
    };
    console.log('Updated User Profile:', updatedUserProfile);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Dados</Text>

      <TextInput
        style={styles.input}
        onChangeText={setFullName}
        value={fullName}
        placeholder="Nome Completo"
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        onChangeText={setCep}
        value={cep}
        placeholder="CEP"
      />

      <TextInput
        style={styles.input}
        onChangeText={setStreet}
        value={street}
        placeholder="Rua"
      />

      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Número"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="Cidade"
      />

      <TextInput
        style={styles.input}
        onChangeText={setState}
        value={state}
        placeholder="Estado"
      />

      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Nome de Usuário"
      />

      <TextInput
        style={styles.input}
        onChangeText={setCurrentPassword}
        value={currentPassword}
        placeholder="Senha Atual"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        onChangeText={setNewPassword}
        value={newPassword}
        placeholder="Nova Senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#FF8743',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  title: {
    color: '#333',
    fontSize: 24,
    marginBottom: 0,
  },
  input: {
    width: 350,
    height: 54,
    fontSize: 15,
    backgroundColor:  '#FFFFFF',
    color:  '#038FDE',
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#038FDE'
  },
  button: {
    width: 350,
    height: 54,
    backgroundColor:  '#038FDE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
});
