
# Cursor Talk to Figma MCP Plugin 설정 가이드

## 1. 플러그인 설치하기
Figma 커뮤니티에서 "Cursor Talk to Figma MCP Plugin" 다운로드:
- [Cursor Talk to Figma MCP Plugin](https://www.figma.com/community/plugin/1485687494525374295/cursor-talk-to-figma-mcp-plugin) 링크 방문
- "Get Plugin"을 클릭하여 Figma 계정에 추가
- "Figma 파일 다운로드" 옵션을 선택하여 샘플 Figma 파일 받기 (선택사항)

## 2. Figma에서 플러그인 실행하기
- Figma 디자인 파일 열기
- 상단 메뉴 바에서 Plugins > Cursor Talk To Figma MCP Plugin 선택
- 플러그인 인터페이스가 로드될 때까지 대기

## 3. 서버 설정하기
GitHub 저장소에서 소스 코드를 클론하거나 다운로드:

```bash
# 저장소 클론하기
git clone https://github.com/sonnylazuardi/cursor-talk-to-figma-mcp.git

# 프로젝트 디렉토리로 이동
cd cursor-talk-to-figma-mcp

# 의존성 설치
bun install

# WebSocket 서버 시작
bun socket
```

## 4. 플러그인 연결 설정하기
- Figma 플러그인 인터페이스에서 "Connect" 버튼 클릭
- 플러그인이 로컬 서버와 연결을 시도합니다
- 연결이 성공하면 고유한 채널 ID가 포함된 확인 메시지가 표시됩니다

## 5. VS Code 통합 활성화하기
- VS Code 열기
- 명령 팔레트(Ctrl+Shift+P 또는 Cmd+Shift+P)에서 다음을 입력하고 선택:
  "TalkToFigma mcp start"
- 이렇게 하면 Figma 통신을 위한 VS Code 확장 프로그램이 활성화됩니다

## 6. 연결 완료하기
- Figma 플러그인에서 다음과 같은 연결 메시지를 복사:
  "Connected to Server in channel: [채널-아이디]"
- 이 메시지를 VS Code의 Copilot 채팅 창에 붙여넣기
- 확인되면 통합이 완료되고 사용할 준비가 됩니다

## 문제 해결
- 방화벽이 WebSocket 연결을 허용하는지 확인
- 서버와 Figma 플러그인이 동시에 실행 중인지 확인
- 연결이 실패하면 서버를 다시 시작하고 Figma에서 다시 연결을 시도해 보세요
