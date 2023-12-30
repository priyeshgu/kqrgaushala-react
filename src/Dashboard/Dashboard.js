import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Container, Table, Button } from 'react-bootstrap';

const DonationContent = () => {
  const [activeTab, setActiveTab] = useState('donationProducts');
  const [products, setProducts] = useState([]);
  const [donators, setDonators] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    // Fetch products data from the API
    // Replace the API URL with your actual endpoint
    fetch('http://192.168.1.5:3001/donationCategories?type=products')
      .then((response) => response.json())
      .then((data) => setProducts(data.return_result));

    // Fetch donators data from the API when the component mounts
    // This can be triggered based on the user's action, like clicking a button
    fetch('http://192.168.1.5:3001/donators')
      .then((response) => response.json())
      .then((data) => setDonators(data.data));
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Fetch products data when the "Donation Products" tab is selected
    if (tab === 'donationProducts') {
      fetch('http://192.168.1.5:3001/donationCategories?type=products')
        .then((response) => response.json())
        .then((data) => setProducts(data.return_result));
    }

    // Fetch donators data when the "Donators List" tab is selected
    if (tab === 'donatorsList') {
      fetch('http://192.168.1.5:3001/donators')
        .then((response) => response.json())
        .then((data) => setDonators(data.data));
    }
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
  };

  const handleSaveClick = async (updatedProduct) => {
    try {
      const response = await fetch('http://192.168.1.5:3001/updateProduct', {
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

  const handleDeleteClick = (productId,englis,hindi,type,cost) => {
    // Display a confirmation alert before deleting the product
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');

    if (confirmDelete) {
      // Implement the logic to delete the product from the backend
      try {
        fetch('http://192.168.1.5:3001/deleteProduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( {id:productId,name_in_english:englis, name_in_hindi:hindi,type:type,cost:cost})
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

  return (
    <div>
    <div className="mt-5 d-flex justify-content-center rounded">
      {/* Sidebar */}
      <Navbar bg="light" expand="lg" className="flex-shrink-0">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-row">
              <Nav.Link
                href="#donationProducts"
                active={activeTab === 'donationProducts'}
                onClick={() => handleTabClick('donationProducts')}
              >
                Donation Products
              </Nav.Link>
              <Nav.Link
                href="#donatorsList"
                active={activeTab === 'donatorsList'}
                onClick={() => handleTabClick('donatorsList')}
              >
                Donators List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

      <div>
      {/* Content */}
      <Container className="mt-5 d-flex justify-content-center">
        {/* Conditionally render content based on the active tab */}
        {activeTab === 'donationProducts' && (
          <div className='text-center'>
            <h3>Donation Products</h3>
            <Table striped bordered hover>
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
                {products.map((product,index) => (
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
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            className="ml-2"
                            onClick={() => handleDeleteClick(product.id,product.name_in_english,product.name_in_hindi,product.type,product.cost)}
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
            <h3>Donators List</h3>
            {/* Render Donators List */}
            <Table striped bordered hover>
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
                </tr>
              </thead>
              <tbody>
                {donators.map((donator,index) => (
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
