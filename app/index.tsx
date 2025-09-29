import { SafeAreaContainer } from '@/components/Common/SafeAreaContainer'; // 만들어 둔 컴포넌트 import
import Header from '@/components/index/Header';
import Menu from '@/components/index/Menu';
import Profile from '@/components/index/Profile';
import React from 'react';

export default function HomeScreen() {
  return (
    <SafeAreaContainer>
      <Header />
      <Profile />
      <Menu />
    </SafeAreaContainer>
  );
}