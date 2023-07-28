import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              mauris id lacus lacinia eleifend.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Contact</h3>
            <p>
              Email: info@example.com
              <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer