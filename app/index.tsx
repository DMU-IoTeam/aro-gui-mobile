import { SafeAreaContainer } from '@/components/Common/SafeAreaContainer'; // 만들어 둔 컴포넌트 import
import Header from '@/components/index/Header';
import Menu from '@/components/index/Menu';
import Profile from '@/components/index/Profile';
import React from 'react';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    // SafeAreaContainer에 추가로 적용할 스타일
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});