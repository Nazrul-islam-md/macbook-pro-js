function getRam(gb){
    const ram = document.getElementById('memory-cost');
    if(gb){
        ram.innerText = 0;
    }
    else{
        ram.innerText = 180;
    }
    getCalculate();
}

function getStorage(ssd){
    const storage = document.getElementById('storage-cost');
    if(ssd == 256){
        storage.innerText = 0;
    }
    else if(ssd == 512){
        storage.innerText = 100;
    }
    else{
        storage.innerText = 180;
    }
    getCalculate();
}

function getDelivery(urgent){
    const delivery = document.getElementById('delivery-cost');
    if(urgent){
        delivery.innerText = 20;
    }
    else{
        delivery.innerText = 0;
    }
    getCalculate();
}

function getInteger(idName){
    const displayName = document.getElementById(idName);
    const displayNameString = displayName.innerText;
    const displayNameInt = parseInt(displayNameString);
    return displayNameInt;

}

function getCalculate(){
    const totalPrice = document.getElementById('total-price');
    const basePrice = getInteger('base-price')
    const ram = getInteger('memory-cost');
    const storage = getInteger('storage-cost');
    const delivery = getInteger('delivery-cost');
    totalPrice.innerText = basePrice + storage + delivery + ram;

}
// memory
document.getElementById('8gb').addEventListener('click', function(){
    getRam(true);
})
document.getElementById('16gb').addEventListener('click', function(){
    getRam(false);
})
// storage
document.getElementById('256gb').addEventListener('click', function(){
    getStorage(256);
})
document.getElementById('512gb').addEventListener('click', function(){
    getStorage(512);
})
document.getElementById('1tb').addEventListener('click', function(){
    getStorage(1);
})
// delivery
document.getElementById('aug26').addEventListener('click', function(){
    getDelivery(false);
})
document.getElementById('aug19').addEventListener('click', function(){
    getDelivery(true);
})