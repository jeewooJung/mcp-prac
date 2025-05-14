// 테마가 로컬 스토리지에 저장된 경우 HTML에 다크 모드 클래스를 적용하는 스크립트
function setInitialTheme() {
  try {
    const storedTheme = localStorage.getItem('theme-storage');
    
    if (storedTheme) {
      const { state } = JSON.parse(storedTheme);
      if (state && state.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // 사용자 시스템 설정이 다크 모드인 경우
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    console.error('테마 설정 초기화 중 오류 발생:', e);
  }
}

export default setInitialTheme;
