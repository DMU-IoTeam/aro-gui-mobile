import CommonHeader from "@/components/Common/CommonHeader";
import { SafeAreaContainer } from "@/components/Common/SafeAreaContainer";

export default function HealthScreen() {
  return (
    <SafeAreaContainer>
      <CommonHeader
        imageUrl={require("assets/images/health-no-bg.png")}
        title="건강확인"
        contents="현재 시간"
      />
    </SafeAreaContainer>
  );
}
