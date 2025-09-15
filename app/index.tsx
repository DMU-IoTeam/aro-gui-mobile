import { SafeAreaContainer } from '@/components/Common/SafeAreaContainer'; // 만들어 둔 컴포넌트 import
import Header from '@/components/index/Header';
import Menu from '@/components/index/Menu';
import Profile from '@/components/index/Profile';
import React from 'react';

export default function HomeScreen() {
  return (
    // 복잡한 로직 없이 그냥 감싸주기만 하면 끝!
    <SafeAreaContainer>
      <Header />
      <Profile />
      <Menu />
    </SafeAreaContainer>
  );
}