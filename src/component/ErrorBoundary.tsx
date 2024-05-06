import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage?: string;
}

const UNEXPECTED_ERROR_MESSAGE = "예기치 못한 문제가 발생했습니다.";

// 비동기 에러를 처리하기 위한 콜백 함수
function captureReject(e) {
  e.preventDefault();

  alert(UNEXPECTED_ERROR_MESSAGE);
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error) {
    // 다음 렌더링에서 alert가 뜨도록 상태를 업데이트 합니다.
    return { hasError: true, errorMessage: error.message };
  }

  // 비동기 에러를 처리해주기 위해 unhandledrejection를 넣어줍니다.
  public componentDidMount() {
    window.addEventListener("unhandledrejection", captureReject);
  }

  public componentWillUnmount() {
    window.removeEventListener("unhandledrejection", captureReject);
  }

  public render() {
    if (this.state.hasError) {
      alert(this.state.errorMessage ?? UNEXPECTED_ERROR_MESSAGE);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
