import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio render error:', error, errorInfo);
  }

  private handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#101114] text-[#F5F4F0] flex flex-col items-center justify-center px-6 text-center space-y-5">
          <div className="space-y-2 max-w-md">
            <p className="text-xs font-mono text-[#C5FA59] uppercase tracking-widest">
              NOTICE
            </p>
            <h1 className="text-2xl font-bold font-['Space_Grotesk']">
              화면을 표시하는 중 문제가 발생했습니다.
            </h1>
            <p className="text-sm text-[#A7AAB0] break-keep">
              페이지를 새로고침하거나 잠시 후 다시 접속해 주세요.
            </p>
          </div>
          <button
            type="button"
            onClick={this.handleReload}
            className="px-5 py-2.5 rounded-lg bg-[#C5FA59] hover:bg-[#b4ea47] text-[#101114] text-xs font-mono font-bold transition-colors cursor-pointer"
          >
            페이지 새로고침
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
