function showForm(formType) {
    const formTitle = document.getElementById('form-title');
    const formContent = document.getElementById('form-content');
  
    if (formType === 'event') {
      formTitle.textContent = 'Event Details';
      formContent.innerHTML = `
        <div class="form-group">
          <label>Event:</label>
          <input type="text" placeholder="Enter event name">
        </div>
        <div class="form-group">
          <label>Customer Name:</label>
          <input type="text" placeholder="Enter customer name">
        </div>
        <div class="form-group">
          <label>Contact:</label>
          <input type="text" placeholder="Enter contact details">
        </div>
        <div class="form-group">
          <label>Location:</label>
          <input type="text" placeholder="Enter location">
        </div>
        <div class="form-group">
          <label>No. of Guests:</label>
          <input type="number" placeholder="Enter number of guests">
        </div>
        <div class="form-group">
          <label>Requirements:</label>
          <textarea placeholder="Enter any specific requirements"></textarea>
        </div>
      `;
    } else if (formType === 'vendor') {
      formTitle.textContent = 'Vendor Details';
      formContent.innerHTML = `
        <div class="form-group">
          <label>Vendor Name:</label>
          <input type="text" placeholder="Enter vendor name">
        </div>
        <div class="form-group">
          <label>Service Type:</label>
          <input type="text" placeholder="Enter service type">
        </div>
        <div class="form-group">
          <label>Contact Person:</label>
          <input type="text" placeholder="Enter contact person">
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="text" placeholder="Enter phone number">
        </div>
      `;
    } else if (formType === 'user') {
      formTitle.textContent = 'User Details';
      formContent.innerHTML = `
        <div class="form-group">
          <label>User Name:</label>
          <input type="text" placeholder="Enter user name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter email address">
        </div>
        <div class="form-group">
          <label>Role:</label>
          <select>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
      `;
    }
  }
  