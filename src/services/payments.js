export function simulatePayment(amount){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        Math.random() < 0.85 ? resolve({ ok:true, amount }) : reject(new Error('Declinado'))
      }, 1200)
    })
  }
  