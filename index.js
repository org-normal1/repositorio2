console.log("Digite um nome!")

process.stdin.on("data", function(data){
    let entrada_usuario = data.toString().trim()

    if(entrada_usuario.length > 3){
        console.log("Fera demais cara.")
    }else
        console.log("Sliced meu!")
})