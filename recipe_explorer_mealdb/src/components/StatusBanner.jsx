function StatusBanner({ loading, error, label }) {
    if (loading) {
      return (
        <section className="status-banner loading">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <p>{label || "Loading delicious recipes..."}</p>
        </section>
      );
    }
  
    if (error) {
      return (
        <section className="status-banner error">
          <p>{error}</p>
        </section>
      );
    }
  
    return null;
  }
  
  export default StatusBanner;
  