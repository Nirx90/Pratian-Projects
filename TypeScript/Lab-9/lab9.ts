const fooditem=['chiken','Pizza','Jalebi','fafda']

function say(){
    console.log('array function');
}

fooditem.forEach(function(item,index){
    console.log(`${index+1} .${item} `);
});
    