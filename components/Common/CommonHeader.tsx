import { Colors } from "@/constants/Colors";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type HeaderProps = {
  imageUrl: ImageSourcePropType;
  title: string;
  contents: string;
};

export default function CommonHeader({
  imageUrl,
  title,
  contents,
}: HeaderProps) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        <Image source={imageUrl} />
        <Text style={{ fontSize: 36, fontWeight: 700 }}>{title}</Text>
      </View>
      <Text style={{ textAlign: "center", color: Colors.font.gray, fontWeight: 700, fontSize: 24 }}>
        {contents}
      </Text>
    </View>
  );
}
