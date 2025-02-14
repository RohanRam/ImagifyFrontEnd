 <>
      <div>
        <h1 className='text-center mt-5'>Admin Dashboard</h1>
        <p className='text-center' style={{ color: 'grey' }}>Manage and moniter your website</p>

      </div>
      <div className="d-flex adm-tb p-5 ">


        <aside className="bg-dark text-white rounded p-3" style={{ width: "250px" }}>
          <h2 className="text-center">Admin Panel</h2>
          <ul className="nav flex-column">
            <li className="nav-item mt-3">
              <button
                className={`nav-link text-white mb-3 w-100 ${activeTab === "users" ? "bg-secondary" : ""}`}
                onClick={() => setActiveTab("users")}
              >
                Users
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link w-100 mb-3 text-white ${activeTab === "transactions" ? "bg-secondary" : ""}`}
                onClick={() => setActiveTab("transactions")}
              >
                Transactions
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link w-100 mb-3 text-white ${activeTab === "summary" ? "bg-secondary" : ""}`}
                onClick={() => setActiveTab("summary")}
              >
                Total Transactions
              </button>
            </li>
          </ul>
        </aside>


        <main className="flex-grow-1 p-5">

          {activeTab === "users" && (
            <section>
              <h2 className="mb-3">Users</h2>
              <table className="table  table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td>Admin</td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}


          {activeTab === "transactions" && (
            <section>
              <h2 className="mb-3">Transactions</h2>
              <table className="table table-bordered">
                <thead className="table-success">
                  <tr>
                    <th>Transaction ID</th>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#12345</td>
                    <td>John Doe</td>
                    <td>$100</td>
                    <td className="text-success">Completed</td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}


          {activeTab === "summary" && (
            <section>
              <h2 className="mb-3">Total Transactions</h2>
              <div className="bg-primary text-white p-4 text-center rounded">
                <h3>Total Amount:</h3>
                <p className="display-4">$150</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </>