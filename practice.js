let calculator = (a,b) => {
    let add = () => {
        return result.parameters[0] + result.parameters[1];
    }

    let sub = () => {
        return result.parameters[0] + result.parameters[1];
    }
    let result = {
        add: add,
        sub: sub,
        parameters: [a, b]
    }
    
    return result;
}
let data = calculator(7,8);
console.log(data.add());



















// let myfunction = (a, b) => {
//     let add = () => {
//         return result.parameters[0] + result.parameters[1];
//     };
//     let sub = () => {
//         return result.parameters[0] - result.parameters[1];
//     };
//     let mtpy = () => {
//         return result.parameters[0] * result.parameters[1];
//     };

//     let result = {
//         add: add,
//         sub: sub,
//         mtpy: mtpy,
//         parameters: [a, b]
//     };

//     return result;
// };

// let result = myfunction(1, 4);
// console.log(result.add());
// console.log(result.sub());
// console.log(result.mtpy());
// console.log(result.parameters); 
