# MCP (Model Context Protocol) 활용 가이드

이 프로젝트는 React + TypeScript + Vite를 기반으로 하며, Model Context Protocol(MCP)을 활용하여 다양한 AI 도구와 통합할 수 있는 환경을 제공합니다.

## MCP란?

MCP(Model Context Protocol)는 VS Code와 같은 개발 환경에서 AI 모델을 활용할 수 있도록 하는 프로토콜입니다. 다양한 외부 도구(Figma, Playwright 등)와 연동하여 AI 기능을 확장할 수 있습니다.

## 제공되는 MCP 서버

이 프로젝트에서 사용 가능한 MCP 서버들은 다음과 같습니다:

1. **Framelink Figma MCP**: Figma 디자인 파일과 연동하여 작업할 수 있는 MCP 서버
2. **TalkToFigma**: Figma와 대화형 인터페이스로 상호작용할 수 있는 MCP 서버
3. **Playwright MCP**: 웹 브라우저 자동화 도구인 Playwright와 연동하는 MCP 서버
4. **Context7 MCP**: 다양한 라이브러리 문서를 검색하고 활용할 수 있는 MCP 서버

## MCP 설정 방법

### 1. VS Code 확장 설치

먼저 VS Code에서 MCP를 사용하기 위한 확장을 설치해야 합니다.

1. VS Code 확장 마켓플레이스에서 "MCP: Model Context Protocol" 확장을 검색하고 설치합니다.
2. VS Code를 재시작하여 확장을 활성화합니다.

### 2. MCP 설정 파일 구성

이 프로젝트에는 이미 `.vscode/mcp.json` 파일이 포함되어 있으며, 다양한 MCP 서버가 구성되어 있습니다. 구성을 확인하거나 수정하려면 다음 단계를 따르세요:

1. `.vscode/mcp.json` 파일을 열어 현재 구성을 확인합니다.
2. 필요에 따라 서버 설정을 수정합니다.

```json
{
  "version": 1,
  "inputs": [
    {
      "type": "promptString",
      "id": "FIGMA_API_KEY",
      "description": "Figma API Key",
      "password": true
    }
  ],
  "configurations": [
    {
      "name": "MCP Server",
      "serverType": "mcp",
      "port": 9091,
      "description": "Default MCP configuration"
    }
  ],
  "servers": {
    "Framelink Figma MCP": {
      "command": "npx",
      "args": [
        "-y",
        "figma-developer-mcp",
        "--figma-api-key=FIGMA_API_KEY",
        "--stdio"
      ],
      "env": {
        "FIGMA_API_KEY": "${input:FIGMA_API_KEY}"
      }
    },
    "TalkToFigma": {
      "command": "cursor-talk-to-figma-mcp",
      "args": []
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    },
    "Context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

### 3. MCP 서버 실행 방법

MCP 서버를 실행하는 방법은 두 가지가 있습니다:

#### VS Code 명령 팔레트 사용

1. `Ctrl+Shift+P`를 눌러 명령 팔레트를 엽니다.
2. "MCP: Connect to Server"를 검색하고 선택합니다.
3. 사용하고자 하는 MCP 서버를 목록에서 선택합니다 (예: "TalkToFigma", "Playwright" 등).
4. 필요한 경우 추가 정보(예: Figma API Key)를 입력합니다.
5. 연결이 완료되면 VS Code 하단 상태 표시줄에 연결 정보가 표시됩니다.

#### 터미널에서 직접 실행

각 MCP 서버는 터미널에서도 직접 실행할 수 있습니다:

- **TalkToFigma MCP 실행**:
  ```bash
  cursor-talk-to-figma-mcp
  ```

- **Playwright MCP 실행**:
  ```bash
  npx -y @executeautomation/playwright-mcp-server
  ```

- **Context7 MCP 실행**:
  ```bash
  npx -y @upstash/context7-mcp@latest
  ```

- **Figma MCP 실행** (Figma API Key 필요):
  ```bash
  npx -y figma-developer-mcp --figma-api-key=YOUR_FIGMA_API_KEY --stdio
  ```

## MCP 사용 시나리오

### Figma와 연동하여 디자인 구현

1. Figma API Key를 발급받습니다 (Figma 설정 > 개인용 액세스 토큰).
2. "Framelink Figma MCP" 또는 "TalkToFigma" 서버를 실행합니다.
3. VS Code에서 Figma 디자인을 참조하여 React 컴포넌트를 개발할 수 있습니다.
4. AI에게 "Figma 디자인을 React 컴포넌트로 변환해줘"와 같은 명령을 내릴 수 있습니다.

### Playwright를 활용한 테스트 자동화

1. "Playwright" MCP 서버를 실행합니다.
2. VS Code에서 웹 페이지 테스트를 위한 스크립트를 작성할 수 있습니다.
3. AI에게 "이 웹사이트의 로그인 과정을 테스트하는 스크립트를 작성해줘"와 같은 명령을 내릴 수 있습니다.

### Context7을 활용한 문서 검색 및 학습

1. "Context7" MCP 서버를 실행합니다.
2. 다양한 라이브러리나 프레임워크에 대한 문서를 검색하고 활용할 수 있습니다.
3. AI에게 "React Router의 useParams 훅 사용법을 알려줘"와 같은 명령을 내릴 수 있습니다.

## 문제 해결

- **MCP 서버 연결 실패**: 
  1. NPM 패키지가 제대로 설치되었는지 확인합니다.
  2. 필요한 경우 `npm install -g [패키지명]`으로 전역 설치를 시도합니다.
  3. VS Code를 재시작하거나 창을 새로 고침합니다.

- **Figma API Key 관련 문제**:
  1. 유효한 API Key를 사용하고 있는지 확인합니다.
  2. API Key를 환경 변수나 `.env` 파일에 저장하여 보안을 유지합니다.

## 학습 자료

- [Model Context Protocol 공식 문서](https://code.visualstudio.com/api/extension-guides/model-context-protocol)
- [VS Code MCP 확장 가이드](https://marketplace.visualstudio.com/items?itemName=ms-vscode.mcp)
- [Figma API 문서](https://www.figma.com/developers/api)
- [Playwright 문서](https://playwright.dev)

## 프로젝트 구조

```
mcp-dev/
├── .vscode/
│   └── mcp.json        # MCP 서버 구성 파일
├── public/
├── src/
│   ├── App.tsx         # 메인 애플리케이션 컴포넌트
│   ├── main.tsx        # 진입점
│   └── ...
├── package.json        # 프로젝트 의존성
└── README.md           # 이 문서
```
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
