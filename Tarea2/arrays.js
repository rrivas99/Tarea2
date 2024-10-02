const numeros = [1,2,3,4,5]
console.log(numeros.length);

//1.
function arr(nums)
{
    let size=nums.length;
    let suma = 0;
    for(let i=0;i<=size;i++)
    {
        suma += i;
    }
    return suma;
}
console.log(arr(numeros));

//2.
function average(nums)
{
    let size = nums.length;
    let avg = 0;
    for(let i=0;i<=size;i++)
    {
        avg += i;
    }
    avg = avg/size;
    return avg;
}
console.log(average(numeros));

//3.
const letras = ['a','b','c','d','e','f','g']
function up(letras)
{
    const mayus= [];
    letras.forEach(letra => {
        let upp = letra.toUpperCase();
        mayus.push(upp);
    });
    return mayus;
}
console.log(up(letras));

//4.
const nums = [1,2,3,4,5,6]
function pares(nums)
{
    const pair= [];
    for(let i=0; i<=nums.length; i++)
    {
        if (nums[i]%2 == 0)
        {
            pair.push(nums[i]);
        }
    }
    return pair;
}
console.log(pares(nums));