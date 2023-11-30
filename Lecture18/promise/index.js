function check (kalMilenge){
    let pr = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(meetTommorow){
                let data = "to main tujhe party dunga"
                resolve(data);
            }
            else{
                let err = "nahi aya to party cancel"
                reject(err);
            }
        }, 5000);
    })
    return pr;
}

check(true);