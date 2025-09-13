import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 60, marginBottom: 50}}>
      <Image source={require("@/assets/images/profile.png")} />
      <Text style={{fontSize: 32, fontWeight: 700, color: Colors.font.default}}>안녕하세요, 김할머니님!</Text>
      <Text style={{fontSize: 22, color: Colors.font.gray}}>오늘도 건강한 하루 되세요</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
})