let sale = +prompt("Enter achieved sales figure: ");

if (sale>=0 && sale<=5000) {
    console.log("Total commission earned is:", (sale+(sale*0.02)));
} 
else if (sale>=5001 && sale<=10000) {
    console.log("Total commission earned is:", (sale+(sale*0.05)));
}
else if (sale>=10001 && sale<=20000) {
    console.log("Total commission earned is:", (sale+(sale*0.07)));
}
else if (sale>20000) {
    console.log("Total commission earned is:", (sale+(sale*0.1)));
}
else{
    console.log("Need to focus on achieving the targets");
}