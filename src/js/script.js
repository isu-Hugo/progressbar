function calc(){
    let feito = document.getElementById('feito').value;
    let fazer = document.getElementById('fazer').value;
    let result = (feito*100)/fazer;

    //alert(`${result.toFixed(2)}%`);
    document.getElementById('result').innerHTML = `${result.toFixed(2)}% feito!`;
    document.getElementById('barra').value = result;
}