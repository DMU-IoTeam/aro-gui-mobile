import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- 재사용 컴포넌트들 ---

// 1. 헤더 컴포넌트
const Header = () => (
  <View style={styles.headerContainer}>
    <View style={styles.botProfile}>
      <View style={styles.botIconContainer}>
        <Text style={styles.botIconText}>🤖</Text>
      </View>
      <View>
        <Text style={styles.botName}>음성 도우미</Text>
        <Text style={styles.botStatus}>듣고 있어요</Text>
      </View>
    </View>
    <TouchableOpacity>
      <Text style={styles.settingsIcon}>⚙️</Text>
    </TouchableOpacity>
  </View>
);

// 2. 메시지 버블 컴포넌트
const MessageBubble = ({ message, isUser, time }) => {
  const bubbleStyle = isUser ? styles.userBubble : styles.botBubble;
  const textStyle = isUser ? styles.userText : styles.botText;
  const wrapperStyle = isUser ? styles.userMessageWrapper : styles.botMessageWrapper;

  return (
    <View style={wrapperStyle}>
      {!isUser && (
        <View style={styles.botIconContainerSmall}>
          <Text style={styles.botIconText}>🤖</Text>
        </View>
      )}
      <View style={[styles.bubble, bubbleStyle]}>
        <Text style={textStyle}>{message}</Text>
      </View>
      <Text style={styles.messageTime}>{time}</Text>
    </View>
  );
};

// 3. 입력 영역 컴포넌트
const InputArea = () => (
  <View style={styles.inputAreaContainer}>
    <View style={styles.inputTabs}>
      <TouchableOpacity style={[styles.tab, styles.activeTab]}>
        <Text style={styles.activeTabText}>음성</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>글자</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.micContainer}>
      <Text style={styles.micHelperText}>
        <Text style={{ color: '#4CAF50' }}>((•))</Text> 마이크 버튼을 눌러서 말씀하세요
      </Text>
      <TouchableOpacity style={styles.micButton}>
        <Text style={styles.micButtonText}>🎤</Text>
        <Text style={styles.micButtonSubText}>길게 눌러 말하기</Text>
      </TouchableOpacity>
      <View style={styles.controlButtons}>
        <TouchableOpacity style={styles.squareButton}>
          <Text>⏹️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton}>
          <Text>▶️</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

// --- 메인 채팅 화면 ---
export default function ChatScreen() {
  const messages = [
    { id: 1, text: '안녕하세요! 궁금한 것이 있으시면 아래 마이크 버튼을 눌러서 말씀해주세요.', user: false, time: '오후 2:30' },
    { id: 2, text: '챗봇 화면을 개선하고 싶어요', user: true, time: '오후 2:32' },
    { id: 3, text: '네, 좋은 아이디어네요! 노인분들이 사용하기 편하도록 음성 기능을 중심으로 만들어드렸어요.', user: false, time: '오후 2:33' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <ScrollView contentContainerStyle={styles.messageList}>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg.text} isUser={msg.user} time={msg.time} />
        ))}
        {/* 챗봇의 추가 버튼들 */}
        <View style={styles.botActions}>
            <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>🔊 다시 듣기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>⏪ 천천히</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
      <InputArea />
    </SafeAreaView>
  );
}

// --- 스타일시트 ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  botProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6B4EFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  botIconText: {
    fontSize: 20,
  },
  botName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  botStatus: {
    fontSize: 12,
    color: '#888',
  },
  settingsIcon: {
    fontSize: 24,
  },
  // Message List
  messageList: {
    padding: 16,
    paddingBottom: 20,
  },
  // Message Bubble
  botMessageWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
    alignSelf: 'flex-start'
  },
  userMessageWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
    alignSelf: 'flex-end'
  },
  botIconContainerSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EAEAF2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  bubble: {
    maxWidth: '80%',
    padding: 15,
    borderRadius: 20,
  },
  botBubble: {
    backgroundColor: '#F0F0F0',
    borderTopLeftRadius: 0,
  },
  userBubble: {
    backgroundColor: '#6B4EFF',
    borderTopRightRadius: 0,
  },
  botText: {
    fontSize: 15,
    color: '#000',
  },
  userText: {
    fontSize: 15,
    color: '#FFF',
  },
  messageTime: {
    fontSize: 10,
    color: '#999',
    marginHorizontal: 8,
    marginBottom: 2
  },
  // Bot Actions
  botActions: {
    flexDirection: 'row',
    marginLeft: 40, // Bot icon width + margin
    marginTop: -10,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  actionButtonText: {
    fontSize: 13,
    color: '#555',
  },
  // Input Area
  inputAreaContainer: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 8,
  },
  inputTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#6B4EFF',
  },
  tabText: {
    color: '#888',
  },
  activeTabText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  micContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  micHelperText: {
    color: '#888',
    marginBottom: 12,
  },
  micButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EA4335',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  micButtonText: {
    fontSize: 36,
  },
  micButtonSubText: {
    fontSize: 12,
    color: '#FFF',
    marginTop: 4,
  },
  controlButtons: {
    flexDirection: 'row',
  },
  squareButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  playButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
});