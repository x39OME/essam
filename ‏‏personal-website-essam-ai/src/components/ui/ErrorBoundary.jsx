import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Unhandled UI error:', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div role='alert' style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 24, color: '#fff', background: '#121212' }}>
        <div>
          <h1>Something went wrong</h1>
          <p>Please refresh the page.</p>
          <button onClick={() => window.location.reload()} style={{ color: '#fff', border: '1px solid #fff', borderRadius: 50, padding: '8px 20px' }}>
            Reload
          </button>
        </div>
      </div>
    );
  }
}
