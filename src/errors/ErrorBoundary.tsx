import React from "react";

type Props = React.PropsWithChildren & {
  onError?: (error: Error) => void;
};

type State = { error?: Error };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    if (this.props.onError) {
      this.props.onError(error);
    }
  }

  reset = () => this.setState({ error: undefined });

  render() {
    if (this.state.error) {
      return null; // fallback is handled by parent via ErrorModal
    }
    return this.props.children;
  }
}
