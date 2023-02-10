function Home() {
    return (
        <div className="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active"><i className="bi bi-house-door-fill"></i> Home</li>
          <li className="breadcrumb-item "><a href="/users"><i className="bi bi-people"></i> Users</a></li>
          <li className="breadcrumb-item "><a href="/jobs"><i className="bi bi-bank2"></i> Jobs</a></li>
          <li className="breadcrumb-item "><a href="/agreements"><i className="bi bi-file-earmark-pdf"></i>Agreements</a></li>
          <li className="breadcrumb-item "><a href="/blog"><i className="bi bi-journals"></i> Blog</a></li>
        </ol>
        <hr/>
      </nav>
    </div>
    );
}

export default Home;