import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Error info:", info);
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url(/images/devspaxbg.svg)" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center p-6 md:p-8 lg:p-12 bg-white shadow-xl rounded-md w-11/12 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Something went wrong!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              We encountered an issue while loading the page. Please try again
              later.
            </p>
            {this.state.error && (
              <pre
                className="text-sm text-destructive bg-secondary p-4 text-gray-500 rounded-md mb-6 overflow-x-auto whitespace-pre-wrap break-words"
                style={{ maxHeight: "200px" }}
              >
                Error Message: {this.state.error?.message}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-purple-600 focus:ring-2 focus:ring-primary transition-all duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
