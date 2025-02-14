import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";


const AdminDashboard = () => {
  const { users = [], transactions = [], loadUsers, loadTransactions , deleteUser } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState("users");



  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    loadUsers();
    loadTransactions();
  }, []);

  const handleDeleteUser = (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      deleteUser(userId);
    }
  };




  const paginate = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = (data) => Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <div>
        <h1 className='text-center mt-5'>Admin Dashboard</h1>
        <p className='text-center' style={{ color: 'grey' }}>Manage and monitor your website</p>
      </div>
      <div className="d-flex adm-tb p-5">
        <aside className="bg-dark text-white rounded p-3" style={{ width: "250px" }}>
          <h2 className="text-center">Admin Panel</h2>
          <ul className="nav flex-column">
            <li className="nav-item mt-3">
              <button className={`nav-link text-white mb-3 w-100 ${activeTab === "users" ? "bg-secondary" : ""}`} onClick={() => { setActiveTab("users"); setCurrentPage(1); }}>
                Users
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link w-100 mb-3 text-white ${activeTab === "transactions" ? "bg-secondary" : ""}`} onClick={() => { setActiveTab("transactions"); setCurrentPage(1); }}>
                Transactions
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link w-100 mb-3 text-white ${activeTab === "summary" ? "bg-secondary" : ""}`} onClick={() => setActiveTab("summary")}>
                Total Transactions
              </button>
            </li>
          </ul>
        </aside>

        <main className="flex-grow-1 p-5">
          {activeTab === "users" && (
            <section>
              <h2 className="mb-3">Users</h2>
              <table className="us-tbl">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginate(users).length > 0 ? (
                    paginate(users).map(user => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td style={{ color: user.role == "admin" ? "green" : "black" }}>
                          {user.role}
                        </td>
                        <td>
                          {user.role !== "admin" && (
                            <button
                              className="btn btn-danger dlt-btn"
                              onClick={() => handleDeleteUser(user._id)}>
                              Delete
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center">No users found</td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-primary mx-2" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><i class='bx bx-chevrons-left'></i></button>
                <span className="align-self-center">Page {currentPage} of {totalPages(users)}</span>
                <button className="btn btn-primary mx-2" disabled={currentPage >= totalPages(users)} onClick={() => setCurrentPage(currentPage + 1)}><i class='bx bx-chevrons-right'></i></button>
              </div>
            </section>
          )}

          {activeTab === "transactions" && (
            <section>
              <h2 className="mb-3">Transactions</h2>
              <table className="tn-tbl">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Plan</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paginate(transactions).length > 0 ? (
                    paginate(transactions).map(transaction => (
                      <tr key={transaction._id}>
                        <td>{transaction._id}</td>
                        <td>{transaction.plan}</td>
                        <td>₹{transaction.amount}</td>
                        <td className={transaction.payment ? "text-success" : "text-danger"}>
                          {transaction.payment ? "Paid" : "Failed"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center">No transactions found</td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-success mx-2" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><i class='bx bx-chevrons-left'></i></button>
                <span className="align-self-center">Page {currentPage} of {totalPages(transactions)}</span>
                <button className="btn btn-success mx-2" disabled={currentPage >= totalPages(transactions)} onClick={() => setCurrentPage(currentPage + 1)}><i class='bx bx-chevrons-right'></i></button>
              </div>
            </section>
          )}

          {activeTab === "summary" && (
            <section>
              <h2 className="mb-3">Total Transactions</h2>
              <div style={{ backgroundColor: '#000957' }} className=" text-white p-4 text-center rounded">
                <h3>Total Amount:</h3>
                <p className="display-4">
                  ₹ <span className='totalspan'>
                    {transactions
                      .filter(transaction => transaction.payment)
                      .reduce((total, transaction) => total + transaction.amount, 0)}
                  </span>.00
                </p>
              </div>
            </section>
          )}
        </main>
      </div>

    </>
  );
};

export default AdminDashboard;

