let rs = require("readline-sync") 
let per1 = rs.question("Usa mascara quando for sair da casa? sim ou não \n")
let per2 = rs.question("Lava as mãos frequentemente? \n")

if (per1 == "sim" && per2 == "sim"){
    console.log("Está de parabéns")
} else {
    console.log("Tem que se cuidar")
}
