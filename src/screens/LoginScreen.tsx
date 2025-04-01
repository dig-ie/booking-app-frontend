import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor, insira um email válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("A senha é obrigatória"),
});

const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor, insira um email válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("A senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("Confirmação de senha é obrigatória"),
});

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Controle de qual formulário exibir
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(isLogin ? loginValidationSchema : signupValidationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Login" : "Cadastro"}</Text>

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <View>
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Email"
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <View>
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
          </View>
        )}
      />

      {!isLogin && (
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <View>
              <TextInput
                {...field}
                style={styles.input}
                placeholder="Confirmar Senha"
                secureTextEntry
              />
            </View>
          )}
        />
      )}

      <Button title={isLogin ? "Entrar" : "Cadastrar"} onPress={handleSubmit(onSubmit)} />

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.linkContainer}>
        <Text style={styles.linkText}>
          {isLogin ? "Ainda não tem conta? Cadastre-se" : "Já tem conta? Faça login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
  },
  linkContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default AuthPage;
