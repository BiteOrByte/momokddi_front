import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const port = parseInt(env.VITE_PORT, 10); // 포트 정보
  const apiUrl = env.VITE_API_URL;         // API URL

  console.log(`Running in ${mode} mode`);
  console.log(`PORT: ${port}, API_URL: ${apiUrl}`);

  return {
    plugins: [react()],
    server: {
      port: port,          // 서버 포트 설정
      open: true,          // 브라우저 자동 열기
    },
    define: {
      __API_URL__: JSON.stringify(apiUrl), // API URL 정의
    },
    build: {
      sourcemap: mode !== 'production', // 프로덕션 빌드 시 소스 맵 비활성화
      minify: mode === 'production',    // 프로덕션 빌드 시 코드 압축
    },
  };
});