import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DonationContent = ({ handleLogout }) => {
  const [activeTab, setActiveTab] = useState('donationProducts');
  const [products, setProducts] = useState([]);
  const [donators, setDonators] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name_in_english: '',
    name_in_hindi: '',
    type: '',
    cost: '',
  });


  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };


  useEffect(() => {
    // Fetch products data from the API
    // Replace the API URL with your actual endpoint
    fetch('https://api.kqrgaushala.org/donationCategories?type=products')
      .then((response) => response.json())
      .then((data) => setProducts(data.return_result));

    // Fetch donators data from the API when the component mounts
    // This can be triggered based on the user's action, like clicking a button
    fetch('https://api.kqrgaushala.org/donators')
      .then((response) => response.json())
      .then((data) => setDonators(data.data));
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Fetch products data when the "Donation Products" tab is selected
    if (tab === 'donationProducts') {
      fetch('https://api.kqrgaushala.org/donationCategories?type=products')
        .then((response) => response.json())
        .then((data) => setProducts(data.return_result));
    }

    // Fetch donators data when the "Donators List" tab is selected
    if (tab === 'donatorsList') {
      fetch('https://api.kqrgaushala.org/donators')
        .then((response) => response.json())
        .then((data) => setDonators(data.data));
    }
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
  };

  const handleSaveClick = async (updatedProduct) => {
    try {
      const response = await fetch('https://api.kqrgaushala.org/updateProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      const data = await response.json();

      if (data.success) {
        // Update the product in the local state
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setEditProduct(null); // Reset the edit state
      } else {
        console.error('Error updating product:', data.error);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteClick = (productId, name_in_english, name_in_hindi, type, cost) => {
    // Display a confirmation alert before deleting the product
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');

    if (confirmDelete) {
      // Implement the logic to delete the product from the backend
      try {
        fetch('https://api.kqrgaushala.org/deleteProduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: productId, name_in_english: name_in_english, name_in_hindi: name_in_hindi, type: type, cost: cost })
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              // Remove the deleted product from the local state
              setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id !== productId)
              );
              setEditProduct(null); // Reset the edit state
            } else {
              console.error('Error deleting product:', data.error);
            }
          })
          .catch((error) => {
            console.error('Error deleting product:', error);
          });
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch('https://api.kqrgaushala.org/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      const data = await response.json();

      if (data.success) {
        // Update the local state with the new product
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        handleCloseAddModal(); // Close the modal after successful addition
        setNewProduct({
          name_in_english: '',
          name_in_hindi: '',
          type: '',
          cost: '',
        });
        window.location.reload();
      } else {
        console.error('Error adding product:', data.error);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  const isFormValid = () => {
    // Check if all required fields have values
    return (
      newProduct.name_in_english.trim() !== '' &&
      newProduct.name_in_hindi.trim() !== '' &&
      newProduct.type.trim() !== '' &&
      newProduct.cost.trim() !== ''
    );
  };
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    const columns = [
      'Sl.No',
      'Name',
      'Phone Number',
      'Email',
      'Address',
      'Product',
      'Type',
      'Amount',
      'Units',
      'Pan Number',
      'Date Time',
      'Order Id',
    ];

    const rows = donators.map((donator, index) => [
      index + 1,
      donator.name,
      donator.phone_num,
      donator.email,
      donator.address,
      donator.product,
      donator.type,
      donator.amount,
      donator.units,
      donator.pan_number,
      donator.datetime,
      donator.order_id,
    ]);

    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 10,
      theme: 'grid',
      styles: {
        fontSize: 5, // Decrease font size
        overflow: 'linebreak',
      },
      columnStyles: {
        0: { cellWidth: 10 }, // Adjust column widths as needed
        1: { cellWidth: 15 },
        2: { cellWidth: 15 },
        3: { cellWidth: 15 },
        4: { cellWidth: 25 },
        5: { cellWidth: 15 },
        6: { cellWidth: 15 },
        7: { cellWidth: 10 },
        8: { cellWidth: 10 },
        9: { cellWidth: 15 },
        10: { cellWidth: 15 },
        11: { cellWidth: 15 },
      },
    });

    doc.save('donators_list.pdf');
  };

  return (
    <div className='container'>

      <div className='d-flex flex-row mt-4 flex-row justify-content-center'>
        <div className='dash-top-btns'>
        <div className='col-md-12 '>
          {/* Buttons for switching between tabs */}
          <Button
            variant={activeTab === 'donationProducts' ? 'primary' : 'secondary'}
            className="mr-2"
            onClick={() => handleTabClick('donationProducts')}
          >
            Donation Products
          </Button>
          <Button
            variant={activeTab === 'donatorsList' ? 'primary' : 'secondary'}
            onClick={() => handleTabClick('donatorsList')}
          >
            Donators List
          </Button>
        </div>
        {/* Render the "Logout" button */}
        <div className='logout-btn'>
          <Button variant="danger" onClick={handleLogout} className='ml-2'>
            Logout
          </Button>
        </div>
        </div>
      </div>

      <div>
        {/* Content */}
        <Container className="mt-5 d-flex justify-content-center">
          {/* Conditionally render content based on the active tab */}
          {activeTab === 'donationProducts' && (
            <div className='text-center'>
              <div className='d-md-flex felx-row justify-content-center '>
                <h3>Donation Products</h3>
                <div className='d-flex flex-row justify-content-center add-prod-btn'>
                  <Button variant="primary" className="mb-2 ml-2" onClick={handleShowAddModal}>
                    +
                  </Button>
                </div>
              </div>

              <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton >

                  <Modal.Title>Add Donation Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="name_in_english">
                      <Form.Label>Name in English</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name in English"
                        value={newProduct.name_in_english}
                        onChange={handleInputChange}
                        name="name_in_english"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="name_in_hindi">
                      <Form.Label>Name in Hindi</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name in Hindi"
                        value={newProduct.name_in_hindi}
                        onChange={handleInputChange}
                        name="name_in_hindi"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="type">
                      <Form.Label>Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Type"
                        value={newProduct.type}
                        onChange={handleInputChange}
                        name="type"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="cost">
                      <Form.Label>Cost</Form.Label>
                      <Form.Control
                        type="Number"
                        placeholder="Enter Cost"
                        value={newProduct.cost}
                        onChange={handleInputChange}
                        name="cost"
                        required
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAddModal} >
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleAddProduct} disabled={!isFormValid()}>
                    Add Product
                  </Button>
                </Modal.Footer>
              </Modal>

              <Table striped bordered hover className='prod-table'>
                <thead>
                  <tr>
                    <th>Serial Number</th>
                    {/* <th>ID</th> */}
                    <th>Name (English)</th>
                    <th>Name (Hindi)</th>
                    <th>Type</th>
                    <th>Cost</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      {/* <td>{product.id}</td> */}
                      <td>
                        {editProduct && editProduct.id === product.id ? (
                          <input
                            type="text"
                            value={editProduct.name_in_english}
                            onChange={(e) =>
                              setEditProduct({ ...editProduct, name_in_english: e.target.value })
                            }
                          />
                        ) : (
                          product.name_in_english
                        )}
                      </td>
                      <td>
                        {editProduct && editProduct.id === product.id ? (
                          <input
                            type="text"
                            value={editProduct.name_in_hindi}
                            onChange={(e) =>
                              setEditProduct({ ...editProduct, name_in_hindi: e.target.value })
                            }
                          />
                        ) : (
                          product.name_in_hindi
                        )}
                      </td>
                      <td>
                        {editProduct && editProduct.id === product.id ? (
                          <input
                            type="text"
                            value={editProduct.type}
                            onChange={(e) =>
                              setEditProduct({ ...editProduct, type: e.target.value })
                            }
                          />
                        ) : (
                          product.type
                        )}
                      </td>
                      <td>
                        {editProduct && editProduct.id === product.id ? (
                          <input
                            type="text"
                            value={editProduct.cost}
                            onChange={(e) =>
                              setEditProduct({ ...editProduct, cost: e.target.value })
                            }
                          />
                        ) : (
                          product.cost
                        )}
                      </td>
                      <td>
                        {editProduct && editProduct.id === product.id ? (
                          <>
                            <Button
                              variant="success"
                              onClick={() => handleSaveClick(editProduct)}
                            >
                              Save
                            </Button>
                            <Button
                              variant="secondary"
                              className="ml-2"
                              onClick={() => setEditProduct(null)}
                            >
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              variant="primary"
                              onClick={() => handleEditClick(product)}
                              disabled={editProduct !== null}
                              className='table-edit-btn'
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              className="ml-2 table-del-btn"
                              onClick={() => handleDeleteClick(product.id, product.name_in_english, product.name_in_hindi, product.type, product.cost)}
                              
                            >
                              Delete
                            </Button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}

          {activeTab === 'donatorsList' && (
            <div className='text-center'>
              <div className='d-flex flex-row justify-content-center don-list-th'>
                <h3>Donators List</h3>
                {/* PDF Download Button */}
            <Button variant="primary" className="mb-2 ml-2 download-btn" onClick={handleDownloadPDF}>
              <FontAwesomeIcon icon={faDownload} /> Download PDF
            </Button>
              </div>
              {/* Render Donators List */}
              <Table striped bordered hover className='donator-lst-table' id="donatorsTable">
                <thead>
                  <tr>
                    <th>Serial Number</th>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Product</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Units</th>
                    <th>Pan Number</th>
                    <th>Date Time</th>
                    <th>Order Id</th>
                  </tr>
                </thead>
                <tbody>
                  {donators.map((donator, index) => (
                    <tr key={donator.id}>
                      <td>{index + 1}</td>
                      {/* <td>{donator.id}</td> */}
                      <td>{donator.name}</td>
                      <td>{donator.phone_num}</td>
                      <td>{donator.email}</td>
                      <td>{donator.address}</td>
                      <td>{donator.product}</td>
                      <td>{donator.type}</td>
                      <td>{donator.amount}</td>
                      <td>{donator.units}</td>
                      <td>{donator.pan_number}</td>
                      <td>{donator.datetime}</td>
                      <td>{donator.order_id}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Container>
      </div>

    </div>
  );
};

export default DonationContent;
