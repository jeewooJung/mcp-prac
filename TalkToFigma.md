# TalkToFigma

TalkToFigma는 VS Code에서 Figma 디자인 파일과 대화형으로 상호작용할 수 있게 해주는 Model Context Protocol(MCP) 서버입니다.

## 개요

TalkToFigma를 사용하면 자연어로 Figma 디자인을 쿼리하고, 컴포넌트와 스타일을 분석하고, 디자인을 React 컴포넌트로 변환하는 등의 작업을 수행할 수 있습니다.

## 설정 방법

### 사전 요구사항

- VS Code 설치
- MCP 확장 프로그램 설치
- cursor-talk-to-figma-mcp 패키지 설치

### 설치

터미널에서 다음 명령어를 실행하여 TalkToFigma MCP 서버를 설치합니다:

```bash
npm install -g cursor-talk-to-figma-mcp
```

### 서버 실행

TalkToFigma MCP 서버를 직접 실행하려면 터미널에서 다음 명령어를 실행합니다:

```bash
cursor-talk-to-figma-mcp
```

또는 VS Code 명령 팔레트(`Ctrl+Shift+P`)를 열고 "MCP: Connect to Server"를 선택한 다음 "TalkToFigma"를 선택합니다.

## 사용 예시

### Figma 디자인 분석하기

1. Figma 파일 URL을 복사합니다.
2. VS Code에서 AI에게 다음과 같은 질문을 합니다:
   "이 Figma 디자인의 컬러 팔레트를 분석해줘: [Figma URL]"

### React 컴포넌트로 변환하기

1. Figma 파일이나 컴포넌트의 URL을 복사합니다.
2. VS Code에서 AI에게 다음과 같이 요청합니다:
   "이 Figma 컴포넌트를 React와 Tailwind CSS를 사용하여 구현해줘: [Figma URL]"

### 디자인 가이드라인 추출하기

디자인 시스템의 일관성을 유지하기 위해 Figma 파일에서 디자인 가이드라인을 추출할 수 있습니다:

```
이 Figma 디자인에서 사용된 타이포그래피, 컬러, 간격 시스템을 분석해줘: [Figma URL]
```

## 문제 해결

### 서버 연결 실패
- TalkToFigma 패키지가 제대로 설치되었는지 확인합니다.
- 필요한 경우 `npm install -g cursor-talk-to-figma-mcp`로 재설치합니다.
- VS Code를 재시작합니다.

### Figma 파일 접근 권한 문제
- Figma 파일이 공개되어 있거나 적절한 공유 설정이 되어 있는지 확인합니다.
- 팀 프로젝트의 경우 파일에 대한 접근 권한이 있는지 확인합니다.

## 추가 자료

- [TalkToFigma GitHub 저장소](https://github.com/example/talk-to-figma-mcp)
- [Figma 개발자 문서](https://www.figma.com/developers/api)
