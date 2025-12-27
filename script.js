const insertNum = () =>{
    return new Promise((resolve, reject) =>{
        const userNum = Number(window.prompt("Introduce un numero (1-6): "));
        const randomnum = Math.floor(Math.random() * 6 + 1);
        if(isNaN(userNum)){
            return reject(new Error("Entrada invalida"));
        }
        if(userNum <1 || userNum >6){
            return reject(new Error("Numero fuera de rango"));
        }

        if(userNum == randomnum){
            resolve({
                puntos: 2, randomnum,
            });
        } else if ((userNum -1) == randomnum || (userNum + 1) == randomnum){
            resolve({
                puntos: 1, randomnum,
            });
        } else{
            resolve({
                puntos: 0, randomnum,
            });
        }
    });
};


const continueGame = () =>{
    return window.confirm("¿Quieres continuar jugando?");
}


// const play = () =>{
//     insertNum()
//     .then((result)=>{
//         alert(`Dado: ${result.randomnum}: obtuviste ${result.puntos} puntos`);
//     continueGame()
//     .then((result) =>{
//         if(result) {
//             play();
//         }else{
//             alert("Termino el juego");
//         }
//     });    
//     }).catch((error) =>alert(error));
// };


const play = async() =>{
    try{
        const result = await insertNum();
        alert(`Dado: ${result.randomnum}: obtuviste ${result.puntos} puntos`);
        const isContinue = continueGame();
        if (isContinue){
            play();
        }else{
            alert("Juego terminado");
        }
    } catch(error){
        alert(error);
    }
}
play();