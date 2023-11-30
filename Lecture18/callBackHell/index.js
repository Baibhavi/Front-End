function downloadFile(path, downloaded){
    console.log('file start to download from', path);
    setTimeout(() =>{
        let file = path.split('/')[1]
        downloaded(file);
    }, 3000)
}

function compressFile(file, compressed){
    console.log('file start to compress');
    setTimeout(() =>{
        let compFile = file.split('.')[0]+'.zip';
        compressed(compFile);
    }, 2000);
}

//call back hell
downloadFile('facebook.com/profile.jpg', (file)=>{
    console.log('file sucessfully downloaded as', file);
    compressFile(file, (compFile) =>{
        console.log('compressed successfully as', compFile);
    })
})