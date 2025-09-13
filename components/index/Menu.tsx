import { Colors } from "@/constants/Colors";
import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";

const menueData = [
  {
    imageUrl: require("@/assets/images/chat.png"),
    title: "대화하기",
    contents: "ARO와 편하게 대화해요",
  },
  {
    imageUrl: require("@/assets/images/game.png"),
    title: "게임하기",
    contents: "재미있는 두뇌게임",
  },
  {
    imageUrl: require("@/assets/images/health.png"),
    title: "건강확인",
    contents: "오늘의 건강을 체크해요",
  },
  {
    imageUrl: require("@/assets/images/medicine.png"),
    title: "복약확인",
    contents: "약 복용 시간 알림",
  },
];

const Menu = () => {
  return (
    <FlatList
      data={menueData}
      // renderItem으로 각 아이템을 렌더링
      renderItem={({ item }) => (
        <MenuItem
          imageUrl={item.imageUrl}
          title={item.title}
          contents={item.contents}
        />
      )}
      // keyExtractor로 각 아이템의 고유 키를 지정
      keyExtractor={(item, index) => index.toString()}
      // 💥 이 prop 하나로 2열 그리드가 완성됩니다!
      numColumns={2}
      // 전체 리스트의 스타일링
      // contentContainerStyle={{pad}}
      // 각 행(row)의 스타일링 (열 사이의 간격 조정)
      columnWrapperStyle={{
        justifyContent: "center",
        gap: 16,
        marginBottom: 16,
      }}
    />
  );
};

type MenueItemProps = {
  imageUrl: ImageSourcePropType;
  title: string;
  contents: string;
};

const MenuItem = ({ imageUrl, title, contents }: MenueItemProps) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        width: "40%",
        aspectRatio: 1, // <-- 이 속성을 추가합니다. (1:1 비율)
      }}
    >
      <Image source={imageUrl} />
      <Text
        style={{ color: Colors.font.default, fontWeight: 700, fontSize: 32 }}
      >
        {title}
      </Text>
      <Text style={{ color: Colors.font.gray, fontSize: 16 }}>{contents}</Text>
    </View>
  );
};

export default Menu;
