const p = new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  
  async function asyncCall() {
    console.log('calling...');
    const result = await p;
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();