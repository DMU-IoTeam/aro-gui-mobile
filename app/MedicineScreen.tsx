import CommonHeader from "@/components/Common/CommonHeader";
import { SafeAreaContainer } from "@/components/Common/SafeAreaContainer";

export default function MedicineScreen() {
  return (
    <SafeAreaContainer>
      <CommonHeader
        imageUrl={require("assets/images/medicine-no-bg.png")}
        title="복약 알림"
        contents="현재 시간"
      />
    </SafeAreaContainer>
  );
}
