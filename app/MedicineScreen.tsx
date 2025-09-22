import CommonHeader from "@/components/Common/CommonHeader";
import { SafeAreaContainer } from "@/components/Common/SafeAreaContainer";
import DailyMedicine from "@/components/MedicineScreen/DailyMedicine";

const data = [
  {
    title: "혈압약",
    imageUrl: require("assets/images/health-icon1.png"),
    contents: "1정, 식후 30분",
  },
  {
    title: "당뇨약",
    imageUrl: require("assets/images/health-icon2.png"),
    contents: "1정, 식후 30분",
  },
  {
    title: "간수치약",
    imageUrl: require("assets/images/health-icon3.png"),
    contents: "1정, 식후 30분",
  },
  {
    title: "녹내장약",
    imageUrl: require("assets/images/health-icon4.png"),
    contents: "1정, 식후 30분",
  },
];

export default function MedicineScreen() {
  return (
    <SafeAreaContainer>
      <CommonHeader
        imageUrl={require("assets/images/medicine-no-bg.png")}
        title="복약 알림"
        contents="현재 시간"
      />
      <DailyMedicine title="오늘 컨디션을 확인해주세요" contents={data} />
    </SafeAreaContainer>
  );
}
