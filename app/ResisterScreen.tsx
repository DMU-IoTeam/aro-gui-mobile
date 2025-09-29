import { SafeAreaContainer } from "@/components/Common/SafeAreaContainer"; // 만들어 둔 컴포넌트 import
import { useNavigation } from "expo-router";
import React from "react";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function HomeScreen() {
  const naviage = useNavigation();
  const handlePress = () => {
    naviage.navigate("index");
  };

  return (
    <SafeAreaContainer>
      <View
        style={{
          flex: 1,
          //   justifyContent: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            marginBottom: 60,
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <Image source={require("@/assets/images/guardian.png")}></Image>
          <View>
            <Text style={{ fontSize: 32, fontWeight: "bold", marginTop: 10 }}>
              보호자 등록
            </Text>
            <Text style={{ fontSize: 22, color: "#6B7280" }}>
              Aro를 관리할 보호자를 등록해주세요.
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#ddd",
          }}
        >
          <View
            style={{
              gap: 16,
            }}
          >
            <Text style={{ fontSize: 28 }}>이메일</Text>
            <TextInput
              style={styles.input}
              placeholder="보호자의 이메일을 입력해주세요."
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#10B981",
                borderRadius: 10,
                width: 100,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handlePress}
            >
              <Text style={{ color: "white", fontSize: 24 }}>입력</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 4,
    fontSize: 22,
  },
});
