module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // '@' 경로 별칭 설정을 위한 플러그인
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
          },
        },
      ],
      // react-native-reanimated V2 이상을 사용한다면 이 플러그인이 필요합니다.
      // 항상 플러그인 목록의 마지막에 두는 것이 좋습니다.
      'react-native-reanimated/plugin', 
    ],
  };
};