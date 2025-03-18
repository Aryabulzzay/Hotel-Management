document.getElementById('guestForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const formDataJson = {};
  formData.forEach((value, key) => {
    formDataJson[key] = value;
  });
console.log (JSON.stringify(formDataJson, null,2)) ;
  try {
    const response = await fetch('http://localhost:5000/guests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataJson)
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error message from server if available
      throw new Error('Error adding guest: ' + errorText);
    }

    alert('Guest added successfully!');
    this.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while adding the guest. Please try again. ' + (error.message || ''));
  }
  
});
